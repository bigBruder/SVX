import { Alert, Box, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { StyledButton } from "../../UI/shared/StyledButton";
import { StyledProcentBlock } from "../../UI/shared/StyledProcentBlock";
import { StyledRange } from "../../UI/shared/StyledRange";
import { FormShowContext } from "../../contexts/formShow";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";
import { QuestionMarkLayout } from "../../layout/QuestionMarkLayout";

export const TotalMonthExpens = () => {
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
        mt={2}
      >
        <Grid container item xs={12} sm={10} md={10} lg={8} spacing={2} justifyContent="center" >
          <Typography sx={{ fontSize: "25px" }}>
            What are your total monthly expenses?
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={10}
          lg={8}
          spacing={2}
          mt="4px"
        >
          <StyledRange
            defaultValue={1000}
            startRange={1000}
            endRange={10000}
            leftRngName="less than 1.000 EUR"
            rightRngName="more than 1.000 EUR"
            titleEndStr="EUR"
          />
        </Grid>
        <Grid item xs={12} sm={10} lg={8}>
          <Box
            display="flex"
            justifyContent="space-between"
            height="170px"
          >
            <StyledProcentBlock
              ml="75%"
              heightPercentage={75}
              title={"Your declared income 5.000 €"}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Alert severity="info">
            Please consider both necessary (e.g., food, rent, loan installments,
            insurance) as well as non-essential (e.g., consumer goods, luxury
            expenses) Expenses.
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
          <StyledButton
            onClick={() => {
              increaseCurrentFormIndex();
            }}
          >
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </QuestionMarkLayout>
  );
};
