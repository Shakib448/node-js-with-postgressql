import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    "*:focus": {
      outline: 0,
    },
    ".MuiTypography-root": {
      // font: "bold 12px/60px Poppins, sans-serif !important",
      // color: "#222222 ",
      // textTransform: "uppercase",
    },
    ".MuiButtonBase-root": {
      font: "bold 12px/60px Poppins, sans-serif !important",
      color: "#222222 !important",
      textTransform: "uppercase !important",
    },
    ".container": {
      width: "100%",
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 540,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 720,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 1170,
      },
    },
    ".row": {
      display: "flex",
      flexWrap: "wrap",
      marginRight: -theme.spacing(2),
      marginLeft: -theme.spacing(2),
    },
    ".container-fluid": {
      width: "100%",
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1370,
    },

    ".no-decoration": {
      textDecoration: "none",
    },

    ".capitalize": {
      textTransform: "capitalize",
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
