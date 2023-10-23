import {  Grid } from "@mui/material";
import { FooterLnk } from "./Footer/FooterLnk";

export const Footer = () => {
  return (
    <Grid container height="50px" alignItems="center" justifyContent="right" borderTop="1px solid black">
      <Grid container item lg={6} spacing={1} justifyContent="right">
        <Grid item>
        <FooterLnk>Documents</FooterLnk>
        </Grid>
        <Grid item>
          <FooterLnk>Risk information</FooterLnk>
        </Grid>
        <Grid item>
          <FooterLnk>Privacy</FooterLnk>
        </Grid>
        <Grid item>
          <FooterLnk>Impressum</FooterLnk>
        </Grid>
        <Grid item>
          <FooterLnk>Privacy settings</FooterLnk>
        </Grid>
      </Grid>
    </Grid>
  );
};
