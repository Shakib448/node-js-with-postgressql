import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

const HotelBook = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center">
      <Grid item md={3} lg={3} sm={12} xs={12}>
        <Image
          className={classes.media}
          src="/image/room1.jpg"
          title="Room1 image"
          width={300}
          height={300}
        />
      </Grid>
    </Grid>
  );
};

export default HotelBook;
