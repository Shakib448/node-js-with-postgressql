import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box, ButtonGroup, Container } from "@material-ui/core";
import clsx from "clsx";
import MobileNavigation from "./MobileNavigation";
// import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  linkButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    color: "#fff",
  },
  linkButtonHover: {
    transition: "all .5s",
    "&:hover": {
      background: "#2DDE8D",
      color: "#fff",
    },
  },
  signUpBtn: {
    background: "linear-gradient(90deg, #2BDE8C, #78EF4E)",
    color: "#fff",
  },
  appBar: {
    transition: 1,
    background: "white !important",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  // const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.addEventListener("scroll");
  //   };
  // }, []);

  return (
    <Box component="div" className={clsx(classes.root)}>
      <AppBar position="fixed">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h5" className={clsx(classes.title)}>
              <Box fontWeight="fontWeightBold">AIR CNC</Box>
            </Typography>
            <ButtonGroup color="inherit" className={clsx(classes.linkButton)}>
              <Box mr={2}>
                <Button className={clsx(classes.linkButtonHover)}>
                  Host your Home
                </Button>
              </Box>
              <Box mr={2}>
                <Button className={clsx(classes.linkButtonHover)}>
                  Host your experience
                </Button>
              </Box>
              <Box mr={2}>
                <Button className={clsx(classes.linkButtonHover)}>Help</Button>
              </Box>
              <Box mr={2}>
                <Button className={clsx(classes.linkButtonHover)}>
                  Log in
                </Button>
              </Box>
              <Box mr={2}>
                <Button
                  className={clsx(classes.signUpBtn)}
                  color="inherit"
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </ButtonGroup>
            <MobileNavigation />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
