export type GenNumber = 0 | 1 | 2 | 3 | 4 | 5;
export type Rarity = "standard" | "silver" | "gold" | "diamond";

export interface Token {
  rarity: Rarity;
  imgSrc: string;
  genNumber: number;
  name: string;
  id: string;
  //   isStaked?: boolean;
  //   lockPeriod?: number;
}
