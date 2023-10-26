import { Box, Container } from "@mui/material";
import { useContext } from "react";
import { Footer } from "../components/UI/Footer/Footer";
import { NavBar } from "../components/UI/NavBar/NavBar";
import { FormShowContext } from "../components/contexts/formShow";
import { ExpenseCoverTime } from "../components/forms/ExpenseConverTime";
import { FamiliarService } from "../components/forms/FamiliarServiceForm/FamiliarService";
import { GoalInputForm } from "../components/forms/GoalInputForm";
import { InvestExperienceForm } from "../components/forms/InvestExperienceForm/InvestExperienceForm";
import { InvestmentKnowladgeForm } from "../components/forms/InvestmentKnowladgeForm";
import { LossConcernForm } from "../components/forms/LossConcernForm";
import { RevlantExperience } from "../components/forms/RevlantExperience";
import { DisposableIncome } from "../components/forms/range/DisposableIncome";
import { InvestmentRangeForm } from "../components/forms/range/InvestmentRangeForm";
import { NetMouthIncome } from "../components/forms/range/NetMouhtIncome";
import { NotDisposableWealth } from "../components/forms/range/NonDisposableWealth";
import { TotalMonthExpens } from "../components/forms/range/TotalMonthExpens";
import { Liabilities } from "../components/forms/range/Liabilities";

const formsElements = [
  GoalInputForm,
  InvestmentRangeForm,
  LossConcernForm,
  InvestmentKnowladgeForm,
  InvestExperienceForm,
  FamiliarService,
  RevlantExperience,
  NetMouthIncome,
  TotalMonthExpens,
  DisposableIncome,
  NotDisposableWealth,
  Liabilities,
  ExpenseCoverTime
];

export const FormPage = () => {
  const { currentFormIndex } = useContext(FormShowContext);
  const ShowComponent = formsElements[currentFormIndex];
  console.log(formsElements.length);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Container sx={{ flexGrow: 1 }} maxWidth="md">
        <NavBar
          stepCount={1}
          currentStep={currentFormIndex}
          componentsLength={formsElements.length}
        />
        {ShowComponent && <ShowComponent />}
      </Container>
      <Container maxWidth="md">
        <Footer />
      </Container>
    </Box>
  );
};
