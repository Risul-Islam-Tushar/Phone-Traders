import { Link } from "react-router-dom";
import coverImg from "../../assets/Cover.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src={coverImg} alt="cover img" />
        <div className="p-4 md:absolute rounded-xl left-8 top-64 ">
          <h1 className="text-5xl font-extrabold uppercase">
            Welcome to our<br></br>
            phone Traders
          </h1>
          <h4 className="mt-2">
            where the latest phones and most reliable customer service come
            together!
          </h4>
          <Link
            to="/shop"
            className="btn btn-outline border-0 border-b-4 mt-4 text-lg"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
