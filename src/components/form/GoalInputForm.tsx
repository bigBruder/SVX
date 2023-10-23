import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Grid,
  SpeedDial,
  Stack,
  Typography,
} from "@mui/material";
import { GoalInputFormCard } from "./GoalInputFormCard";
import RocketIcon from "@mui/icons-material/Rocket";
import GrassIcon from "@mui/icons-material/Grass";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportIcon from "@mui/icons-material/Support";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { StyledButton } from "../UI/shared/StyledButton";
import { StyledAccordion } from "../UI/shared/StyledAccordion";

const data = [
  {
    Icon: RocketIcon,
    title: "Significantly increase assets",
    description:
      "I have high expectations for returns and am prepared to accept price I am prepared to accept price fluctuations of more than 20% per year.",
  },
  {
    Icon: GrassIcon,
    title: "Build up assets",
    description:
      "I expect returns above the normal interest rate level and am willing to acceptI am prepared to accept price fluctuations of between 10% and 20% per year.",
  },
  {
    Icon: SavingsIcon,
    title: "Maintain assets",
    description:
      "I want to maintain my assets and protect them against inflation. To do this I am prepared to accept price fluctuations in the single-digit percentage range. accept.",
  },
  {
    Icon: SupportIcon,
    title: "Short term investment",
    description:
      "I would like to achieve secure interest income and do not accept any losses in value, even in the not in the short and medium term.",
  },
];

export const GoalInputForm = () => {
  return (
    <Grid container justifyItems="center" justifyContent="center" spacing={2}>
      <Grid item sx={{ height: "68px", position: "relative" }} lg={12}>
        <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
          What goal are you aiming to achieve with your investment?
        </Typography>
        <SpeedDial
          sx={{ position: "absolute", right: 0 }}
          ariaLabel="SpeedDial basic example"
          icon={<LiveHelpIcon fontSize="medium" />}
        ></SpeedDial>
      </Grid>
      <Grid container item lg={8} spacing={2}>
        {data.map((i: any) => (
          <GoalInputFormCard {...i} />
        ))}
      </Grid>
      <Grid item lg={8}>
        <StyledAccordion
          title="Why do we need information about your financial situation?"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
        />
      </Grid>
      <Grid item lg={8}>
        <StyledButton>Next</StyledButton>
      </Grid>
    </Grid>
  );
};
