import { StyledAccordion } from "../UI/shared/StyledAccordion";
import { ChooseForm } from "./ChooseForm/ChooseForm";

const cardsArr = [
  {
    title: "Specify own criteria",
    subtitle:
      "Indicate sustainability preferences according to EU Regulation 2021/1253.",
  },
  {
    title: "Continue without own criteria",
    subtitle:
      "All suitable investment strategies are available for selection, including ESG strategies that take into account environmental, social and ethical criteria.",
  },
];



export const OwnCriteria = () => {
  return (
    <ChooseForm
      isMultiple={false}
      Accordion={<StyledAccordion title="Why are we asking about your sustainability preferences?" />}
      cardsArr={cardsArr}
      title="Do you want to specify your own criteria for sustainable
      investing?"
    />
  );
};
