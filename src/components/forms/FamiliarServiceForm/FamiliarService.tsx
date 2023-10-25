import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { ChooseForm } from "../ChooseForm/ChooseForm";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const cardsArr = [
  {
    Icon: PersonOutlineIcon,
    title: "Investment advice",
    description: "Personal advice from a bank or investment advisor.",
  },
  {
    Icon: WorkOutlineIcon,
    title: "Vermögensverwaltung",
    description: "An asset manager makes investment decisions for you.",
  },
  {
    Icon: ShowChartIcon,
    title: "Online-Broker",
    description: "They act independently and without prior consultation.",
  },
];

const Accordion = () => {
  return (
    <StyledAccordion
      title="Why do we need information about your financial situation?"
      description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
  );
};

export const FamiliarService = () => {
  return (
    <ChooseForm
      Accordion={<Accordion />}
      cardsArr={cardsArr}
      subtitle="Which financial services are you familiar with?"
      title="Multiple selection possible"
    />
  );
};
