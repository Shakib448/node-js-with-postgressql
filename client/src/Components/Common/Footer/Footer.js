import { Container, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#04091E",
    padding: theme.spacing(3),
    margin: `${theme.spacing(3)}px 0px 0px 0px`,
    height: "200px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.root)}>
      <Container>
        <Grid container>
          <Grid item md={3} lg={3} sm={12}></Grid>
          <Grid item md={3} lg={3} sm={12}></Grid>
          <Grid item md={3} lg={3} sm={12}></Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
