import { Grid } from "@material-ui/core";
import clsx from "clsx";
import style from "./Banner.module.scss";
const Banner = () => {
  return (
    <section className={clsx(style.banner__area)}>
      <Grid container className={clsx(style.banner__bg)}></Grid>
    </section>
  );
};

export default Banner;
