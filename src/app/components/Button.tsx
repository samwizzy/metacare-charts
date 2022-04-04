import React from "react";
import { default as MuiButton } from "@mui/material/Button";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "inherit";
};

function Button(props: ButtonProps) {
  const {
    children,
    variant = "contained",
    color = "primary",
    size = "medium",
  } = props;

  return (
    <MuiButton size={size} variant={variant} color={color}>
      {children}
    </MuiButton>
  );
}

export default Button;
