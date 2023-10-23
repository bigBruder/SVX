import { Box, Container } from "@mui/material";
import { NavBar } from "../components/UI/NavBar/NavBar";
import { Footer } from "../components/UI/Footer";
import { GoalInputForm } from "../components/form/GoalInputForm"

export const FormPage = () => {
  return (
    <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", height: 1}}>
      <Box sx={{flexGrow: 1}}>
        <NavBar stepCount={30} currentStep={5} />
        <GoalInputForm />
      </Box>
      <Footer />
    </Container>
  );
};
