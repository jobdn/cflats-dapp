import { StoreProvider } from "./config/StoreProvider";
import { WagmiProvider } from "./config/WagmiProvider";

import "./globals.scss";

import { Layout } from "./Layout/";

export default function Home() {
  return (
    <StoreProvider>
      <WagmiProvider>
        <Layout />
      </WagmiProvider>
    </StoreProvider>
  );
}
