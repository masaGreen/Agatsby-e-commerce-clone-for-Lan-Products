import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Button,
  Box,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Card,
  Container,
} from "@mui/material";


const Product = ({ data }) => {
  
  const image = getImage(data.dbJson.url.childImageSharp)
  return (
    <Container sx={{ marginBlock: "150px" }}>
      <Box>
        <Card sx={{display:"grid", height:"50vh", width:"60vw", marginInline:"auto", gridTemplateColumns:"2fr 3fr"}}>
          <Box>
            <CardMedia sx={{ display: "flex" }}>
              <GatsbyImage
                objectPosition="50% 50%"
                image={image}
              />
            </CardMedia>
          </Box>
          <Box>
            <Box>
              <CardContent>
                <Typography
                  variant="Body1"
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    marginBottom: "2rem",
                  }}
                >
                  {data.dbJson.name}
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
                  price: Ksh. {data.dbJson.price}.00
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad blanditiis ipsum accusamus quasi beatae nisi. Ut ad perferendis nemo?
                </Typography>
              </CardContent>
            </Box>
            <Box>
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
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};
export default Product;

export const query = graphql`
  query MyproductQuery($product: String) {
    dbJson(id: { eq: $product }) {
      name
      price
      quantity
      url {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, height: 350)
        }
      }
      id
    }
  }
`;
