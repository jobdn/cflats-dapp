"use client";

import { ButtonHTMLAttributes } from "react";
import classes from "./Checkbox.module.scss";
import clsx from "clsx";

export function Checkbox(props: CFCheckboxProps) {
  const { checked, className } = props;

  return (
    <input
      className={clsx(classes.checkbox, className)}
      type="checkbox"
      checked={checked}
    />
  );
}

interface CFCheckboxProps {
  checked?: boolean;
  className: string;
}
