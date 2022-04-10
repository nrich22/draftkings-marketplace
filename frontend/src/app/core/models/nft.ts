export interface Nft {
    title: string;
    src: string;
    price: number;
    creator: string;
    edition: number | null;
    numberOfEditions: number;
    hasAction: boolean;
    action: string;
 }