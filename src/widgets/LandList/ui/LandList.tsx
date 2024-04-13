import Image from "next/image";

import { Land } from "@/shared/ui/Land";

import landsIcon from "../images/lands.svg";

import classes from "./LandList.module.scss";
import clsx from "clsx";

type LandListProps = {
  className?: string;
};

export const LandList = (props: LandListProps) => {
  const { className } = props;
  return (
    <div className={clsx(classes.lands, className)}>
      <div className={classes.landsHeader}>
        <Image src={landsIcon} alt="lands icon" />
        <h2 className={classes.title}>Available lands: </h2>
      </div>

      <div className={classes.landsWrapper}>
        <Land gen={1} name="Living rooms" type="unlocked" />
        <Land
          gen={2}
          name="Bedrooms"
          className={classes.land2}
          type="locked"
          title="Open GEN"
        />
        <Land
          gen={3}
          className={classes.land3}
          name="Dining rooms"
          type="locked"
        />
        <Land gen={4} name="Play room" type="locked" />
        <Land gen={5} name="Secret room" type="locked" />
      </div>
    </div>
  );
};
