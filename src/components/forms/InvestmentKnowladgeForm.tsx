import { Alert, Grid, SpeedDial, Typography } from "@mui/material";
import { GoalInputFormCard } from "./GoalInputFormCard";
import RocketIcon from "@mui/icons-material/Rocket";
import GrassIcon from "@mui/icons-material/Grass";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportIcon from "@mui/icons-material/Support";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { StyledButton } from "../UI/shared/StyledButton";
import { StyledAccordion } from "../UI/shared/StyledAccordion";
import { useContext } from "react";
import { MuiBreakpointsContext } from "../contexts/muiBreakpointsContext";
import { InvestmentKnowladgeFormCard } from "./InvestmentKnowladgeFormCard";
import NotInterestedIcon from '@mui/icons-material/NotInterested';

const data = [
  {
    Icon: RocketIcon,
    title: "Significantly increase assets",
  },
  {
    Icon: GrassIcon,
    title: "Build up assets",
  },
  {
    Icon: SavingsIcon,
    title: "Maintain assets",
  },
  {
    Icon: SupportIcon,
    title: "Short term investment",
  },
];

export const InvestmentKnowladgeForm = () => {
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
          In which investments do you have knowledge?
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          Multiple selection possible
        </Typography>
        <SpeedDial
          sx={{ position: "absolute", right: medium ? "-100px" : 0 }}
          ariaLabel="SpeedDial basic example"
          icon={<LiveHelpIcon fontSize="medium" />}
        ></SpeedDial>
      </Grid>
      <Grid container item xs={12} sm={10} md={10} lg={8} spacing={2}>
        {data.map((i: any) => (
          <Grid item md={6}>
            {" "}
            <InvestmentKnowladgeFormCard {...i} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={10} lg={8}>
            <InvestmentKnowladgeFormCard title="Keine" Icon={NotInterestedIcon}/>
          </Grid>
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <Alert severity="info">
        Note: Knowledge means that you have a basic understanding of the risks of the
respective asset class. Your own investment experience is helpful, but not absolutely necessary.
necessary.
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
