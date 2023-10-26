import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

export const ChooseCard: FC<{
  Icon: any;
  title: string;
  description?: string;
  isSelected?: boolean;
  index: number;
  handleSelect: (index: number) => void;
  isTwoRows?: boolean;
}> = ({
  Icon,
  title,
  description,
  isSelected = false,
  handleSelect,
  index,
  isTwoRows = false
}) => {
  const [isShowDefaultBg, setIsShowDefaultBg] = useState(false);

  return (
    <Grid
      item
      container
      minHeight="100px"
      alignItems="center"
      sx={{
        backgroundColor: isSelected ? "#71b6f7" : "",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: isShowDefaultBg ? "" : "#71b6f7",
        },
        borderRadius: "10px",
        border: "1px solid #ccc",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        p: "20px 0 20px 20px",
      }}
      onClick={() => {
        if (isSelected) {
          setIsShowDefaultBg(true);
        }
        handleSelect(index);
      }}
      onMouseLeave={() => {
        setIsShowDefaultBg(false);
      }}
    >
      <Grid item xs={isTwoRows ? 3 : 2}>
        <Icon sx={{ width: "48px", height: "48px" }} />
      </Grid>
      <Grid item xs={isTwoRows ? 9 : 10}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h6">{title}</Typography>
          {description && (
            <Typography variant="subtitle1">{description}</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
