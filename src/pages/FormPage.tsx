import { Box, Container } from "@mui/material";
import { NavBar } from "../components/UI/NavBar/NavBar";
import { Footer } from "../components/UI/Footer/Footer";
import { GoalInputForm } from "../components/forms/GoalInputForm";
import { InvestmentRangeForm } from "../components/forms/InvestmentRangeForm";

export const FormPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Container sx={{ flexGrow: 1 }} maxWidth="md">
        <NavBar stepCount={30} currentStep={5} />
        <GoalInputForm />
        <InvestmentRangeForm />
      </Container>
      <Container maxWidth="md">
        <Footer />
      </Container>
    </Box>
  );
};
