import { Box } from "@mui/material";
import { Link } from "gatsby";
import Typography from "@mui/material/Typography";
import React from "react";

import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({});

const useStyles = makeStyles((theme) => ({
 
  section: {
    background:
      "url(https://lanbrands.co.ke/wp-content/themes/busicare/assets/images/blog/breadcrum.jpg)",
    height: "40vh",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.6)",
  },
  separate: {
    height: "4vh",
    backgroundRepeat: "repeat",
    background:
      "url(https://lanbrands.co.ke/wp-content/themes/busicare/assets/images/blog/page-shadow.png)",
  },
  body: {
    background: "#fff",
  },
  para: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 4rem",
  },
  list: {
    margin: "5rem",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}
        <Box  >
          <section className={classes.section}>
            <div className={classes.overlay}></div>

            <Box
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                height: "100%",
              }}
            >
              <Typography variant="h3">About Us</Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ color: "whitesmoke", "&:hover": { color: "purple" } }}
                    variant="h4"
                  >
                    Home
                  </Typography>
                </Link>
                <Typography variant="body1">» About Us</Typography>
              </div>
            </Box>
          </section>
          <div className={classes.separate}></div>
        </Box>
        <Box className={classes.para}>
          <Typography variant="body1">
            Alanic Products Limited is the owner of Lan Brands. It was
            registered as a limited company in 2005 as Alanic Chemicals Ltd. and
            is currently trading as Alanic Products Ltd from February 2011. Our
            growth has come about from meeting our clients needs and wants
            promptly, with consistency in quality and excellent customer
            service.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontSize="bold" sx={{ marginLeft: "4rem" }}>
            Our Brands
          </Typography>
        </Box>
        <Box
          className={classes.list}
          sx={{
            [theme.breakpoints.down("md")]: {
              gridTemplateColumns: "1fr",
              gridGap: "1rem",
            },
          }}
        >
          <Box className={classes.first}>
            <ul>
              <li>Lan Multishine liquid detergent</li>
              <li>Lan disinfectant</li>
              <li>Lan Hand Wash</li>
              <li>Lan Hand Wash Antibacterial</li>
              <li>Lan Sanitizer</li>
            </ul>
          </Box>
          <Box className={classes.first}>
            <ul>
              <li>Lan Carpet Shampoo</li>
              <li>Lan Terrazzo Clean</li>
              <li>Lan Car Wash detergent</li>
              <li>Lan Hand Wash Antibacterial</li>
            </ul>
          </Box>
        </Box>
        <Box sx={{ display: "grid", margin: "1rem", placeContent: "center" }}>
          <Typography variant="h6" fontSize="bold" sx={{ marginLeft: "4rem" }}>
            Products on Offer
          </Typography>
        </Box>
       {/* </Layout>  */}
    </ThemeProvider>
  );
};
export default About;
