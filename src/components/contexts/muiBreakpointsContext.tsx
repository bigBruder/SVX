import { useMediaQuery } from "@mui/material";
import React, { FC, createContext } from "react";
import { theme } from "../UI/muiSettings";

interface ContextData {
  large: boolean;
  medium: boolean;
  small: boolean;
  extraSmall: boolean;
}

export const MuiBreakpointsContext = createContext<ContextData>(
  null as unknown as ContextData,
);

export const MuiBreakpointsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const medium = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));
  const extraSmall = useMediaQuery(theme.breakpoints.up("xs"));

  return (
    <MuiBreakpointsContext.Provider
      value={{ large, medium, small, extraSmall }}
    >
      {children}
    </MuiBreakpointsContext.Provider>
  );
};
