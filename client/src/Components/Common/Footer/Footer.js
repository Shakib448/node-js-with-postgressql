import { makeStyles, Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#04091E",
    margin: `${theme.spacing(4)}px 0px 0px 0px`,
    padding: theme.spacing(4),
  },
  content: {
    padding: `${theme.spacing(4)}px 0px`,
  },
  navLink: {
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      color: "#F3C300",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.root)}>
      <Grid
        container
        justify="center"
        spacing={2}
        className={clsx(classes.content)}
      >
        <Grid item md={3} lg={3} sm={12}>
          <Grid container direction="column">
            <Typography variant="h6" style={{ color: "white" }}>
              ABOUT AGENCY
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#727272", fontWeight: "300" }}
            >
              <Box mt={2} pr={2}>
                The world has become so fast paced that people don’t want to
                stand by reading a page of information, they would much rather
                look at a presentation and understand the message. It has come
                to a point
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={3} lg={3} sm={12}>
          <Typography variant="h6" style={{ color: "white" }}>
            NAVIGATION LINK
          </Typography>
          <Box mt={2}>
            <Grid container direction="row">
              <Grid container md={4} lg={4} sm={12}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "#727272", fontWeight: "300" }}
                >
                  {nav1.map((item, index) => (
                    <Box mb={2} className={clsx(classes.navLink)} key={index}>
                      {item.route}
                    </Box>
                  ))}
                </Typography>
              </Grid>
              <Grid container md={4} lg={4} sm={12}>
                <Typography
                  variant="subtitle2"
                  style={{ color: "#727272", fontWeight: "300" }}
                >
                  {nav2.map((item, index) => (
                    <Box mb={2} className={clsx(classes.navLink)} key={index}>
                      {item.route}
                    </Box>
                  ))}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={3} lg={3} sm={12}></Grid>
      </Grid>
    </footer>
  );
};

const nav1 = [
  { route: "Home", to: "/" },
  { route: "Feature", to: "/" },
  { route: "Service", to: "/" },
  { route: "Portfolio", to: "/" },
];

const nav2 = [
  { route: "Team", to: "/" },
  { route: "Pricing", to: "/" },
  { route: "Blog", to: "/" },
  { route: "Contact", to: "/" },
];

export default Footer;
