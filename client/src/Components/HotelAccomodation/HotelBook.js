import Image from "next/image";
import { Grid, Button, makeStyles, Typography, Box } from "@material-ui/core";
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
  box: {
    position: "absolute",
    bottom: 95,
  },
  btn: {
    background: "#F2C201",
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "14px",
    color: "#fff",
    boxShadow: "none",
    "&:hover": {
      background: "#F2C201",
      boxShadow: "none",
    },
  },
}));

const HotelBook = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" spacing={1}>
      {bookData.map((item, index) => (
        <Grid
          item
          container
          md={3}
          lg={3}
          sm={12}
          xs={12}
          justify="center"
          className={clsx(classes.grid)}
          key={index}
        >
          <Image
            className={classes.media}
            src={item.img}
            title="Room1 image"
            width={250}
            height={300}
          />
          <Box className={clsx(classes.box)}>
            <Button variant="contained" className={clsx(classes.btn)}>
              BOOK NOW
            </Button>
          </Box>

          <Grid container direction="column" justify="center">
            <Box mt={1} mb={1}>
              <Typography variant="h6" align="center">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" align="center">
                <Box fontWeight="fontWeightBold" style={{ color: "#52C5FD" }}>
                  ${item.price}/night
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const bookData = [
  { title: "Double Deluxe Room", img: "/image/room1.jpg", price: 250 },
  { title: "Single Deluxe Room", img: "/image/room2.jpg", price: 200 },
  { title: "Honeymoon suit", img: "/image/room3.jpg", price: 750 },
  { title: "Economic Double", img: "/image/room4.jpg", price: 200 },
];

export default HotelBook;
