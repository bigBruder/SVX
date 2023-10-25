import { Box, Container } from "@mui/material";
import { NavBar } from "../components/UI/NavBar/NavBar";
import { Footer } from "../components/UI/Footer/Footer";
import { FamiliarService } from "../components/forms/FamiliarServiceForm/FamiliarService";
import { RevlantExperience } from "../components/forms/RevlantExperience";
import { ExpenseCoverTime } from "../components/forms/ExpenseConverTime";
import { OwnCriteria } from "../components/forms/OwnCriteria";

export const FormPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Container sx={{ flexGrow: 1 }} maxWidth="md">
        <NavBar stepCount={30} currentStep={5} />
        {/* <GoalInputForm /> */}
        {/* <InvestmentRangeForm />  */}
        {/*  
       <InvestmentKnowladgeForm /> */}

        {/* <LossConcernForm /> */}
        {/* <InvestExperienceForm /> */}
        {/* <FamiliarService /> */}
        {/* <RevlantExperience /> */}
        {/* <ExpenseCoverTime/> */}
        <OwnCriteria />
      </Container>
      <Container maxWidth="md">
        <Footer />
      </Container>
    </Box>
  );
};
