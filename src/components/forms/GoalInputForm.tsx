import GrassIcon from "@mui/icons-material/Grass";
import RocketIcon from "@mui/icons-material/Rocket";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportIcon from "@mui/icons-material/Support";
import { StyledAccordion } from "../UI/shared/StyledAccordion";
import { ChooseForm } from "./FormTemplates/ChooseForm";

const cardsArr = [
  {
    Icon: RocketIcon,
    title: "Significantly increase assets",
    description:
      "I have high expectations for returns and am prepared to accept price I am prepared to accept price fluctuations of more than 20% per year.",
  },
  {
    Icon: GrassIcon,
    title: "Build up assets",
    description:
      "I expect returns above the normal interest rate level and am willing to acceptI am prepared to accept price fluctuations of between 10% and 20% per year.",
  },
  {
    Icon: SavingsIcon,
    title: "Maintain assets",
    description:
      "I want to maintain my assets and protect them against inflation. To do this I am prepared to accept price fluctuations in the single-digit percentage range. accept.",
  },
  {
    Icon: SupportIcon,
    title: "Short term investment",
    description:
      "I would like to achieve secure interest income and do not accept any losses in value, even in the not in the short and medium term.",
  },
];

export const GoalInputForm = () => {
  return (
    <ChooseForm
      Accordion={
        <StyledAccordion
          title="Why do we need information about your financial situation?"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget."
        />
      }
      cardsArr={cardsArr}
      title="What goal are you aiming to achieve with your investment?"
      isMultiple={false}
    />
  );
};
