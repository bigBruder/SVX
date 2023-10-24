import { Link } from "@mui/material";
import { FC } from "react";

export const FooterLnk: FC<{ children: string }> = ({ children }) => {
  return (
    <Link
      href="#"
      sx={{
        fontSize: "14px",
        color: "inherit",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {children}
    </Link>
  );
};
