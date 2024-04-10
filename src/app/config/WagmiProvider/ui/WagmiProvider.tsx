"use client";

import type { PropsWithChildren } from "react";
import { WagmiProvider as WagmiProviderComponent } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/shared/config/wagmi";

interface WagmiProviderProps extends PropsWithChildren {}

const queryClient = new QueryClient();

export const WagmiProvider = ({ children }: WagmiProviderProps) => {
  return (
    <WagmiProviderComponent config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProviderComponent>
  );
};
