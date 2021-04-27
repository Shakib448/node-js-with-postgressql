import Image from "next/image";
import { Grid, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  media: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  grid: {
    position: "relative",
  },
  btn: {
    background: "#F2C201",
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "14px",
    color: "#fff",
    boxShadow: "none",
    position: "absolute",
    bottom: 20,
    "&:hover": {
      background: "#F2C201",
      boxShadow: "none",
    },
  },
}));

const HotelBook = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center">
      <Grid
        item
        container
        md={3}
        lg={3}
        sm={12}
        xs={12}
        justify="center"
        className={clsx(classes.grid)}
      >
        <Image
          className={classes.media}
          src="/image/room1.jpg"
          title="Room1 image"
          width={250}
          height={300}
        />
        <Button variant="contained" className={clsx(classes.btn)}>
          BOOK NOW
        </Button>
      </Grid>
    </Grid>
  );
};

export default HotelBook;
