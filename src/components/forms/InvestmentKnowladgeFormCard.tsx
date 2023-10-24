import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FC } from "react";

export const InvestmentKnowladgeFormCard: FC<{
  title: string;
  Icon: any;
}> = ({ title, Icon }) => {
  return (
    <Card sx={{ height: "75px" }}>
      <Grid container>
        <Grid item lg={2}>
          <Icon fontSize="large" />
        </Grid>
        <Grid item lg={10}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
