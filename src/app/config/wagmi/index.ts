// TODO: wallet connect
import { http, createConfig } from "wagmi";
import { polygonMumbai, mainnet } from "wagmi/chains";
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";

//! Is taken from the example
// TODO: change to normal project id in prod
const projectId = "e1773ede90b4ea14750de714dc1e86d7";

export const config = createConfig({
  chains: [mainnet, polygonMumbai],
  connectors: [
    injected({ target: "metaMask" }),
    walletConnect({ projectId }),
    coinbaseWallet({ appName: "Cryptoflats" }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygonMumbai.id]: http(),
  },
});
