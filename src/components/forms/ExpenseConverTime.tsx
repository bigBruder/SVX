

import { Alert } from '@mui/material';
import { StyledAccordion } from '../UI/shared/StyledAccordion';
import { ChooseForm } from './ChooseForm/ChooseForm';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const cardsArr = [
  {
    Icon: AttachMoneyIcon,
    title: "3 mounts"
  },
  {
    Icon: AttachMoneyIcon,
    title: "6 mounts",
  }, 
  {
    Icon: AttachMoneyIcon,
    title: "More than 6 mounts",
  }
];

const StyledAlert = () => {
    return (
        <Alert severity="info">Ihre Reserven sorgen für Deckung Ihrer laufenden Ausgaben im Falle unvorhergesehener
        Ereignisse  Sie sollten sofort verfügbar und nicht Teil Ihrer Kapitalmarktanlage sein.</Alert>
    )
}


export const ExpenseCoverTime = () => {
  return (
    <ChooseForm
    isMultiple={false}
      Accordion={<StyledAccordion />}
      Alert={<StyledAlert />}
      cardsArr={cardsArr}
      title="How long will your reserves last to cover your ongoing expenses and obligations?"
    />
  );
};
