import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { Grid, SpeedDial } from "@mui/material";
import { FC } from "react";

export const QuestionMarkLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Grid container rowGap={2}>
      {children}
      <Grid container item md={1} alignContent="start" justifyContent="end">
        <Grid item>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<LiveHelpIcon fontSize="medium" />}
          ></SpeedDial>
        </Grid>
      </Grid>
    </Grid>
  );
};
