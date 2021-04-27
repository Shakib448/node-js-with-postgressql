import { Grid } from "@material-ui/core";
import style from "./Banner.module.scss";
import { Parallax } from "react-scroll-parallax";
import BannerContent from "./BannerContent";
import clsx from "clsx";

const Banner = () => {
  return (
    <Grid
      container
      className={clsx(style.banner__bg)}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Parallax y={[-40, 40]} tagOuter="figure">
        <BannerContent />
      </Parallax>
    </Grid>
  );
};

export default Banner;
