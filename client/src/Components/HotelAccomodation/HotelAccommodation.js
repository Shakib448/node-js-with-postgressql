import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  title: {},
}));

const HotelAccommodation = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box pt={8} pb={8}>
        <Grid container justify="center" direction="column">
          <Typography variant="h4" align="center">
            <Box fontWeight="fontWeightBold">Hotel Accommodation</Box>
          </Typography>
          <Typography variant="subtitle1" align="center">
            <Box mt={1} mb={1}>
              We all live in an age that belongs to the young at heart. Life
              that is becoming extremely fast,
            </Box>
          </Typography>
        </Grid>
      </Box>
      <Box pt={8} pb={8}>
        <Grid container justify="center" direction="column">
          <Typography variant="h4" align="center">
            <Box fontWeight="fontWeightBold">Hotel Accommodation</Box>
          </Typography>
          <Typography variant="subtitle1" align="center">
            <Box mt={1} mb={1}>
              We all live in an age that belongs to the young at heart. Life
              that is becoming extremely fast,
            </Box>
          </Typography>
        </Grid>
      </Box>
      <Box pt={8} pb={8}>
        <Grid container justify="center" direction="column">
          <Typography variant="h4" align="center">
            <Box fontWeight="fontWeightBold">Hotel Accommodation</Box>
          </Typography>
          <Typography variant="subtitle1" align="center">
            <Box mt={1} mb={1}>
              We all live in an age that belongs to the young at heart. Life
              that is becoming extremely fast,
            </Box>
          </Typography>
        </Grid>
      </Box>
      <Box pt={8} pb={8}>
        <Grid container justify="center" direction="column">
          <Typography variant="h4" align="center">
            <Box fontWeight="fontWeightBold">Hotel Accommodation</Box>
          </Typography>
          <Typography variant="subtitle1" align="center">
            <Box mt={1} mb={1}>
              We all live in an age that belongs to the young at heart. Life
              that is becoming extremely fast,
            </Box>
          </Typography>
        </Grid>
      </Box>
      <Box pt={8} pb={8}>
        <Grid container justify="center" direction="column">
          <Typography variant="h4" align="center">
            <Box fontWeight="fontWeightBold">Hotel Accommodation</Box>
          </Typography>
          <Typography variant="subtitle1" align="center">
            <Box mt={1} mb={1}>
              We all live in an age that belongs to the young at heart. Life
              that is becoming extremely fast,
            </Box>
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
};

export default HotelAccommodation;
