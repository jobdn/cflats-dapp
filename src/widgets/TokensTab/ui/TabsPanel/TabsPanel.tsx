import clsx from "clsx";
import classes from "./TabsPanel.module.scss";

interface TabsPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

export const TabsPanel = (props: TabsPanelProps) => {
  const { children, value, index, className, ...otherProps } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`token-tabpanel-${index}`}
      aria-labelledby={`token-tab-${index}`}
      className={clsx(classes.tabPanel, className)}
      {...otherProps}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
