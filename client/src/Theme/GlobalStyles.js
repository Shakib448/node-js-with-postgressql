import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    "*:focus": {
      outline: 0,
    },
    ".MuiTypography-root": {
      fontFamily: "'Poppins', sans-serif; !important",
    },
    ".MuiButton-root": {
      fontFamily: "'Poppins', sans-serif; !important",
      textTransform: "uppercase !important",
      fontSize: "12px",
    },
    ".MuiTypography-body2": {
      fontFamily: "'Poppins', sans-serif; !important",
    },
    ".MuiInputBase-root": {
      fontFamily: "'Poppins', sans-serif; !important",
      color: "white",
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
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#F3C300",
    },

    ".MuiInput-input": {
      paddingLeft: "10px !important",
    },
    ".MuiOutlinedInput-root": {
      "&:hover": {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#F3C300 !important",
        },
      },
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
