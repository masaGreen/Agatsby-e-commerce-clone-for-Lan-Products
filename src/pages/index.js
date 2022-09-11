import React from "react";
import { Link } from "gatsby";
import "../global.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { CardMedia } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {styled} from "@mui/material"
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({});


const HeroImage = styled(Box)({
  height:"80vh",background:
  "url(https://lanbrands.co.ke/wp-content/uploads/2022/03/cropped-Lan-Catalogue-best.png)",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-around",
    color: "white",
    width: "100%",
    
    fontWeight: 300,
})
const useStyles = makeStyles((theme) => ({
  box: {
    

    
  },
  main: {
    
    position: "relative",
    background: "rgb(241, 241, 241)",
    height:"80vh"
  },
  slideroverlay: {
    background: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  carousel: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "80vh",
  },
 
  linkage: {
    textDecoration: "none",
    color: "white",
  },

  carouselitem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
  slider: {
    background:
      "url(https://lanbrands.co.ke/wp-content/plugins/spicebox//inc/busicare/images/testimonial/testimonial-bg.jpg)",
    height: "60vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "contain",
    backgroundPosition: "bottom",
    position: "relative",
  },
  categories: {
    marginInline: "1rem",
  },
  boxed: {
    marginBottom: "2rem",
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const images = [
    {
      id: 0,
      chain: " Naivas Supermarket ",
      description:
        "A supermarket chain with over 80 outlets. Sells also to schools hospitals, gyms, flower farms and hotels",
    },
    {
      id: 1,
      chain: " Quickmart Supermarket ",
      description:
        "A supermarket chain with over 80 outlets. Sells also to schools hospitals, gyms, flower farms and hotels",
    },
    {
      id: 2,
      chain: " Ibis Hotels ",
      description:
        "A supermarket chain with over 40 outlets. Sells also to schools hospitals, gyms, flower farms and hotels",
    },

    {
      id: 3,
      chain: " Gym and Cleaning Companies ",
      description:
        " Sells directly to cleaning companies and gyms among others",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      {/* image header */}
      <Box className={classes.main}>
        <div className={classes.overlay}></div>
        <HeroImage >
          <Button>
            <Typography variant="h6" sx={{ color: "white", zIndex: 10 }}>
              Lan Brands - By Alanic
            </Typography>
            <Typography variant="h6" sx={{ color: "white", zIndex: 10 }}>
              Products Limited
            </Typography>
          </Button>
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            sx={{ color: "white", zIndex: 10 }}
          >
            Home Care &amp; Body Care
          </Typography>
          {/* <Box sx={{ marginBottom: "20px" }}> */}
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ color: "white", zIndex: 10 }}
          >
            Trusted manufacturer's of home care, body care and cleaning
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ color: "white", zIndex: 10, marginBottom: "15px" }}
          >
            We meet our clients needs and wants promptly with
          </Typography>
          {/* </Box> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Link to="/shop" className={classes.linkage}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: "5px" }}
              >
                <Typography>Go Shopping</Typography>
              </Button>
            </Link>
            <Link to="/wholesaleandTenders" className={classes.linkage}>
              <Button variant="contained" color="secondary">
                <Typography>Wholesale/ tender</Typography>
              </Button>
            </Link>
          </Box>
        </HeroImage>
      </Box>

      {/* categories */}
      <Box className={classes.boxed}>
        <Typography
          textAlign="center"
          variant="h3"
          sx={{ background: "rgb(241, 241, 241)" }}
        >
          Our Categories
        </Typography>

        <Grid
          container
          spacing={2}
          className={classes.categories}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            padding: "1rem",
            justifyContent: { xs: "center" },
          }}
        >
          <Grid item xs={10} sm={8} md={4} className={classes.item}>
            <Card>
              <CardMedia
                sx={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  display: "block",
                  objectFit: "contain",
                }}
                component={"img"}
                src="http://lanbrands.co.ke/wp-content/uploads/2022/03/Lan-Shower-Gel-group-1-300x214.png"
                height="200px"
              />
              <CardContent>
                <Typography variant="h4" gutterBottom textAlign="center">
                  Lan Shower Gel
                </Typography>
                <Typography variant="body1">
                  A blend of moisturizers and emollients. Gives a soft
                  nourishing feel on your body. Easy to use and gives an
                  excellent cleaning performance qui?
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={8} md={4} className={classes.item}>
            <Card>
              <CardContent>
                <CardMedia
                  sx={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    display: "block",
                    objectFit: "contain",
                  }}
                  component={"img"}
                  src="http://lanbrands.co.ke/wp-content/uploads/2022/03/Lan-Multishine-category-clear-1-300x214.png"
                  height="200px"
                />
                <Typography variant="h4" gutterBottom textAlign="center">
                  Lan Multishine
                </Typography>
                <Typography variant="body1">
                  A green coloured liquid detergent for uses in housekeeping.
                  Lathers very well in water. Safe on hands and surfaces.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} sm={8} md={4} className={classes.item}>
            <Card>
              <CardMedia
                sx={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  display: "block",
                  objectFit: "contain",
                }}
                component={"img"}
                src="http://lanbrands.co.ke/wp-content/uploads/2022/03/Lan-Hand-Cream-500205-Raspberry-2-300x214.png"
                height="180px"
              />

              <CardContent>
                <Typography variant="h4" gutterBottom textAlign="center">
                  Lan Handwash
                </Typography>
                <Typography variant="body1">
                  Formulated with moisturizers and high-end emollients to give a
                  soft nourishing feel. Protects, kills germs and disease
                  causing bacteria and viruses. Easy to use and gives an
                  excellent cleaning performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* imageSlider/Carousel */}

      <Box className={classes.slider}>
        <div className={classes.slideroverlay}></div>
        <Slide className={classes.carousel}>
          {images.map((image) => {
            return (
              <Box className={classes.carouselitem} spacing={1} key={image.id}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: "magenta", fontWeight: 400 }}
                  >
                    {image.chain}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {image.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Slide>
      </Box>
    </ThemeProvider>
    // </Layout>
  );
};
export default Homepage;
