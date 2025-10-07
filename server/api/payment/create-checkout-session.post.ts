import Stripe from 'stripe';

export default defineEventHandler(async event => {
    const config = useRuntimeConfig();
    const stripe = new Stripe(config.STRIPE_SECRET_KEY);

    const { items } = await readBody(event);

    const line_items = (items || []).map((it: any) => ({
        price_data: {
            currency: 'uah',
            product_data: { name: it.name },
            unit_amount: it.amount,
        },
        quantity: it.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${config.public.appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config.public.appUrl}/cancel`,
    });

    return { id: session.id };

    // const session = await stripe.checkout.sessions.create({
    //     line_items: [
    //         {
    //             price: 'price_1SEWndF8BPogoGfsCCKipmue',
    //             quantity: 1,
    //         },
    //     ],
    //     mode: 'payment',
    //     success_url: `${YOUR_DOMAIN}/success.html`,
    //     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    // });

    return {};
});
