/* eslint-disable react/prop-types */

const MobileCard = ({ item }) => {
  const { price, image, model, storage } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{model}</h2>
          <p>Storage:{storage}GB</p>
          <p>
            Price:<span className="font-bold text-lime-800">{price}$</span>{" "}
          </p>

          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-lg">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
