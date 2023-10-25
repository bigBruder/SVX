import GrassIcon from "@mui/icons-material/Grass";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import RocketIcon from "@mui/icons-material/Rocket";
import { Grid, SpeedDial, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ChooseCard } from "../../UI/shared/ChooseCard";
import { NoneButton } from "../../UI/shared/NoneButton";
import { StyledAccordion } from "../../UI/shared/StyledAccordion";
import { StyledButton } from "../../UI/shared/StyledButton";
import { MuiBreakpointsContext } from "../../contexts/muiBreakpointsContext";

const cardsArr = [
  {
    Icon: RocketIcon,
    title: "Significantly increase assets",
    description: "I have high expectations for returns ",
  },
  {
    Icon: GrassIcon,
    title: "Build up assets",
    description: "I expect returns above ",
  },
];

export const FamiliarService = () => {
  const { medium } = useContext(MuiBreakpointsContext);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const onCardClick = (index: number) => {
    if (selectedItems.includes(index)) {
      const filtredArr = selectedItems.filter((i) => i !== index);
      setSelectedItems(filtredArr);
      return;
    }

    setSelectedItems((prev) => [...prev, index]);
  };

  return (
    <Grid container rowGap={2}>
      <Grid
        item
        container
        md={11}
        justifyContent="center"
        sx={{ order: medium ? -1 : 1 }}
        spacing={3}
      >
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <Typography sx={{ fontSize: "25px" }}>
            Which financial services are you familiar with?
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: "10px" }}>
            Multiple selection possible
          </Typography>
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

        <Grid item xs={12} sm={10} md={10} lg={8}>
          <NoneButton
            cardSx={{ pl: "20px" }}
            onClick={() => {
              setSelectedItems([]);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={10} md={10} lg={8}>
          <StyledAccordion
            title="Why do we need information about your financial situation?"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={8}>
          <StyledButton>Next</StyledButton>
        </Grid>
      </Grid>
      <Grid container item md={1} alignContent="start" justifyContent="end">
        <Grid item>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<LiveHelpIcon fontSize="medium" />}
          ></SpeedDial>
        </Grid>
      </Grid>
    </Grid>
  );
};
