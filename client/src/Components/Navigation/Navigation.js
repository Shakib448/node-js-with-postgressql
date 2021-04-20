import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box, ButtonGroup, Container, Grid } from "@material-ui/core";
import clsx from "clsx";
import MobileNavigation from "./MobileNavigation";
// import { useEffect, useState } from "react";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  linkButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  linkButtonHover: {
    transition: "all .5s",
    "&:hover": {
      background: "#91DAFE",
      color: "#fff",
    },
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
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Image
                  src="/image/Logo.png"
                  alt="Picture of Logo"
                  width={128}
                  height={24}
                />
              </Grid>
              <Grid item>
                <ButtonGroup
                  color="inherit"
                  className={clsx(classes.linkButton)}
                >
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
                    <Button className={clsx(classes.linkButtonHover)}>
                      Help
                    </Button>
                  </Box>
                  <Box mr={2}>
                    <Button className={clsx(classes.linkButtonHover)}>
                      Log in
                    </Button>
                  </Box>
                </ButtonGroup>
                <MobileNavigation />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
