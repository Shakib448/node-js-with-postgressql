import { Grid } from "@material-ui/core";
import clsx from "clsx";
import style from "./Banner.module.scss";
const Banner = () => {
  return <Grid container className={clsx(style.banner__bg)}></Grid>;
};

export default Banner;
