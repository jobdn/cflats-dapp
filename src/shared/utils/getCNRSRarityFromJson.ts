import { Rarity } from "../types";

const RarityToUint8 = new Map<string, Rarity>([
  ["standard", "standard"],
  ["typical", "standard"],
  ["silver", "silver"],
  ["gold", "gold"],
  ["diamond", "diamond"],
]);

export function getCNRSRarityFromJson(
  cnrsJson: Record<string, unknown>
): Rarity {
  const { attributes } = cnrsJson;
  const strongTypedAtrributes = attributes as Array<Record<string, string>>;
  let rarity: Rarity = "standard";

  for (const attrib of strongTypedAtrributes) {
    if (attrib.trait_type === "Rarity") {
      rarity = RarityToUint8.get(attrib.value.toLowerCase()) ?? rarity;
      break;
    }
  }

  return rarity;
}
