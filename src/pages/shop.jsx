import Container from "@mui/material/Container";
import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Button,
  Box,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Card,
  Grid,
} from "@mui/material";
import { GatsbyContext } from "../gatsbyContext/gatsbyContext";

const theme = createTheme({});
const useStyles = makeStyles((theme) => ({
  overlay: {
    background: "rgba(0,0,0,0.1)",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
}));

const Shop = ({ data }) => {
  const classes = useStyles();
  const {
    itemsAdded,
    setItemsAdded,
    setCartItems,
    cartItems,
   
  } = useContext(GatsbyContext);
//handle Cart added items
  const handleBasketIncrement = (id) => {
    //initiate rendering of the items added
    setItemsAdded(itemsAdded);
    setCartItems(cartItems + 1);
    //find the item added from the products list
    const updatedItems = data.allDbJson.nodes.find((item) => item.id === id);
    //when the cart is empty --no chance of duplicating items in the cart during display
    if (itemsAdded.length === 0) {
      itemsAdded.push(updatedItems);
      setItemsAdded(itemsAdded);
      
    } else if(itemsAdded.length > 0){
      //when cart has item(s) --this ensures no duplicating
      const isPresent = itemsAdded.some(item=>item.id===id)
      if(isPresent){
        const checked = itemsAdded.map(item=>item.id===id?{...item, quantity:item.quantity+1}:item)
        setItemsAdded(checked)
       
      }
      
     if(!isPresent){
      itemsAdded.push(updatedItems)
      setItemsAdded(itemsAdded)
     
    }
  }
    
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}
      <Container  sx={{ marginTop: theme.spacing(15) }}>
        <Grid container spacing={2} sx={{ marginBlock: "1rem" }}>
          {data.allDbJson.nodes.map((product) => {
            const image = getImage(product.url.childImageSharp);
            return (
              <Grid
                item
                xs={8}
                sm={6}
                md={3}
                className={classes.itemgrid}
                sx={{ marginInline: { xs: "auto" } }}
                key={product.id}
              >
                <Card sx={{ height: "450px", position: "relative" }}>
                  <CardActionArea sx={{ height: "80%" }}>
                    <Link to={`/shop/${product.name}`}>
                      <CardMedia
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <GatsbyImage
                          objectFit="contain"
                          objectPosition="50% 50%"
                          image={image}
                          alt="product"
                        />
                      </CardMedia>
                    </Link>

                    <CardContent>
                      <Typography
                        variant="Body1"
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          marginBottom: "2rem",
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "rgba(255,0,255,0.7)",
                          marginTop: "1rem",
                        }}
                      >
                        price: Ksh. {product.price}.00
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginInline: "auto",
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleBasketIncrement(product.id)}
                        sx={{
                          background: "purple",
                          textTransform: "none",
                          "&:hover": { background: "rgba(255,0,255,0.7)" },
                        }}
                      >
                        <Typography variant="h6" size="small">
                          Add to Cart
                        </Typography>
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                          background: "green",
                          textTransform: "none",
                          "&:hover": { background: "rgba(255,0,255,0.7)" },
                        }}
                      >
                        <Typography variant="h6" size="small">
                          Buy on Whatsapp
                        </Typography>
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {/* </Layout> */}
    </ThemeProvider>
  );
};
export const querry = graphql`
  query MyShopQuery {
    allDbJson {
      nodes {
        id
        name
        price
        quantity
        url {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, height: 200)
          }
        }
      }
    }
  }
`

export default Shop
