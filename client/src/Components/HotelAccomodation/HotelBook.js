import Image from "next/image";
import { Grid, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  media: {
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      transform: "scale(1.2)",
    },
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

const HotelBook = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center">
      <Grid item container md={3} lg={3} sm={12} xs={12} justify="center">
        <Image
          className={classes.media}
          src="/image/room1.jpg"
          title="Room1 image"
          width={250}
          height={250}
        />
        <Button
          variant="contained"
          color="primary"
          className={clsx(classes.btn)}
        >
          BOOK NOW
        </Button>
      </Grid>
    </Grid>
  );
};

export default HotelBook;
