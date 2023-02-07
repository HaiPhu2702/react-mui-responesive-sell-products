import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
  Menu,
  MenuItem
} from "@mui/material";

import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";

const Navbar = () => {
  const Toolbars = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });

  const MenuItems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "#" },
    { name: "Portfolio", link: "#" },

    { name: "Blog", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  const [showMenu, setShowMenu ]= useState(false);


  return (
    <AppBar sx={{ background: "black" }} position={'sticky'}>
      <Toolbars>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item, index) => (
            <Typography
              sx={{ cursor: "pointer", fontSize: "14px" }}
              key={index}
            >
              {item.name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="search ....." sx={{ color: "white" }} />

          <MenuIcon
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            onClick={()=>setShowMenu(true)}
          />
        </SearchBox>
      </Toolbars>

   
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={showMenu}
          onClose={()=>setShowMenu(!showMenu)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box
            sx={{
              width: 280,
              height: "90vh",
            }}
          >
            {MenuItems.map((item, index) => (
              <MenuItem
                sx={{ cursor: "pointer", fontSize: "14px" }}
                key={index}
              >
                {item.name}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      
    </AppBar>
  );
};

export default Navbar;
