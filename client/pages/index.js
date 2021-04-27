import Layout from "../src/Components/Layout/Layout";
import Banner from "../src/Components/Common/Banner/Banner";
import HotelAccommodation from "../src/Components/HotelAccomodation/HotelAccommodation";

const Home = () => {
  return (
    <Layout title="Welcome to Royal">
      <Banner />
      <HotelAccommodation />
    </Layout>
  );
};

export default Home;
