import {
  makeStyles,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import SendIcon from "@material-ui/icons/Send";

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
  formControl: {
    width: "100%",
  },
  icon: {
    color: "#F3C300",
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
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Grid container direction="column">
            <Typography variant="h6" style={{ color: "white" }}>
              ABOUT AGENCY
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#727272", fontWeight: "300" }}
            >
              <Box mt={2} pr={3}>
                The world has become so fast paced that people don’t want to
                stand by reading a page of information, they would much rather
                look at a presentation and understand the message. It has come
                to a point
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={2} lg={2} sm={12} xs={12}>
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
        <Box pl={10}></Box>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <Grid container direction="column">
            <Typography variant="h6" style={{ color: "white" }}>
              NEWSLETTER
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#727272", fontWeight: "300" }}
            >
              <Box mt={2}>
                For business professionals caught between high OEM price and
                mediocre print and graphic output,
              </Box>
            </Typography>
            <Box mt={2}>
              <FormControl
                variant="outlined"
                className={clsx(classes.formControl)}
              >
                <InputLabel
                  htmlFor="outlined-adornment-Email"
                  style={{ color: "white", fontSize: "14px" }}
                >
                  <Typography variant="subtitle2">Email Address</Typography>
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-Email"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <SendIcon className={clsx(classes.icon)} />
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={102}
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
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
