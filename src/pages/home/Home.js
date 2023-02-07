import React from "react";
import { Box, Container, Stack } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";

import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Recents from "../../components/recents/Recents";
import RightRecents from "../../components/rightRecents/RightRecents";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Hero />
        <Container>
          <Category />
          <hr />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 8 }}
            mt={8}
          >
            <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
              <Recents />
            </Box>
            <Box flex={1}>
              <RightRecents />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
