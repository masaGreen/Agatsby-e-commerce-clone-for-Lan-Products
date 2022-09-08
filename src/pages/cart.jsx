import React from "react";
import { useContext } from "react";
import { Link } from "gatsby";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { GatsbyContext } from "../gatsbyContext/gatsbyContext";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

const theme = createTheme({});

const Cart = () => {
  //deliveries from my contextAPI
  const { itemsAdded, setItemsAdded, cartItems, setCartItems } =
    useContext(GatsbyContext);
  //handling decrements on quantity
  const handleAdd = (id) => {
    //ascertain item selected
    const isEqualid = itemsAdded.some((item) => item.id === id);
    if (isEqualid) {
      //map through the list and increment only the item with the id selected
      const checked = itemsAdded.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setItemsAdded(checked);
      setCartItems(cartItems + 1);
    }
  };
  //handling increments on quantity
  const handleMinus = (id) => {
    const isEqualid = itemsAdded.some((item) => item.id === id);
    if (isEqualid) {
      const checked = itemsAdded.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setItemsAdded(checked);

      setCartItems(cartItems - 1);
    }
  };
  const handleRemove = (id) => {
    const cartItemquantity = itemsAdded.find((item) => item.id === id);

    const updated = itemsAdded.filter((item) => item.id !== id);
    setItemsAdded(updated);
    //removes all the quantities incremented
    setCartItems(cartItems - cartItemquantity.quantity);
  };
  return (
    //check if the them can be applied in the wrappComponent on nodejs file
    <ThemeProvider theme={theme}>
      <Container sx={{ paddingTop: "8rem" }}>
        <Grid
          container
          spacing={1}
          sx={{ marginBlock: "1rem", flexDirection: "column" }}
        >
          {itemsAdded.length > 0 ? (
            itemsAdded.map((product) => {
              const image = getImage(product.url);
              return (
                <Grid
                  item
                  sx={{
                    marginInline: "auto",
                    maxWidth: "45vw",
                    ppadding: "5px",
                  }}
                >
                  <Card sx={{width:"50vw"}}>
                    <Box sx={{ display: "flex" }}>
                      <CardMedia>
                        <GatsbyImage image={image} objectFit="contain" />
                      </CardMedia>
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body1">{product.name}</Typography>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="primary"
                        >
                          Ksh:{product.quantity * product.price}/=
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardActions
                    // sx={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Button
                          variant="outlined"
                          onClick={() => handleRemove(product.id)}
                          align="left"
                          sx={{
                            textTransform: "none",
                            color: "red",
                            "&:hover": { background: "red", color: "white" },
                          }}
                        >
                          <DeleteForeverIcon />
                          Delete
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          [theme.breakpoints.down("sm")]: {
                            flexDirection: "column",
                          },
                        }}
                      >
                        <Button
                          onClick={() => handleAdd(product.id)}
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            background: "purple",
                            "&:hover": { background: "green" },
                          }}
                        >
                          <AddIcon />
                        </Button>
                        <Button
                          sx={{
                            textTransform: "none",
                            fontSize: "1.1rem",
                            fontWeight: "700",

                            "&:hover": {
                              background: "none",
                              cursor: "default",
                            },
                          }}
                        >
                          {product.quantity}
                        </Button>
                        <Button
                          onClick={() => handleMinus(product.id)}
                          variant="outlined"
                          //disable the button upon reaching 1 item
                          disabled={product.quantity === 1 ? true : false}
                          sx={{
                            textTransform: "none",

                            background: "orange",
                            "&:hover": { background: "magenta" },
                          }}
                        >
                          <RemoveIcon />
                        </Button>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Box>
              <Typography variant="h6">
                No Items Added{" "}
                <Link to="/shop" sx={{ color: "blue" }}>
                  <span>
                    <i>Go to Shop</i>
                  </span>
                </Link>
              </Typography>
            </Box>
          )}

          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1, textAlign: "right" }}>
              <Typography sx={{ marginRight: "1rem", fontWeight: 700 }}>
                Subtotal: Ksh:
              </Typography>
            </Box>
            <Box>
              <Typography>
                {itemsAdded
                  .map((product) => product.quantity * product.price)
                  .reduce((a, b) => a + b, 0)}
                /=
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
    // </Layout>
  );
};
export default Cart;
