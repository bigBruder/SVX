import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

export const ChooseCard: FC<{
  Icon?: any;
  title: string;
  description?: string;
  subtitle?: string;
  isSelected?: boolean;
  index: number;
  handleSelect: (index: number) => void;
}> = ({
  Icon,
  title,
  description,
  isSelected = false,
  handleSelect,
  index,
  subtitle
}) => {
  const [isShowDefaultBg, setIsShowDefaultBg] = useState(false);
  const subtitleField = description || subtitle

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
        pl: "20px",
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
      {Icon && (
        <Grid item xs={2}>
          <Icon sx={{ width: "48px", height: "48px" }} />
        </Grid>
      )}
      <Grid item xs={Icon ? 10 : 12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h6">{title}</Typography>
          {subtitleField&& (
            <Typography variant="subtitle1">{subtitleField}</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
