import React from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Divider, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({});

const useStyles = makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  footer: {
    height: "20vh",
    background: "#8c0773",
    display: "grid",
    placeContent: "center",
    color: "white",
    fontSize: "0.8em",
  },
  categories: {
    minHeight: "70vh",
    width: "100%",
    alignContent: "center",
    background: "rgb(241, 241, 241)",
  },
  others: {
    
  },

  link: {
    textDecoration: "none",
    display: "inline-block",
  },
  social: {
    "&:hover": { transform: "scale(1.4)", transition: "350ms ease-out" },
    background: "skyblue",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Box >
        <div className={classes.toolbar}></div>
        <div>{children}</div>
      </Box>

      {/* contacts and others */}
      <Box className={classes.others}>
        <Grid container sx={{ display: "flex", justifyConntent: "center" }}>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                background: "skyblue",
                border: "none",
                borderRadius: 0,
                width: "100%",
                height: "100%",
                padding: "1em",
              }}
              elevation={0}
            >
              <CardMedia
                sx={{ objectFit: "contain", width: "100%", height: "100%" }}
                component={"img"}
                src={
                  "http://lanbrands.co.ke/wp-content/uploads/2022/02/cropped-Lan-Brands-Logo-2-png-1024x589.png"
                }
                // height="324px"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "300", color: "white" }}
                >
                  Lan Brands - Alanic Products Limited
                </Typography>
                <div style={{ marginTop: "2em" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon />
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "10px", color: "white" }}
                    >
                      Thika - Munene Industries Next to Thika High School
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MailOutlineIcon />
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "10px", color: "white" }}
                    >
                      info@lanbrands.co.ke
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CallIcon />
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "10px", color: "white" }}
                    >
                      0715345152
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                background: "skyblue",
                border: "none",
                height: "100%",
                borderRadius: 0,
                width: "100%",
                padding: "1em",
                "&:hover": { background: "skyblue" },
              }}
              elevation={0}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "purple" }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "2rem", color: "white" }}
                >
                  We are manufacturer's of home care, body care and cleaning
                  products. Our products are made from a customers perspective
                  with quality &amp; customer satisfaction as our pillar and
                  delivering on time.
                </Typography>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    marginTop: "4rem",
                  }}
                >
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          textDecoration: "none",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />{" "}
                        Privacy Policy
                      </Typography>
                    </Link>
                  </div>
                  <Divider sx={{ background: "white", marginTop: "8px" }} />
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                        textAlign="center"
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />
                        Refund and Returns policy
                      </Typography>
                    </Link>
                  </div>
                  <Divider sx={{ background: "white", marginTop: "8px" }} />
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />
                        Wholesale / Tenders
                      </Typography>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ margin: "0 auto" }}>
            <Card
              sx={{
                background: "skyblue",
                border: "none",
                height: "100%",
                borderRadius: 0,
                width: "100%",
                padding: "1em",
                "&:hover": { background: "skyblue" },
              }}
              elevation={0}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "purple" }}
                >
                  Categories
                </Typography>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    marginTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          textDecoration: "none",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />{" "}
                        Hand Wash
                      </Typography>
                    </Link>
                  </div>
                  <Divider sx={{ background: "white", marginTop: "8px" }} />
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                        textAlign="center"
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />
                        Shower gel
                      </Typography>
                    </Link>
                  </div>
                  <Divider sx={{ background: "white", marginTop: "8px" }} />
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />
                        Multishine
                      </Typography>
                    </Link>
                  </div>
                  <Divider sx={{ background: "white", marginTop: "8px" }} />
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />
                        Hand Wash Antibacterial
                      </Typography>
                    </Link>
                  </div>
                  <Divider sx={{ background: "white", marginTop: "8px" }} />
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />
                        Carpet Shampoo
                      </Typography>
                    </Link>
                  </div>
                  <Divider sx={{ background: "white", marginTop: "8px" }} />
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <Link to="/" className={classes.link}>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: "1rem",
                          color: "white",
                          "&:hover": { color: "purple" },
                        }}
                      >
                        <NavigateNextIcon
                          sx={{
                            verticalAlign: "middle",
                            fontSize: "small",
                            color: "white",
                            "&:hover": { color: "purple" },
                          }}
                        />
                        Sanitizers
                      </Typography>
                    </Link>
                  </div>
                </div>
                <div style={{ marginTop: "0.2rem" }}>
                  <IconButton>
                    <FacebookIcon color="primary" className={classes.social} />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon
                      sx={{ background: "magenta", borderRadius: "5px" }}
                      className={classes.social}
                    />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon color="primary" className={classes.social} />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.footer}>
        <Typography variant="body1">
          Powered_ Hawk Data-Hub ~<i>from</i> data to insights ~
        </Typography>
      </Box>
    </Box>
  );
};
export default Layout;
