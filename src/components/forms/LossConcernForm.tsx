import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import {
  Alert,
  Box,
  Grid,
  SpeedDial,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { StyledAccordion } from "../UI/shared/StyledAccordion";
import { StyledButton } from "../UI/shared/StyledButton";
import { StyledRange } from "../UI/shared/StyledRange";
import { MuiBreakpointsContext } from "../contexts/muiBreakpointsContext";
import { StyledProcentBlock } from "../UI/shared/StyledProcentBlock";

function addCommasToNumber(numb: number) {
  return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const LossConcernForm = () => {
  const { medium, large, small } = useContext(MuiBreakpointsContext);
  const [investmentValue, setInvestmentValue] = useState(25000);
  const corespondensValue = Math.round((investmentValue / 100) * 35);

  const onIvestmentValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = Number(e.currentTarget.value);

    if (isNaN(value)) return;

    setInvestmentValue(value);
  };

  return (
    <Grid
      container
      justifyItems="center"
      justifyContent="center"
      spacing={2}
      rowGap={2}
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
          Capital markets are subject to fluctuations. <br />
          What level of loss makes you nervous?
        </Typography>
        <SpeedDial
          sx={{ position: "absolute", right: medium ? "-100px" : 0 }}
          ariaLabel="SpeedDial basic example"
          icon={<LiveHelpIcon fontSize="medium" />}
        ></SpeedDial>
      </Grid>
      <Grid container item xs={12} sm={10} md={10} lg={8} spacing={2} mt="4px">
        <StyledRange
          defaultValue={15}
          startRange={5}
          endRange={50}
          leftRngName="less than 5%"
          rightRngName="more than 50%"
          titleEndStr="%"
        />
      </Grid>
      <Grid item lg={8}>
        <Box display="flex" justifyContent="space-between" height="220px" sx={{mt: "-20px"}}>
          <StyledProcentBlock
            heightPercentage={75}
            title={"Government  bonds Europe (2010):\n 4.7%"}
          />
          <StyledProcentBlock
            heightPercentage={50}
            title="U.S. government bonds (2009): 16.1%"
          />
          <StyledProcentBlock
            heightPercentage={75}
            title="Shares USA (2002): 36.5"
          />
          <StyledProcentBlock
            heightPercentage={40}
            title="Equities Europe (2008): 42.4%"
          />
          <StyledProcentBlock heightPercentage={50} title="DAX (2002): 47,1%" />
        </Box>
      </Grid>
      <Grid container item xs={12} sm={10} md={10} lg={8} spacing={2} sx={{mt: "-60px"}}>
        <Typography sx={{ fontSize: "1em" }}>
          {" "}
          Example: With an investment of and a negative performance of
          <TextField
            sx={{ width: "60px", m: "0 8px", mt: "-5px" }}
            id="standard-basic"
            variant="standard"
            value={investmentValue}
            onChange={onIvestmentValueChange}
          />
          35% corresponds to €{addCommasToNumber(corespondensValue)}.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <Alert severity="info">
          The higher your loss tolerance, the higher your expected return.
          Please note that no specific return is guaranteed and the amount of
          possible losses is uncertain.
          <br />
          Notes on the calculation: For comparison purposes, the maximum annual
          losses in value of the various asset classes are given. The maximum
          annual loss in value corresponds to the worst return over a full
          calendar year in the period 2000 to 2016. Source: Bloomberg, own
          calculations.
        </Alert>
      </Grid>
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <StyledAccordion
          title="Why do we need this information?"
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
