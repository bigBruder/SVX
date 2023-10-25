import { Alert } from "@mui/material";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { RangeForm } from "../FormTemplates/RangeForm";

export const NotDisposableWealth = () => {
  return (
    <RangeForm
      title="What is your non-disposable wealth?"
      rangeSetting={{
        defaultValue: 100000,
        startRange: 10000,
        endRange: 500000,
        leftRngName: "less than 10.000 EUR",
        rightRngName: "more than 500.000 EUR",
        titleEndStr: "EUR",
      }}
      Alert={
        <Alert severity="info">
          Real estate (including owner-occupied property) and other assets that
          are not directly disposable. disposable assets.
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
