import { Button } from "@mui/material";
import { FC } from "react";

export const StyledButton: FC<{ children: string } & any> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="contained"
      fullWidth
      sx={{
        height: "48px",
        borderTopLeftRadius: "15px",
        borderBottomColor: "5px",
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "15px",
        mt: "40px",
      }}
    >
      {children}
    </Button>
  );
};
