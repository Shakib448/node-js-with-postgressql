import { Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import style from "./Banner.module.scss";

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: "#fff",
    opacity: 1,
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid container className={clsx(style.banner__bg)}>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h5" className={clsx(classes.textColor)}>
          AWAY FROM MONOTONOUS LIFE
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;
