import { LogoWithKey } from "@/shared/ui/LogoWithKey";
import classes from "./MobileHeader.module.scss";
import clsx from "clsx";
import dynamic from "next/dynamic";

const Wallet = dynamic(() => import("../../../entities/Wallet"), {
  ssr: false,
});

type MobileHeaderProps = {
  className?: string;
};

export const MobileHeader = (props: MobileHeaderProps) => {
  const { className } = props;

  return (
    <header className={clsx(classes.header, className)}>
      <LogoWithKey />

      <Wallet />
    </header>
  );
};
