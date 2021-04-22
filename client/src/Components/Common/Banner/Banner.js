import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import clsx from "clsx";
import style from "./Banner.module.scss";

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
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid container className={clsx(style.banner__bg)}>
      <Grid container justify="center" alignItems="center" direction="column">
        <Box mb={2}>
          <Typography
            variant="h6"
            align="center"
            className={clsx(classes.subtitle)}
          >
            AWAY FROM MONOTONOUS LIFE
          </Typography>
        </Box>
        <Typography
          align="center"
          variant="h2"
          className={clsx(classes.title1)}
        >
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
