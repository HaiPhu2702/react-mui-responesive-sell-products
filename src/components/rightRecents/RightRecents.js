import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import postImage1 from "../../static/image1.jpg";
import postImage2 from "../../static/image2.jpg";
import postImage3 from "../../static/image3.jpg";
import postImage4 from "../../static/image4.jpg";
import Card from "../card/Card";

const RightRecents = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Most Popular
      </Typography>


      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth:360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar 
            sx={{height:80,width:80}}
            variant='square'
            alt="Remy Sharp" 
            src={postImage4} />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>

        
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar 
            sx={{height:80,width:80}}
            variant='square'
            alt="Remy Sharp" 
            src={postImage2} />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>

        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar 
            sx={{height:80,width:80}}
            variant='square'
            alt="Remy Sharp" 
            src={postImage3} />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider />
      </List>

      <Typography align="center" bgcolor={"black"} color="white">
        About Us
      </Typography>

      <Card cardImage={postImage3}/>


    </Box>
  );
};

export default RightRecents;
