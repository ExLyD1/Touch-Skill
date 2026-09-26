export interface IRichTextSegment {
    text: string;
    bold: boolean;
}

// Splits copy like "у **2013 році**, отримавши" into plain and bold segments,
// so translated content can carry emphasis without v-html
export const parseRichText = (text: string): IRichTextSegment[] =>
    text
        .split('**')
        .map((part, index) => ({ text: part, bold: index % 2 === 1 }))
        .filter(segment => segment.text !== '');
