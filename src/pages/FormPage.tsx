import { Box, Container } from "@mui/material";
import { NavBar } from "../components/UI/NavBar/NavBar";
import { Footer } from "../components/UI/Footer/Footer";
import { FamiliarService } from "../components/forms/FamiliarServiceForm/FamiliarService";
import { RevlantExperience } from "../components/forms/RevlantExperience";
import { ExpenseCoverTime } from "../components/forms/ExpenseConverTime";
import { InvestmentKnowladgeForm } from "../components/forms/InvestmentKnowladgeForm";
import { InvestmentRangeForm } from "../components/forms/range/InvestmentRangeForm";
import { NetMouthIncome } from "../components/forms/range/NetMouhtIncome";

export const FormPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Container sx={{ flexGrow: 1 }} maxWidth="md">
        <NavBar stepCount={30} currentStep={5} />
        {/* <GoalInputForm /> */}
        {/* <InvestmentRangeForm /> */}

        {/* <InvestmentKnowladgeForm />  */}

        {/* <LossConcernForm /> */}
        {/* <InvestExperienceForm /> */}
        {/* <FamiliarService /> */}
        {/* <RevlantExperience /> */}
        {/* <ExpenseCoverTime/> */}
        {<NetMouthIncome />}
      </Container>
      <Container maxWidth="md">
        <Footer />
      </Container>
    </Box>
  );
};
