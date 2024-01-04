import { Button } from "@mui/material";
import React from "react";

export type BaseButtonProps = React.PropsWithChildren & {
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
  [x: string]: unknown;
};

const BaseButton = (props: BaseButtonProps) => {
  const className = `BaseButton ${props.className || ""}`;
  return (
    <Button color="purple" variant="contained" {...props} className={className}>
      {props.children}
    </Button>
  );
};

export default BaseButton;
