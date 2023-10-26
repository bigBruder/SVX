import { Grid } from "@mui/material";
import { FC } from "react";
import { SpeedDialTooltipOpen } from "../UI/shared/StyledSpeedDial";

export const QuestionMarkLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Grid container rowGap={2}>
      {children}
      <Grid container item md={1} alignContent="start" justifyContent="end">
        <Grid item>
          <SpeedDialTooltipOpen />
        </Grid>
      </Grid>
    </Grid>
  );
};
