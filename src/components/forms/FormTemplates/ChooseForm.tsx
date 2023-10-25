import { Grid, Typography } from "@mui/material";
import React, { FC, useContext, useState } from "react";
import { ChooseCard } from "../../UI/shared/ChooseCard";
import { NoneButton } from "../../UI/shared/NoneButton";
import { StyledButton } from "../../UI/shared/StyledButton";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";
import { QuestionMarkLayout } from "../../layout/QuestionMarkLayout";

interface Props {
  cardsArr: any[];
  Accordion: React.ReactNode;
  Alert?: React.ReactNode;
  title: string;
  subtitle?: string;
  isShowNoneBth?: boolean;
  isMultiple?: boolean;
}

export const ChooseForm: FC<Props> = ({
  cardsArr,
  Accordion,
  Alert,
  title,
  subtitle = "Multiple selection possible",
  isShowNoneBth = true,
  isMultiple = true,
}) => {
  const { medium } = useContext(MuiBreakpointsContext);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const onCardClick = (index: number) => {
    if (!isMultiple) {
      if (selectedItems.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems([index]);
      }

      return;
    }

    if (selectedItems.includes(index)) {
      const filtredArr = selectedItems.filter((i) => i !== index);
      setSelectedItems(filtredArr);
      return;
    }

    setSelectedItems((prev) => [...prev, index]);
  };

  return (
    <QuestionMarkLayout>
      <Grid
        item
        container
        md={11}
        justifyContent="center"
        sx={{ order: medium ? -1 : 1 }}
        spacing={3}
      >
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Typography sx={{ fontSize: "25px" }}>{title}</Typography>
          {isMultiple && (
            <Typography variant="subtitle1" sx={{ mt: "10px" }}>
              {subtitle}
            </Typography>
          )}
        </Grid>

        {cardsArr.map((cartItem: any, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={10}
              md={10}
              lg={8}
              spacing={2}
              rowGap={2}
              key={index}
            >
              {selectedItems.includes(index) ? (
                <ChooseCard
                  {...cartItem}
                  index={index}
                  isSelected={true}
                  handleSelect={onCardClick}
                />
              ) : (
                <ChooseCard
                  {...cartItem}
                  index={index}
                  handleSelect={onCardClick}
                />
              )}
            </Grid>
          );
        })}

        {isShowNoneBth && (
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <NoneButton
              cardSx={{ pl: "20px" }}
              onClick={() => setSelectedItems([])}
            />
          </Grid>
        )}

        {Alert && (
          <Grid item xs={12} sm={10} md={10} lg={8}>
            {Alert}
          </Grid>
        )}

        <Grid item xs={12} sm={10} md={10} lg={8}>
          {Accordion}
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <StyledButton>Next</StyledButton>
        </Grid>
      </Grid>
    </QuestionMarkLayout>
  );
};