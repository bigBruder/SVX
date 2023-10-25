import GrassIcon from "@mui/icons-material/Grass";
import RocketIcon from "@mui/icons-material/Rocket";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportIcon from "@mui/icons-material/Support";
import { Alert } from "@mui/material";
import { StyledAccordion } from "../UI/shared/StyledAccordion";
import { ChooseForm } from "./FormTemplates/ChooseForm";

const cardsArr = [
  {
    Icon: RocketIcon,
    title: "Significantly increase assets",
  },
  {
    Icon: GrassIcon,
    title: "Build up assets",
  },
  {
    Icon: SavingsIcon,
    title: "Maintain assets",
  },
  {
    Icon: SupportIcon,
    title: "Short term investment",
  },
];

export const InvestmentKnowladgeForm = () => {
  return (
    <ChooseForm
      isCardsShouldDevide={true}
      cardsArr={cardsArr}
      title="In which investments do you have knowledge?"
      subtitle="Multiple selection possible"
      isMultiple={true}
      Alert={
        <Alert severity="info">
          Note: Knowledge means that you have a basic understanding of the risks
          of the respective asset class. Your own investment experience is
          helpful, but not absolutely necessary. necessary.
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
