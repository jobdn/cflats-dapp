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

        <main className={classes.layout}>
          <div className={classes.actions}>
            <TokenActionsList />
          </div>
          <div className={classes.tabs}>
            <TokensTab />
          </div>

          <div className={classes.stats}></div>
        </main>
      </WagmiProvider>
    </StoreProvider>
  );
}
