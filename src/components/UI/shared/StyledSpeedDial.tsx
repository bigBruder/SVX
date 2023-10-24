import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { SpeedDial } from "@mui/material";
import { useContext } from "react";
import {
  MuiBreakpointsContext
} from "../../contexts/muiBreakpointsContext";

export const StyledSpeedDial = () => {
  const { medium } = useContext(MuiBreakpointsContext);

  return (
    <SpeedDial
      sx={{ position: "absolute", right: medium ? "-100px" : 0 }}
      ariaLabel="SpeedDial basic example"
      icon={<LiveHelpIcon fontSize="medium" />}
    ></SpeedDial>
  );
};
