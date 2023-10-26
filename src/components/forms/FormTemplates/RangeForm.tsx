import { Grid, Typography } from "@mui/material";
import React, { FC, useContext } from "react";
import { StyledButton } from "../../UI/shared/StyledButton";
import { RangeProps, StyledRange } from "../../UI/shared/StyledRange";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";
import { QuestionMarkLayout } from "../../layout/QuestionMarkLayout";
import { FormShowContext } from "../../contexts/formShow";

interface Props {
  title: string;
  Alert?: React.ReactNode;
  Accordion?: React.ReactNode;
  rangeSetting?: Partial<RangeProps>;
}

export const RangeForm: FC<Props> = ({
  title,
  Alert,
  Accordion,
  rangeSetting,
}) => {
  const { medium } = useContext(MuiBreakpointsContext);
  const { increaseCurrentFormIndex } = useContext(FormShowContext);

  return (
    <QuestionMarkLayout>
      <Grid
        item
        container
        justifyItems="center"
        justifyContent="center"
        spacing={2}
        rowGap={1}
        md={11}
        order={medium ? 0 : 1}
      >
        <Grid item lg={12}>
          <Typography sx={{ fontSize: "25px", textAlign: "center" }}>
            {title}
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={10} md={10} lg={8} spacing={2}>
          <StyledRange {...rangeSetting} />
        </Grid>
        {Alert && (
          <Grid item xs={12} sm={10} md={10} lg={8}>
            {Alert}
          </Grid>
        )}
        {Accordion && (
          <Grid item xs={12} sm={10} md={10} lg={8}>
            {Accordion}
          </Grid>
        )}

        <Grid item xs={12} sm={10} md={10} lg={8}>
          <StyledButton onClick={() => increaseCurrentFormIndex()}>
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </QuestionMarkLayout>
  );
};
