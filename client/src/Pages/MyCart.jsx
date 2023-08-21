import { Helmet } from "react-helmet";
import useCart from "../Hook/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://server-risul-islam-tushar.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-11/12">
      <Helmet>
        <title>PHone Traders | Cart</title>
      </Helmet>

      <div className="uppercase font-semibold h-10 grid grid-cols-3 ">
        <h2 className="text-xl mt-2">
          TOTAL ITEMS: <span className="text-indigo-500">{cart.length}</span>
        </h2>
        <h2 className="text-xl mt-2">
          TOTAL PRICE: <span className="text-indigo-500">${total}</span>
        </h2>
        <button className="btn btn-success ms-10 ">PAY</button>
      </div>
      <hr className="my-3" />
      <div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="text-lg font-bold ">
              <tr className="bg-yellow-500 ">
                <th>#</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.model}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-md bg-red-500"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
