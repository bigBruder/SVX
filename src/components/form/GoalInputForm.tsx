import { Grid, Typography } from "@mui/material";
import { GoalInputFormCard } from "./GoalInputFormCard";
import RocketIcon from "@mui/icons-material/Rocket";
import GrassIcon from "@mui/icons-material/Grass";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportIcon from "@mui/icons-material/Support";

export const GoalInputForm = () => {
  return (
    <Grid container justifyItems="center">
      <Grid item sx={{ height: "68px" }} lg={12}>
        <Typography sx={{fontSize: "25px"}}>
          What goal are you aiming to achieve with your investment?
        </Typography>
      </Grid>
      <Grid container item lg={8} spacing={2}>
        <GoalInputFormCard
          Icon={RocketIcon}
          title="Significantly increase assets"
          description="I have high expectations for returns and am prepared to accept price
I am prepared to accept price fluctuations of more than 20% per year."
        />
        <GoalInputFormCard
          Icon={GrassIcon}
          title="Vermögen aufbauen"
          description="I expect returns above the normal interest rate level and am willing to accept
I am prepared to accept price fluctuations of between 10% and 20% per year."
        />
        <GoalInputFormCard
          Icon={SavingsIcon}
          title="Maintain assets"
          description="I want to maintain my assets and protect them against inflation. To do this
I am prepared to accept price fluctuations in the single-digit percentage range. 
accept."
        />
        <GoalInputFormCard
          Icon={SupportIcon}
          title="Short term investment"
          description="I would like to achieve secure interest income and do not accept any losses in value, even in the
not in the short and medium term."
        />
      </Grid>
    </Grid>
  );
};
