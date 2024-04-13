import { StoreProvider } from "./config/StoreProvider";
import { WagmiProvider } from "./config/WagmiProvider";

import "./globals.scss";
import classes from "./page.module.scss";

import { TokenActionsList } from "@/widgets/TokenActionsList";
import { MobileHeader } from "@/widgets/MobileHeader";
import { TokensTab } from "@/widgets/TokensTab";
import { EarningStats } from "@/widgets/EarningStats";
import { UserStats } from "@/widgets/UserStats";
import { LandList } from "@/widgets/LandList";
import Wallet from "@/entities/Wallet";
import { Playground } from "@/features/Playground";

export default function Home() {
  return (
    <StoreProvider>
      <WagmiProvider>
        <MobileHeader className={classes.header} />

        <main className={classes.layout}>
          <Wallet balancePosition="right" className={classes.wallet} />
          <div className={classes.actions}>
            <TokenActionsList className={classes.actionsList} />
            <EarningStats className={classes.mobileEarnStats} />
          </div>
          <div className={classes.tabs}>
            <TokensTab />
          </div>

          <Playground className={classes.playground} />

          <div className={classes.stats}>
            <div className={classes.statsWrapper}>
              <EarningStats className={classes.earnStats} />
              <UserStats className={classes.userStats} />
            </div>
            <LandList />
          </div>
        </main>
      </WagmiProvider>
    </StoreProvider>
  );
}
