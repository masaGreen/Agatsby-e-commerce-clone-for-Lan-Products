import React from "react";
import { useState } from "react";
// import Layout from "../layouts/layout";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "gatsby";

const theme = createTheme({});

const useStyles = makeStyles((theme) => ({
  main: {
    color: "#333300",
    fontSize:"1.2em"
  },
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
  form: {
    margin: "10px auto",
    width: "80vw",
    padding: "1rem",
  },
}));
console.log(useStyles);

const WholesaleTender = () => {
  const classes = useStyles();
  const [checkedSupermarket, setCheckedSupermarket] = useState("");
  const [checkedGym, setCheckedGym] = useState("");
  const [checkedRetail, setCheckedRetail] = useState("");
  const [checkedOther, setCheckedOther] = useState("");
  const handleFormData = () => {};
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}
        <Box className={classes.main} sx={{ marginTop: theme.spacing(6) }}>
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
              <Typography variant="h3">Wholesale / Tenders</Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ color: "whitesmoke", "&:hover": { color: "purple" } }}
                    variant="h4"
                  >
                    Home
                  </Typography>
                </Link>
                <Typography variant="body1">» Wholesale / Tenders</Typography>
              </div>
            </Box>
          </section>
          <div className={classes.separate}></div>
          <Box>
            <form>
              <Grid container className={classes.form}>
                <FormControl>
                  If you intend to purchase Lan Brands products in bulk for
                  resale, for tender, or any other purpose, Please call
                  0715345152 or send your inquiry with this form and we will get
                  back to you immediately.
                </FormControl>

                <Grid item xs={12} sm={12} md={4}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Firstname"
                    required
                    sx={{ marginTop: "1rem", padding: "0.5rem" }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Lastname"
                    required
                    sx={{ marginTop: "1rem", padding: "0.5rem" }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    required
                    sx={{ marginTop: "1rem", padding: "0.5rem" }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <TextField
                    variant="outlined"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    sx={{ marginTop: "1rem", padding: "0.5rem" }}
                    label="Phone No."
                    required
                    fullWidth
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "2rem",
                  }}
                >
                  <FormControlLabel
                    sx={{ marginLeft: "0.5rem" }}
                    control={
                      <Checkbox
                        size="small"
                        checked={checkedSupermarket}
                        onChange={(e) => {
                          setCheckedSupermarket(e.target.checked);
                        }}
                      />
                    }
                    label="Supermarket"
                  />
                  <FormControlLabel
                    sx={{ marginLeft: "0.5rem" }}
                    control={
                      <Checkbox
                        size="small"
                        checked={checkedGym}
                        onChange={(e) => {
                          setCheckedGym(e.target.checked);
                        }}
                      />
                    }
                    label="Gym, Restaurants and Hotels"
                  />

                  <FormControlLabel
                    sx={{ marginLeft: "0.5rem" }}
                    control={
                      <Checkbox
                        size="small"
                        checked={checkedRetail}
                        onChange={(e) => {
                          setCheckedRetail(e.target.checked);
                        }}
                      />
                    }
                    label="Retail Shop"
                  />
                  <FormControlLabel
                    sx={{ marginLeft: "0.5rem" }}
                    control={
                      <Checkbox
                        checked={checkedOther}
                        size="small"
                        onChange={(e) => {
                          setCheckedOther(e.target.checked);
                        }}
                      />
                    }
                    label="Other"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{ marginTop: "2rem" }}>
                  <TextField
                    multiline
                    rows={2}
                    fullWidth
                    label="Name of your Business"
                    sx={{ marginLeft: "0.5rem" }}
                  />
                  <TextField
                    multiline
                    rows={4}
                    fullWidth
                    label="Please detail your enquiry below. (Provide Product name(s) and Quantity) "
                    sx={{ marginTop: "2rem", marginLeft: "0.5rem" }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    sx={{ marginLeft: "0.5rem", marginTop: "1rem" }}
                    variant="contained"
                    onClick={handleFormData}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      {/* </Layout> */}
    </ThemeProvider>
  );
};
export default WholesaleTender;
