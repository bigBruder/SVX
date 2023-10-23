import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { FC } from "react";

export const GoalInputFormCard: FC<{
  Icon: React.ElementType;
  title: string;
  description: string;
}> = ({ Icon, title, description }) => {
  return (
    <Grid item container alignItems="center">
      <Grid
        item
        lg={2}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Icon fontSize="large" />
        </Box>
      </Grid>


      <Grid item lg={10}>
        <Card  sx={{"&:hover": {transform: "scale(1.07)", transition: "0.5"}}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
