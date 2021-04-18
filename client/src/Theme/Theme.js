import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

// colors
const primary = "#2DDE8D";
const navigationColor = "#fff";
const iconColor = "#757575";
const secondary = "#04496e";
const grey = "#F8F8F8";
const black = "#343a40";
const darkBlack = "rgb(36, 40, 44)";
const background = "#f5f5f5";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

// border
const borderWidth = 3;
const borderColor = "rgba(0, 0, 0, 0.13)";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 992;
const sm = 600;
const xs = 0;

// spacing
const spacing = 8;

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    grey: { main: grey },

    common: {
      black,
      darkBlack,
    },

    navigation: {
      navigationColor,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    icon: {
      iconColor,
    },
    tonalOffset: 0.2,
    background: {
      default: background,
    },
    spacing,
  },

  breakpoints: {
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: "static",
      },
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing * 6,
        paddingRight: spacing * 6,
        borderBottom: `${borderWidth}px solid ${borderColor}`,
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth,
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth,
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`,
      },
    },
    MuiDialog: {
      paper: {
        width: "100%",
        maxWidth: 430,
        marginLeft: spacing,
        marginRight: spacing,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: darkBlack,
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
