import { Button } from "@mui/material";
import { FC } from "react";
import { googleAuth } from "../../api/firebase/googleAuth";
import { useNavigate } from "react-router";
import { handleAuthMehtod } from "./helpers/handleAuthMethod";

export const EmailAuthButton: FC<{
  bthMessage: string;
  setAuthStatus: (state: any) => void;
  onAuthResultMessage: string;
}> = ({ bthMessage, setAuthStatus, onAuthResultMessage }) => {
  const navigation = useNavigate()

  const onGoogleAuth = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    await handleAuthMehtod(setAuthStatus, googleAuth, onAuthResultMessage, () => navigation("dashboard"))
  };

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={onGoogleAuth}
    >
      {bthMessage}
    </Button>
  );
};
