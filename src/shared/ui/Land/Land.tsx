import Image from "next/image";
import clsx from "clsx";

import { GenNumber } from "@/shared/types";

import key from "./images/key.png";

import classes from "./Land.module.scss";
import { memo } from "react";

type LandProps = {
  type: "unlocked" | "locked";
  title?: string;
  name: string;
  gen: GenNumber;
  className?: string;
};

export const Land = memo((props: LandProps) => {
  const { gen, name, type, className, title } = props;

  return (
    <div
      className={clsx(
        classes.land,
        classes[`land_${type}`],
        type === "unlocked" && classes[`land_gen${gen}`],
        className
      )}
    >
      <h3 className={classes.title}>{title || type}</h3>
      <Image src={key} alt="Land icon" />

      <div className={classes.desc}>
        <p>GEN#{gen}</p>
        <p className={classes.name}>{name}</p>
      </div>
    </div>
  );
});

Land.displayName = "Land";
