import React, { useContext } from "react";
import { GatsbyContext } from "../gatsbyContext/gatsbyContext";
import { Link } from "gatsby";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles, ThemeProvider } from "@mui/styles";
import MenuDrawer from "./Drawercomp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { createTheme } from "@mui/material/styles";
import {styled} from "@mui/material"

export const theme = createTheme({});

const MyappBar = styled(AppBar)({     
   position:"static",
   
})


const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    position: "sticky",
  },
  toolbar: {
    color: "black",
    background: "rgb(241, 241, 241)",
    height: "100%",
    position:"relative"
  },
  mainbox: {
    flexGrow: 1,
    display: "flex",
    marginLeft: "10px",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "purple",
    },
  },
  toggle: {
    
  },
}));



const Navbar = () => {
  const classes = useStyles();
  const {
    cartItems,
    setOpenDrawer,
    itemsAdded,
    setItemsAdded,
    
  } = useContext(GatsbyContext);

  const handleCartItems = () => {
    setItemsAdded(itemsAdded);
    
  };
  return (
    <ThemeProvider theme={theme}>
      <MyappBar
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <Link to ="/" className={classes.link}
              activeStyle={{ color: "#ff33cc" }} >
            <Box
              
            >
              <Typography variant="h3" fontWeight="1000" sx={{textDecoration:"none", color:"Gray", fontWeight:"500"}}>
                Lan Brands
              </Typography>
              <Typography variant="h5" sx={{textDecoration:"none", color:"Gray", fontWeight:"500"}}>Care More, Shine More</Typography>
            </Box>
          </Link>
          <Box
            className={classes.mainbox}
            sx={{
              display:{xs:"none",sm:"none", md:"flex"}
            }}
          >
            <Link
              to="/shop"
              className={classes.link}
              activeStyle={{ color: "#ff33cc" }}
            >
              <Typography variant="body1" sx={{ marginLeft: "2rem" }}>
                Lan Brands Shop
              </Typography>
            </Link>
            <Link
              to="/wholesaleandTenders"
              className={classes.link}
              activeStyle={{ color: "#ff33cc" }}
            >
              <Typography variant="body1" sx={{ marginLeft: "2rem" }}>
                Wholesale/Tenders
              </Typography>
            </Link>
            <Link
              to="/about"
              className={classes.link}
              activeStyle={{ color: "#ff33cc" }}
            >
              <Typography variant="body1" sx={{ marginLeft: "2rem" }}>
                About Us
              </Typography>
            </Link>

            <InputBase sx={{ background: "#F1EFDC", marginLeft: "5px" }}>
              <TextField />
            </InputBase>
            <IconButton sx={{ background: "#F1EFDC", cursor: "pointer" }}>
              <SearchIcon />
            </IconButton>
            <Link to="/cart">
              <Button
                variant="contained"
                size="small"
                sx={{ background: "purple" }}
                onClick={handleCartItems}
              >
                <AddShoppingCartIcon />
                {cartItems}
              </Button>
            </Link>
          </Box>
          
          <IconButton
            sx={{
              // [theme.breakpoints.up("md")]: {
              //   display: "none",
              // },
              display:{md:"none", sm:"flex", xs:"flex",position:"absolute",right:0},
              "& hover": {
                background: "yellow",
              },
            }}
            className={classes.toggle}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
        <MenuDrawer />
      </MyappBar>
    </ThemeProvider>
  );
};
export default Navbar;
