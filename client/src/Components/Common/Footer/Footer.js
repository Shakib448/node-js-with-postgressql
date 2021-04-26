import {
  Container,
  makeStyles,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#04091E",
    margin: `${theme.spacing(3)}px 0px 0px 0px`,
    padding: theme.spacing(4),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.root)}>
      <Container>
        <Grid container justify="center">
          <Grid item md={3} lg={3} sm={12}>
            <Grid container direction="column">
              <Typography variant="h6" style={{ color: "white" }}>
                ABOUT AGENCY
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ color: "#727272", fontWeight: "300" }}
              >
                <Box mt={2}>
                  The world has become so fast paced that people don’t want to
                  stand by reading a page of information, they would much rather
                  look at a presentation and understand the message. It has come
                  to a point
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={3} lg={3} sm={12}></Grid>
          <Grid item md={3} lg={3} sm={12}></Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
