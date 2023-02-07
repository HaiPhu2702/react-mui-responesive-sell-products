import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";

const StyleTypography = styled(Typography)({
  color: "white",
  align: "center",
  textAlign: "center",
});

const Footer = () => {
  return (
    <Box sx={{ background: "black", color: "white", height: "300px" }}>
      <Grid container>
      <Grid item xs={6} sm={3} sx={{ padding: "25px 15px 15px" }}>
          <StyleTypography> Contact Us</StyleTypography>
          <StyleTypography>
            of squamate reptiles, with over 6,000 species,
          </StyleTypography>
          <StyleTypography> Contiments except Antarcti</StyleTypography>
          <StyleTypography> rangin across</StyleTypography>
        </Grid>

        <Grid item xs={6} sm={3} sx={{ padding: "25px 15px 15px" }}>
          <StyleTypography> Data policy</StyleTypography>
          <StyleTypography>cookies</StyleTypography>
          <StyleTypography> Data Safety </StyleTypography>
        </Grid>

        <Grid item xs={6} sm={3} sx={{ padding: "25px 15px 15px" }}>
          <StyleTypography>Categories</StyleTypography>
          <StyleTypography>Kids</StyleTypography>
          <StyleTypography>Women</StyleTypography>
          <StyleTypography>Man</StyleTypography>
        </Grid>

        <Grid item xs={6} sm={3} sx={{ padding: "25px 15px 15px" }}>
            <StyleTypography> Flows Us</StyleTypography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Facebook />
              <Instagram />
              <Twitter />
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
