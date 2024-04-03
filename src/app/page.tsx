"use client";

import { WagmiProvider } from "wagmi";
import { StoreProvider } from "./config/StoreProvider";
import { config } from "./config/wagmi";

export default function Home() {
  return (
    <main>
      <StoreProvider>
        <WagmiProvider config={config}></WagmiProvider>
      </StoreProvider>
    </main>
  );
}
