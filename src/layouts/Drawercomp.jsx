import React from "react";
import { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "gatsby";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import InfoIcon from '@mui/icons-material/Info';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { GatsbyContext } from "../gatsbyContext/gatsbyContext";

const MenuDrawer = () => {
  const { openDrawer, setOpenDrawer } = useContext(GatsbyContext)
  return (
    <Box>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        anchor="right"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <AddShoppingCartIcon  size="small" />
            </ListItemIcon>
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <ListItemText variant="h6">Lan Brands Shop</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WarehouseIcon  size="small"/>
            </ListItemIcon>
            <Link to="/wholesaleandTenders" style={{ textDecoration: "none" }}>
              <ListItemText variant="h6">Wholesale/Tenders</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon size="small" sx={{background:"green"}} />
            </ListItemIcon>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <ListItemText variant="h6">About Us</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SearchIcon  size="small"/>
            </ListItemIcon>
            <InputBase sx={{ background: "#F1EFDC", marginLeft: "5px" }}>
              <TextField />
            </InputBase>
        
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
export default MenuDrawer;
