import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

import classes from "./Button.module.scss";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "rounded" | "empty";
  color: "light-gray" | "gray" | "orange" | "blue";
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { variant, className, children, color, ...restProps } = props;
  return (
    <button
      className={clsx(classes.btn, classes[variant], classes[color], className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
