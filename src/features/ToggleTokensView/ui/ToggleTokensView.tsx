"use client";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { Button } from "@/shared/ui/Button";
import { selectView, tokensViewActions } from "../model/tokensViewSlice";

type ToggleTokensViewProps = {
  className?: string;
};

export const ToggleTokensView = (props: ToggleTokensViewProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useAppSelector(selectView);

  const handleToggleView = () => {
    dispatch(tokensViewActions.setTabView(view === "all" ? "swiper" : "all"));
  };

  return (
    <Button
      variant="rounded"
      color="light-gray"
      className={className}
      onClick={handleToggleView}
    >
      VIEW ALL
    </Button>
  );
};
