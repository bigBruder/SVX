import { Box, Grid, Slider, Typography } from "@mui/material";
import { FC, useState } from "react";

export interface RangeProps {
  leftRngName: string;
  rightRngName: string;
  titleEndStr: string;
  defaultValue: number;
  step: number;
  startRange: number;
  endRange: number;
}

function formatNumberWithPeriods(number: number) {
  return number.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.');;
}

export const StyledRange: FC<Partial<RangeProps>> = ({
  defaultValue,
  leftRngName = "less than 1.000 EUR",
  rightRngName = "more than 5.000.000 EUR",
  titleEndStr = "EUR",
  step = 1,
  startRange = 1000,
  endRange = 5000,
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue || 0);

  const onRangeChange = (e: any) => {
    setCurrentValue(e.target.value);
  };

  return (
    <>
      <Grid item xs={12}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "30px",
              lineHeight: "36px",
              textAlign: "center",
            }}
          >
            {`${formatNumberWithPeriods(currentValue)} ${titleEndStr}`}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Slider
            min={startRange}
            step={step}
            onChange={onRangeChange}
            defaultValue={currentValue}
            aria-label="Disabled slider"
            max={endRange}
          />
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "13.64px",
              }}
            >
              {leftRngName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "13.64px",
              }}
            >
              {rightRngName}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
