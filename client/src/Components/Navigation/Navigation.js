import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box, ButtonGroup } from "@material-ui/core";
import clsx from "clsx";
import MobileNavigation from "./MobileNavigation";

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
    color: "#2DDE8D",
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
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <AppBar position="static" color="transparent">
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
              <Button className={clsx(classes.linkButtonHover)}>Log in</Button>
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
      </AppBar>
    </Box>
  );
};

export default Navigation;
