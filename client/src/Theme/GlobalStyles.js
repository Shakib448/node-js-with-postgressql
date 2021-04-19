import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  "@global": {
    "*:focus": {
      outline: 0,
    },
    ".MuiTypography-root": {
      fontFamily: "Poppins, sans-serif !important",
      textTransform: "none !important",
    },
    ".MuiButtonBase-root": {
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: "bold ",
      textTransform: "none !important",
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
    ".MuiPickersModal-dialog": {
      "&:first-child": {
        padding: "0px !important",
      },
    },
    ".MuiDialog-paperWidthSm": {
      maxWidth: "30% !important",
    },
    ".MuiPickersBasePicker-pickerView": {
      maxWidth: "none !important",
    },
    "p.MuiTypography-root.MuiTypography-body1.MuiTypography-alignCenter": {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "span.MuiTypography-root.MuiPickersCalendarHeader-dayLabel.MuiTypography-caption": {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    ".MuiInputBase-root.MuiInput-root.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-adornedEnd ": {
      fontSize: "large",
      fontWeight: "bold",
    },
    "label#date-picker-dialog-label": {
      fontSize: "large",
      fontWeight: "bold",
    },
    ".MuiInputLabel-outlined": {
      fontFamily: "Poppins, sans-serif !important",
      fontSize: "14.5px !important",
      fontWeight: "bold !important",
    },
    ".MuiAccordion-root:before": {
      height: "2px !important",
      position: "absolute !important",
      top: "70px !important",
      opacity: "0 !important",
    },
    ".MuiAccordion-root.Mui-expanded:before": {
      background: "lightgray !important",
      opacity: "1 !important",
    },
    ".MuiAccordionSummary-content.Mui-expanded": {
      margin: "0px !important",
    },
    ".MuiAccordionSummary-content": {
      margin: "0px !important",
    },
    ".MuiAccordionDetails-root": {
      padding: "0px !important",
    },
    ".MuiAccordionSummary-root": {
      padding: "5px 0px !important",
    },
  },
});

function globalStyles() {
  return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
