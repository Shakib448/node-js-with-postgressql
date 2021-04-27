import { makeStyles, Typography, Box, Button, Grid } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "30px",
    letterSpacing: "1.4px",
    fontWeight: "400",
  },
  title1: {
    color: "#fff",
    fontSize: "60px",
    lineHeight: "60px",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  content: {
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "24px",
    padding: "10px 0px 20px",
    color: "#fff",
  },
  btn: {
    background: "#F2C201",
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "14px",
    color: "#fff",
    "&:hover": {
      background: "#F2C201",
    },
  },
}));
const BannerContent = () => {
  const classes = useStyles();

  return (
    <>
      <Box mb={2}>
        <Typography
          variant="h6"
          align="center"
          className={clsx(classes.subtitle)}
        >
          AWAY FROM MONOTONOUS LIFE
        </Typography>
      </Box>
      <Typography align="center" variant="h2" className={clsx(classes.title1)}>
        <Box fontWeight="fontWeightBold">Relax Your Mind</Box>
      </Typography>
      <Box mb={2} mt={2}>
        <Typography
          variant="body2"
          component="p"
          align="center"
          className={clsx(classes.content)}
        >
          If you are looking at blank cassettes on the web, you may be very
          confused at the <br /> difference in price. You may see some for as
          low as $.17 each.
        </Typography>
        <Grid container justify="center">
          <Box mt={2}>
            <Button variant="contained" className={clsx(classes.btn)}>
              GET STARTED
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default BannerContent;
