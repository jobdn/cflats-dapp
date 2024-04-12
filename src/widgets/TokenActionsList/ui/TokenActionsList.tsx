import { Button } from "@/shared/ui/Button";
import classes from "./TokenActionsList.module.scss";
import clsx from "clsx";
import { ToggleTokensView } from "@/features/ToggleTokensView";

interface TokenActionsListProps {
  className?: string;
}

export const TokenActionsList = (props: TokenActionsListProps) => {
  const { className } = props;
  return (
    <aside className={clsx(classes.aside, className)}>
      {/* todo: create features-components @feature/ClaimTokens and so on */}
      <ul className={classes.buttonList}>
        <li className={classes.btnWrapper}>
          <Button variant="rounded" color="orange" className={classes.btn}>
            CLAIM TOKENS
          </Button>
        </li>
        <li className={classes.btnWrapper}>
          <Button variant="rounded" color="light-gray" className={classes.btn}>
            SELECT ALL
          </Button>
        </li>
        <li className={classes.btnWrapper}>
          <Button variant="rounded" color="light-gray" className={classes.btn}>
            UNSELECT ALL
          </Button>
        </li>
        <li className={classes.btnWrapper}>
          <Button variant="rounded" color="light-gray" className={classes.btn}>
            STAKE
          </Button>
        </li>
        <li className={classes.btnWrapper}>
          <Button variant="rounded" color="light-gray" className={classes.btn}>
            UNSTAKE
          </Button>
        </li>
        <li className={classes.btnWrapper}>
          <ToggleTokensView className={classes.btn} />
        </li>
        <li className={clsx(classes.btnWrapper, classes.attackWrapper)}>
          <Button
            variant="rounded"
            color="gray"
            className={clsx(classes.btn, classes.attackBtn)}
          >
            ATTACK
          </Button>
        </li>
        <li className={classes.btnWrapper}>
          <Button variant="rounded" color="gray" className={clsx(classes.btn)}>
            BUY SHIELD
          </Button>
        </li>
        {/* <li className={clsx(classes.btnWrapper, classes.protectionWrapper)}>
          <Button
            variant="rounded"
            color="blue"
            className={clsx(classes.btn, classes.protectionBtn)}
          >
            BUY PROTECTION
          </Button>
        </li> */}
      </ul>
    </aside>
  );
};
