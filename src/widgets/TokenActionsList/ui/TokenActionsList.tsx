import { Button } from "@/shared/ui/Button";
import classes from "./TokenActionsList.module.scss";

export const TokenActionsList = () => {
  return (
    <div>
      <aside className={classes.aside}>
        {/* todo: create features-components @feature/ClaimTokens and so on */}
        <ul className={classes.buttonList}>
          <li>
            <Button variant="rounded" color="orange" className={classes.btn}>
              CLAIM TOKENS
            </Button>
          </li>
          <li>
            <Button
              variant="rounded"
              color="light-gray"
              className={classes.btn}
            >
              SELECT ALL
            </Button>
          </li>
          <li>
            <Button
              variant="rounded"
              color="light-gray"
              className={classes.btn}
            >
              UNSELECT ALL
            </Button>
          </li>
          <li>
            <Button
              variant="rounded"
              color="light-gray"
              className={classes.btn}
            >
              STAKE
            </Button>
          </li>
          <li>
            <Button
              variant="rounded"
              color="light-gray"
              className={classes.btn}
            >
              UNSTAKE
            </Button>
          </li>
          <li>
            <Button
              variant="rounded"
              color="light-gray"
              className={classes.btn}
            >
              VIEW ALL
            </Button>
          </li>
          <li>
            <Button variant="rounded" color="gray" className={classes.btn}>
              ATTACK
            </Button>
          </li>
          <li>
            <Button variant="rounded" color="gray" className={classes.btn}>
              BUY SHIELD
            </Button>
          </li>
        </ul>

        {/* <EarningStats /> */}
      </aside>
    </div>
  );
};
