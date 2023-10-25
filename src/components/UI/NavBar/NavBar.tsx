import { Grid, Slider } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavButton } from "./NavButton";
import { FC, useContext } from "react";
import { FormShowContext } from "../../contexts/formShow";

interface Props {
  stepCount: number;
  currentStep: number;
}

export const NavBar: FC<Props> = ({ stepCount = 30, currentStep = 2 }) => {
  const { currentFormIndex, setCurrentFormIndex } = useContext(FormShowContext);

  return (
    <Grid
      container
      sx={{ height: "90px" }}
      columns={16}
      justifyContent="space-between"
      alignContent="center"
      spacing={1}
    >
      <Grid item xs={3} sm={3} lg={3}>
        <NavButton
          IconComponent={ArrowBackIosIcon}
          text="RESUME LATER"
          onClick={() => setCurrentFormIndex(currentFormIndex - 1)}
        />
      </Grid>
      <Grid item xs={9} sm={9} lg={9}>
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
      <Grid item container xs={3} sm={3} lg={3} justifyContent="center">
        <NavButton IconComponent={ClearIcon} text="BACK" isIcontFirst={false} />
      </Grid>
    </Grid>
  );
};
