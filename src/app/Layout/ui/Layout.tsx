import classes from "./Layout.module.scss";

import { MobileLayout } from "./MobileLayout/MobileLayout";
import { DesktopLayout } from "./DesktopLayout/DesktopLayout";

interface LayoutProps {
  className?: string;
}

export const Layout = () => {
  return (
    <>
      <MobileLayout className={classes.mobile} />
      <DesktopLayout className={classes.desktop} />
    </>
  );
};
