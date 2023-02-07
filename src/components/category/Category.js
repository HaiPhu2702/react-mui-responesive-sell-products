import { Opacity } from "@mui/icons-material";
import { Stack, Box, styled, Typography } from "@mui/material";
import React from "react";
import kidsImage from "../../static/kids.jpg";
import manImage from "../../static/men.jpg";
import womenImage from "../../static/women.jpg";

const StyleBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display:'flex',
  justifyContent: "center",
  alignItems: "center",
});

const StyleTypography = styled(Typography)({
  // margin: "25% 50px 25% 50px",
  background: "white",
  opacity: 0.8,

});

const Category = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
        mt={5}
      >
        <StyleBox sx={{ backgroundImage: `url(${kidsImage})` }}>
          <StyleTypography align="center" variant="h3">
            Kids
          </StyleTypography>
        </StyleBox>

        <StyleBox sx={{ backgroundImage: `url(${womenImage})` }}>
          <StyleTypography align="center" variant="h3">
            Women
          </StyleTypography>
        </StyleBox>

        <StyleBox sx={{ backgroundImage: `url(${manImage})` }}>
          <StyleTypography align="center" variant="h3">
            Man
          </StyleTypography>
        </StyleBox>
      </Stack>
    </Box>
  );
};

export default Category;
