import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import classes from "./Stats.module.scss";
import { Rarity } from "@/shared/types";
import clsx from "clsx";

export interface StatsItem {
  name: string;
  value: string;
  listItemStyle?: Rarity;
}

interface StatsProps {
  statsIcon: string | StaticImport;
  statsTitle: string;
  stats: StatsItem[];
  className?: string;
}

export const Stats = (props: StatsProps) => {
  const { stats, statsIcon, statsTitle, className } = props;
  return (
    <div className={className}>
      <div className={classes.statsHeader}>
        <Image src={statsIcon} alt="Stats icon" />
        <h2 className={classes.title}>{statsTitle}</h2>
      </div>

      <ul className={classes.statsList}>
        {stats.map((statsItem) => (
          <li
            key={statsItem.name}
            className={clsx(
              classes.statsItem,
              classes[`statsItem_${statsItem.listItemStyle}`]
            )}
          >
            <span className={classes.name}>{statsItem.name}: </span>
            <span className={classes.value}>{statsItem.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
