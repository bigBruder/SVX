import { Alert, Grid, SpeedDial, Typography } from "@mui/material";
import { GoalInputFormCard } from "../GoalInputFormCard";
import RocketIcon from "@mui/icons-material/Rocket";
import GrassIcon from "@mui/icons-material/Grass";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportIcon from "@mui/icons-material/Support";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { StyledButton } from "../../UI/shared/StyledButton";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { useContext } from "react";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";
import { InvestmentKnowladgeFormCard } from "../InvestmentKnowladgeFormCard";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { InvestExperienceItem } from "./InvestExperienceItem";

import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

const data = [
  {
    Icon: LocalAtmIcon,
    title: "Call money",
  },
  {
    Icon: CorporateFareIcon,
    title: "Corporate Bonds",
  },
];

export const InvestExperienceForm = () => {
  const { medium, large, small } = useContext(MuiBreakpointsContext);

  return (
    <Grid container justifyItems="center" justifyContent="center" spacing={2}>
      <Grid
        item
        sx={{
          height: large || medium ? "70px" : small ? "150px" : "200px",
          position: "relative",
        }}
        xs={12}
        sm={10}
        md={10}
        lg={8}
      >
        <Typography sx={{ fontSize: "25px" }}>
          What is your experience with these investments?
        </Typography>
        <Typography sx={{ fontSize: "15px", mt: 1 }}>
          Business in the last 5 years
        </Typography>
        <SpeedDial
          sx={{ position: "absolute", right: medium ? "-100px" : 0 }}
          ariaLabel="SpeedDial basic example"
          icon={<LiveHelpIcon fontSize="medium" />}
        ></SpeedDial>
      </Grid>

      {data.map((i) => (
        <Grid item xs={12} sm={10} md={10} lg={8} spacing={2}>
          {" "}
          <InvestExperienceItem {...i} />{" "}
        </Grid>
      ))}
      <Grid item xs={12} sm={10} md={10} lg={8} mt={3}>
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
