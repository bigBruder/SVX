import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { Grid, SpeedDial, Typography } from "@mui/material";
import { useContext } from "react";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { StyledButton } from "../../UI/shared/StyledButton";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";
import { InvestExperienceItem } from "./InvestExperienceItem";

import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { FormShowContext } from "../../contexts/formShow";

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
  const { increaseCurrentFormIndex } = useContext(FormShowContext);

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
        <StyledButton onClick={() => increaseCurrentFormIndex()}>
          Next
        </StyledButton>
      </Grid>
    </Grid>
  );
};
