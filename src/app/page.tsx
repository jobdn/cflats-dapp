import { StoreProvider } from "./config/StoreProvider";
import { WagmiProvider } from "./config/WagmiProvider";

import "./globals.scss";
import classes from "./page.module.scss";

import { TokenActionsList } from "@/widgets/TokenActionsList";
import { MobileHeader } from "@/widgets/MobileHeader";
import { TokensTab } from "@/widgets/TokensTab";

export default function Home() {
  return (
    <StoreProvider>
      <WagmiProvider>
        <MobileHeader className={classes.header} />

        {/* id is used to append wallet modal to main */}
        <main id="main" className={classes.layout}>
          <TokenActionsList />
          <TokensTab />
        </main>
      </WagmiProvider>
    </StoreProvider>
  );
}
