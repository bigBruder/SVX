import { Grid, Slider } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavButton } from "./NavButton";
import { FC } from "react";

interface Props {
  stepCount: number; 
  currentStep: number
}

export const NavBar: FC<Props> = ({
  stepCount = 30,
  currentStep = 2,
}) => {
  return (
    <Grid
      container
      sx={{ height: "90px" }}
      columns={{ lg: 16 }}
      justifyContent="space-between"
      alignContent="center"
    >
      <Grid item lg={3}>
        <NavButton IconComponent={ArrowBackIosIcon} text="RESUME LATER" />
      </Grid>
      <Grid item lg={9}>
        <Slider
          sx={{
            "& .MuiSlider-thumb": {
              display: "none",
            },
            p: 0,
          }}
          value={currentStep}
          defaultValue={stepCount}
          aria-label="Disabled slider"
        />
      </Grid>
      <Grid item container lg={3} justifyContent="center">
        <NavButton IconComponent={ClearIcon} text="BACK" isIcontFirst={false}/>
      </Grid>
    </Grid>
  );
};
