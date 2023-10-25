import { Box, Container, useScrollTrigger } from "@mui/material";
import { NavBar } from "../components/UI/NavBar/NavBar";
import { Footer } from "../components/UI/Footer/Footer";
import { FamiliarService } from "../components/forms/FamiliarServiceForm/FamiliarService";
import { RevlantExperience } from "../components/forms/RevlantExperience";
import { ExpenseCoverTime } from "../components/forms/ExpenseConverTime";
import { InvestmentKnowladgeForm } from "../components/forms/InvestmentKnowladgeForm";
import { InvestmentRangeForm } from "../components/forms/range/InvestmentRangeForm";
import { NetMouthIncome } from "../components/forms/range/NetMouhtIncome";
import { DisposableIncome } from "../components/forms/range/DisposableIncome";
import { NotDisposableWealth } from "../components/forms/range/NonDisposableWealth";
import { GoalInputForm } from "../components/forms/GoalInputForm";
import { LossConcernForm } from "../components/forms/LossConcernForm";
import { InvestExperienceForm } from "../components/forms/InvestExperienceForm/InvestExperienceForm";
import { useContext, useState } from "react";
import { FormShowContext } from "../components/contexts/formShow";

const formsElements = [
  GoalInputForm,
  InvestmentRangeForm,
  InvestmentKnowladgeForm,
  LossConcernForm,
  InvestExperienceForm,
  FamiliarService,
  RevlantExperience,
  ExpenseCoverTime,
  NetMouthIncome,
  DisposableIncome,
  NotDisposableWealth
];

export const FormPage = () => {
  const {currentFormIndex} = useContext(FormShowContext)
  const ShowComponent = formsElements[currentFormIndex]

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Container sx={{ flexGrow: 1 }} maxWidth="md">
        <NavBar stepCount={formsElements.length} currentStep={currentFormIndex} />
          <ShowComponent />
      </Container>
      <Container maxWidth="md">
        <Footer />
      </Container>
    </Box>
  );
};
