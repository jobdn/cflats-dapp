import { Stats } from "@/shared/ui/Stats";
import earchIcon from "../images/earn-icon.svg";

type EarningStatsProps = {
  className?: string;
};

const earnStats = [
  { name: "Earned per day", value: "550 CFLAT" },
  { name: "Earned per week", value: "3750 CFLAT" },
  { name: "Earned per month", value: "16500 CFLAT" },
];

export const EarningStats = (props: EarningStatsProps) => {
  const { className } = props;

  return (
    <Stats
      statsIcon={earchIcon}
      statsTitle="Earning statistics:"
      stats={earnStats}
      className={className}
    />
  );
};
