import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Reviews from "../../Component/Reviews";
import Contact from "../../Component/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PHone Traders | Home</title>
      </Helmet>
      <Banner></Banner>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
