import { Link } from "@mui/material";
import { FC } from "react";

export const FooterLnk: FC<{children: string}> = ({children}) => {
    return (
        <Link href="#"  sx={{ fontSize: "12px", color: "inherit", textDecoration: "none" }}>{children}</Link>
    )
}