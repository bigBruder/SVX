import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const StyledProcentBlock: FC<{
  title: string;
  heightPercentage: number;
  ml?: string;
}> = ({ title, heightPercentage, ml }) => {
  return (
    <Box
      ml={ml}
      sx={{
        height: heightPercentage + "%",
        borderLeft: "1px dashed",
        display: "flex",
        alignItems: "end",
      }}
    >
      <Typography
        sx={{
          pl: "5px",
          fontFamily: "Nunito Sans",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "13.64px",
        }}
      >
        <Box width="40%" sx={{ lineHeight: "15px" }}>
          {title}
        </Box>
      </Typography>
    </Box>
  );
};
