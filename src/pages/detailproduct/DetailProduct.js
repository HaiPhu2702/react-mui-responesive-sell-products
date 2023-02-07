import React from "react";
import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";

import postImage5 from "../../static/image5.jpg";
import image3 from "../../static/image3.jpg";

import Footer from "../../components/footer/Footer";
import RightRecents from "../../components/rightRecents/RightRecents";

const DetailProduct = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${postImage5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color="red"
          variant="h5"
          sx={{
            fontWeight: 900,
            padding: 10,
          }}
        >
          Clicked Poste Tittle
        </Typography>
      </Box>

      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 50px 100px" }}>
            <Typography
              m={4}
              align="center"
              color="gray"
              variant="body1"
              sx={{
                fontWeight: 900,
              }}
            >
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              laudantium voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? Magnam labore blanditiis enim, laborum atque nulla
              veniam impedit necessitatibus totam, sed quibusdam?
            </Typography>
            <CardMedia
              component={'img'}
              height={'300px'}
              image={image3}
              alt='green iguana'
              sx={{
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
              }}
            />
          </Box>
          <Box flex={1}>
            <RightRecents/>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
};

export default DetailProduct;
