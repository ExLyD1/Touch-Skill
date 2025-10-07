import crypto from 'crypto';

interface IBody {
    amount: string | number;
    currency?: string;
    description?: string;
    order_id?: string;
    result_url?: string;
    server_url?: string;
}

function makeData(params: Record<string, any>) {
    return Buffer.from(JSON.stringify(params)).toString('base64');
}

function makeSignature(privateKey: string, data: string) {
    // sha1 binary digest, then base64
    const sha1 = crypto.createHash('sha1');
    sha1.update(privateKey + data + privateKey, 'utf8');
    const digest = sha1.digest(); // Buffer (binary)
    return digest.toString('base64');
}

export default defineEventHandler(async event => {
    const config = useRuntimeConfig();
    const body = await readBody<IBody>(event);

    const appUrl = config.public.APP_URL;
    const public_key = config.public.NUXT_PUBLIC_LIQPAY_KEY;
    const private_key = config.LIQPAY_SECRET_KEY;
    if (!public_key || !private_key) {
        return { error: 'LiqPay keys not configured on server' };
    }

    const params = {
        public_key,
        version: '3',
        action: 'pay',
        amount: body.amount ?? '1',
        currency: body.currency ?? 'UAH',
        description: body.description ?? 'Payment description',
        order_id: body.order_id ?? `order_${Date.now()}`,
        language: 'uk',
        result_url: body.result_url ?? appUrl,
        // server_url:
        //     body.server_url ?? 'https://yourdomain.com/api/liqpay/webhook',
    };

    const data = makeData(params);
    const signature = makeSignature(private_key, data);

    return {
        url: 'https://www.liqpay.ua/api/3/checkout',
        data,
        signature,
    };
});
