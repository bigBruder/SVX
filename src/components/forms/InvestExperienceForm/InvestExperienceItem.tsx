import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FC, useContext } from "react";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";

export const InvestExperienceItem: FC<{ Icon: any; title: string }> = ({
  Icon,
  title,
}) => {
  const { extraSmall, small } = useContext(MuiBreakpointsContext);

  return (
    <Grid
      item
      container
      height={extraSmall ? "100px" : "75px"}
      alignItems="center"
      columns={16}
      sx={{ borderBottom: "1px solid" }}
      spacing={1}
    >
      <Grid item xs={2}>
        <Icon size="large" />
      </Grid>
      <Grid item xs={14} sm={5}>
        <Typography> {title} </Typography>
      </Grid>

      <Grid item xs={16} sm={9}>
        <Box display="flex" justifyContent={small ? "flex-end" : "flex-start"}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="One" control={<Radio />} label="One" />
              <FormControlLabel value="-5" control={<Radio />} label="-5" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};
