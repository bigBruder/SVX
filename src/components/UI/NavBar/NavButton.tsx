import { Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";

export const NavButton: FC<{
  IconComponent: React.ElementType;
  text: string;
  isIcontFirst?: boolean;
}> = ({ IconComponent, text, isIcontFirst = true }) => {
  const { small } = useContext(MuiBreakpointsContext);

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {isIcontFirst ? (
        <>
          <IconComponent fontSize="small" />
          {small && (
            <Typography
              sx={{
                color: "black",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {text}
            </Typography>
          )}
        </>
      ) : (
        <>
          {small && (
            <Typography
              sx={{
                color: "black",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {text}
            </Typography>
          )}
          <IconComponent fontSize="small" />
        </>
      )}
    </Stack>
  );
};
