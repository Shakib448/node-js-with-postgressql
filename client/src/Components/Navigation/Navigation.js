import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Box, ButtonGroup, Container, Grid } from "@material-ui/core";
import clsx from "clsx";
import MobileNavigation from "./MobileNavigation";
import Image from "next/image";
import Link from "next/link";

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
      background: "transparent",
      color: "#91DAFE !important",
    },
  },
  appBar: {
    background: "transparent !important",
    boxShadow: "none",
  },
  container: {
    background: "white !important",
    padding: "5px 0px",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Container maxWidth="md" className={clsx(classes.container)}>
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
                  disableRipple={true}
                  fullWidth={true}
                >
                  {router.map((item, index) => (
                    <Box mr={2} key={index}>
                      <Link href={item.route}>
                        <Button className={clsx(classes.linkButtonHover)}>
                          {item.routeName}
                        </Button>
                      </Link>
                    </Box>
                  ))}
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

const router = [
  { routeName: "Home", route: "/home" },
  { routeName: "About us", route: "/home" },
  { routeName: "Accomodation", route: "/home" },
  { routeName: "Gallery", route: "/home" },
  { routeName: "Blog", route: "/home" },
  { routeName: "Contact", route: "/home" },
];

export default Navigation;
