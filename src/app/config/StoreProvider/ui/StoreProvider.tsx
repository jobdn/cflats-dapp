"use client";

import { Provider } from "react-redux";
import { setupStore } from "../config/setupStore";
import { PropsWithChildren } from "react";

interface StoreProviderProps {
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<PropsWithChildren<StoreProviderProps>> = (
  props
) => {
  const { children, initialState } = props;
  const store = setupStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
