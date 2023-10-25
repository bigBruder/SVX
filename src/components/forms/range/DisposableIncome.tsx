import { Alert } from "@mui/material";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { RangeForm } from "../FormTemplates/RangeForm";

export const DisposableIncome = () => {
  return (
    <RangeForm
      title="What is your available disposable income?"
      rangeSetting={{
        defaultValue: 6000,
        step: 1,
        startRange: 1000,
        endRange: 50000,
        leftRngName: "less than 1.000 EUR",
        rightRngName: "more than 5.000.000 EUR",
        titleEndStr: "EUR",
      }}
      Alert={
        <Alert severity="info">
          Cash and discretionary investments (excluding real estate)
        </Alert>
      }
      Accordion={
        <StyledAccordion
          title="Why do we need information about your financial situation?"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
        />
      }
    />
  );
};
