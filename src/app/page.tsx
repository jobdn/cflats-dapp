"use client";

import { WagmiProvider } from "wagmi";
import { StoreProvider } from "./config/StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.scss";
import classes from "./page.module.scss";

import { config } from "@/shared/config/wagmi";
import { LeftSidebar } from "@/widgets/LeftSidebar";
import { MobileHeader } from "@/widgets/MobileHeader";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <StoreProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <MobileHeader className={classes.header} />
          <main className={classes.layout}>
            <LeftSidebar />
          </main>
        </QueryClientProvider>
      </WagmiProvider>
    </StoreProvider>
  );
}
