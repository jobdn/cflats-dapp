import { LogoWithKey } from "@/shared/ui/LogoWithKey";
import classes from "./MobileHeader.module.scss";
import { Account } from "@/entities/Account";
import clsx from "clsx";

type MobileHeaderProps = {
  className?: string;
};

export const MobileHeader = (props: MobileHeaderProps) => {
  const { className } = props;

  return (
    <header className={clsx(classes.header, className)}>
      <LogoWithKey />

      <Account />
    </header>
  );
};
