import { Stats, StatsItem } from "@/shared/ui/Stats";
import userIcon from "../images/user-icon.svg";

type UserStatsProps = {
  className?: string;
};

const userStats: StatsItem[] = [
  {
    name: "Standard NFT holders",
    value: "2503",
    listItemStyle: "standard",
  },
  { name: "Silver NFT holders", value: "285", listItemStyle: "silver" },
  { name: "Gold NFT holders", value: "98", listItemStyle: "gold" },
  { name: "Diamond NFT holders", value: "43", listItemStyle: "diamond" },
];

export const UserStats = (props: UserStatsProps) => {
  const { className } = props;

  return (
    <Stats
      statsIcon={userIcon}
      statsTitle="User statistics:"
      stats={userStats}
      className={className}
    />
  );
};
