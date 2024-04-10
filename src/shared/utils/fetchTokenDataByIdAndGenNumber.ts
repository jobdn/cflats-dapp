import { GenNumber } from "../types";

import blankGoldImg from "../images/gen/0/0-998.jpg";
import blankDiamondImg from "../images/gen/0/999-1110.jpg";
import { getTokenURIByIdAndGenNumber } from "./getTokenURIByIdAndGenNumber";
import { getCNRSRarityFromJson } from "./getCNRSRarityFromJson";

export async function fetchTokenDataByIdAndGenNumber(
  genNumber: GenNumber,
  id: number
) {
  if (genNumber === 0) {
    return {
      name: "Cryptoflats NFT Pass GEN#0",
      description:
        "Collection of 1111 NFT passes for Cryptoflats project benefits",
      id: id,
      genNumber: genNumber,
      imgSrc: id < 999 ? blankGoldImg.src : blankDiamondImg.src,
      rarity: id < 999 ? "gold" : "diamond",
    };
  }

  try {
    const { tokenUri, imageUrl } = getTokenURIByIdAndGenNumber(genNumber, id);
    const response = await fetch(tokenUri);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as Record<string, unknown>;
    const tokenRarity = getCNRSRarityFromJson(data);

    return {
      name: data.name,
      description: data.description,
      imgSrc: imageUrl,
      rarity: tokenRarity,
      id: Number(id),
      genNumber: Number(genNumber),
    };
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }

  return {};
}
