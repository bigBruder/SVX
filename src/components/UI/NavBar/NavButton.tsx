import { Stack, Typography } from "@mui/material";
import { FC } from "react";

export const NavButton: FC<{
  IconComponent: React.ElementType;
  text: string;
}> = ({ IconComponent, text }) => {
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
      <IconComponent fontSize="small" />
      <Typography
        sx={{
          color: "black",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};
