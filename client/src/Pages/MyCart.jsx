import { Helmet } from "react-helmet";
import useCart from "../Hook/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>PHone Traders | Cart</title>
      </Helmet>

      <div className="uppercase font-semibold h-10 grid grid-cols-3">
        <h2 className="text-xl mt-2">
          TOTAL ITEMS: <span className="text-indigo-500">{cart.length}</span>
        </h2>
        <h2 className="text-xl mt-2">
          TOTAL PRICE: <span className="text-indigo-500">${total}</span>
        </h2>
        <button className="btn btn-success ms-10 ">PAY</button>
      </div>
      <hr className="my-3" />
    </div>
  );
};

export default MyCart;
