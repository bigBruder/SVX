import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { StyledAccordion } from "../UI/shared/StyledAccordion";
import { ChooseForm } from "./FormTemplates/ChooseForm";

import SchoolIcon from "@mui/icons-material/School";

const cardsArr = [
  {
    Icon: PersonOutlineIcon,
    title: "Relevant profession",
    description: "z.B. bei einer Bank oder Versicherung",
  },
  {
    Icon: SchoolIcon,
    title: "Relevant studies/training",
    description: "z.B. BWL/VWL-Studium, Ausbildung zum Bankkaufmann/-frau",
  },
];

export const RevlantExperience = () => {
  return (
    <ChooseForm
      Accordion={<StyledAccordion />}
      cardsArr={cardsArr}
      title="Have you gained relevant capital market experience through education, study, or profession?"
    />
  );
};
