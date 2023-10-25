import NotInterestedIcon from "@mui/icons-material/NotInterested";
import {
  Card,
  Grid,
  Typography
} from "@mui/material";
import { FC } from "react";

export const NoneButton: FC<
  {
    title?: string;
    Icon?: any;
    cardSx?: any;
  } & any
> = ({ title = "None", Icon = NotInterestedIcon, cardSx, ...props }) => {
  return (
    <Card
      sx={{
        height: "75px",
        display: "flex",
        alignItems: "center",
        "&:hover": { cursor: "pointer", backgroundColor: "#71b6f7" },
        borderRadius: "10px",
      }}
      {...props}
    >
      <Grid container item sx={{ ...cardSx }}>
        <Grid item xs={2}>
          <Icon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
