export interface Nft {
    title: string;
    src: string;
    price: string;
    creator: string;
    edition: number | null;
    numberOfEditions: number;
    hasAction: boolean;
    action: string;
 }