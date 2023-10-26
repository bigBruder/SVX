import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import React, { useContext } from "react";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";

const actions = [
  { icon: <SupportAgentIcon />, name: "Telephone" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export const SpeedDialTooltipOpen = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { medium } = useContext(MuiBreakpointsContext);

  return (
    <Box
      sx={{
        height: 100,
        transform: "translateZ(0px) translateX(20px)",
        flexGrow: 1,
      }}
    >
      <Backdrop open={open} sx={{ backgroundColor: "inherit" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<LiveHelpIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={medium ? "down" : "left"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={medium ? action.name : null}
            tooltipOpen={medium}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
