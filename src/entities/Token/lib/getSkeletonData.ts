import { GenNumber } from "@/shared/types";
import { v4 as uuidv4 } from "uuid";

export const getSkeletonData = (skeletonText: string, amount?: number) => {
  return [...Array(amount)].map((_, key) => ({
    id: uuidv4(),
    // footerText: gen ? `NFT GEN#${gen}` : `STAKED NFT`,
    footerText: skeletonText,
  }));
};
