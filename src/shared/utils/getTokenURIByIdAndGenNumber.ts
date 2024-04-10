import { GenNumber } from "../types";

const BaseURIByGen = new Map<number, string>([
  [0, "https://ipfs.io/ipfs/QmehYGrgxc4wfbpMeTjmwDiWu51fNquTqnTx6w1AJDWwJp"],
]);

const ImageURLByGen = new Map<number, Record<string, string>>([
  [
    0,
    {
      baseURI:
        "https://bafybeifdf5nmni2ft66hhkbzeulecydjvssnckfc3xuc2rdv64nrepxm4e.ipfs.dweb.link",
      ext: ".jpg",
    },
  ],
]);

export function getTokenURIByIdAndGenNumber(genNumber: GenNumber, id: number) {
  if (genNumber < 0 || genNumber > 5) {
    throw new Error(
      "Can't fetch data for gen less then zero or more than five!"
    );
  }

  const baseURI = BaseURIByGen.get(genNumber);
  const imageUrl = ImageURLByGen.get(genNumber);

  if (baseURI === undefined && imageUrl === undefined) {
    throw new Error("Oh Sorry! This gen has not been deployed or added yet!");
  }

  return {
    tokenUri: `${baseURI}/${id}.json`,
    imageUrl: `${imageUrl?.baseURI}/${id}${imageUrl?.ext}`,
  };
}
