import React from "react";
import { styled } from "@mui/material";

type Variant = "primary" | "outline";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  href?: string;
}

const BaseButton = styled("button")<{ ownerState: { variant: Variant } }>(
  ({ theme, ownerState }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 22px",
    fontFamily: theme.typography.fontFamily,
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
    ...(ownerState.variant === "primary" && {
      background: "#f5f5f0",
      color: "#090909",
      border: "1px solid #f5f5f0",
      "&:hover": {
        background: "transparent",
        color: "#f5f5f0",
      },
    }),
    ...(ownerState.variant === "outline" && {
      background: "transparent",
      color: "rgba(255,255,255,0.7)",
      border: "1px solid rgba(255,255,255,0.2)",
      "&:hover": {
        borderColor: "rgba(255,255,255,0.6)",
        color: "#f5f5f0",
      },
    }),
  })
);

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  variant = "outline",
}) => (
  <BaseButton ownerState={{ variant }} onClick={onClick}>
    {children}
  </BaseButton>
);

export default StyledButton;