import { Alert } from "@mui/material";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { RangeForm } from "../FormTemplates/RangeForm";

export const InvestmentRangeForm = () => {
  return (
    <RangeForm
      title="What is your investment horizon?"
      rangeSetting={{
        defaultValue: 13,
        startRange: 1,
        endRange: 25,
        leftRngName: "less than 1 year",
        rightRngName: "more than 25 years",
        titleEndStr: "Years",
      }}
      Alert={
        <Alert severity="info">
          Investment horizon: The time period for which you are generally
          willing to invest your money or do not need it.
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
