import React from "react";
import { CardMedia, Link,CardContent, Typography,Box } from "@mui/material";

const Card = ({ cardImage }) => {
  return(
   
  
  <Box>
     <Link
     href="http://localhost:3000/detail"
      sx={{
        textDecoration: 'none',
      }}
    >
    <CardMedia
      component="img"
      image={cardImage}
      title="green iguana"
   
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="body1"
        align="center"
        component="div"
        color={"tomato"}
      >
        PERFUMES
      </Typography>

      <Typography gutterBottom variant="h5" align="center" component="div">
        Wearing this will make every love you
      </Typography>

      <Typography gutterBottom variant="body2" align="center" component="div">
        It's womens love
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    </Link>
  </Box>
  
  );
};

export default Card;
