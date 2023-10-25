import { Alert } from "@mui/material";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { RangeForm } from "../FormTemplates/RangeForm";

export const NetMouthIncome = () => {
  return (
    <RangeForm
      title="What is your net monthly income?"
      rangeSetting={{
        defaultValue: 5000,
        startRange: 0,
        endRange: 10000,
        leftRngName: "no regular income",
        rightRngName: "more than EUR 10,000",
        titleEndStr: "EUR",
      }}
      Alert={
        <Alert severity="info">
          This includes permanent income such as salaries, pensions, stable
          income from capital contributions and rental income.
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
