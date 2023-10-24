import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { Alert, Grid, SpeedDial, Typography } from "@mui/material";
import { useContext } from "react";
import { StyledAccordion } from "../UI/shared/StyledAccordion";
import { StyledButton } from "../UI/shared/StyledButton";
import { StyledRange } from "../UI/shared/StyledRange";
import { MuiBreakpointsContext } from "../contexts/muiBreakpointsContext";

export const InvestmentRangeForm = () => {
  const { medium, large, small } = useContext(MuiBreakpointsContext);

  return (
    <Grid
      container
      justifyItems="center"
      justifyContent="center"
      spacing={2}
      rowGap={1}
    >
      <Grid
        item
        sx={{
          height: large || medium ? "70px" : small ? "150px" : "200px",
          position: "relative",
        }}
        lg={12}
      >
        <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
          What is your investment horizon?
        </Typography>
        <SpeedDial
          sx={{ position: "absolute", right: medium ? "-100px" : 0 }}
          ariaLabel="SpeedDial basic example"
          icon={<LiveHelpIcon fontSize="medium" />}
        ></SpeedDial>
      </Grid>
      <Grid container item xs={12} sm={10} md={10} lg={8} spacing={2}>
        <StyledRange
          defaultValue={13}
          startRange={1}
          endRange={25}
          leftRngName="less than 1 year"
          rightRngName="more than 25 years"
          titleEndStr="Years"
        />
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <Alert severity="info">
          Investment horizon: The time period for which you are generally
          willing to invest your money or do not need it.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <StyledAccordion
          title="Why do we need information about your financial situation?"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
        />
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <StyledButton>Next</StyledButton>
      </Grid>
    </Grid>
  );
};
