import { Banner } from "./banner";
import { CollectibleDrop } from "./collectibleDrops";

export interface DropsResponse {
    collectibleDrops: CollectibleDrop[];
    banner: Banner;
 }