import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../../Config";
import { clearItem } from "../../Utils/CartSlice";
import { cart } from "../../assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function clearItemFunc() {
    dispatch(clearItem());
  }

  const totalSum = cartItems.reduce(
    (accumulator, item) => accumulator + (item?.card?.info?.price || 250) / 100,
    0
  );

  return (
    <div className="container mx-auto py-8">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={cart} alt="Cart" className="w-48 h-48 mb-4" />
          <Link to="/">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
              Explore Food Items
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-6">
            Cart ({cartItems.length})
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item) => (
              <div
                key={item?.card?.info?.id}
                className="bg-white rounded-lg shadow-lg"
              >
                <img
                  src={
                    item?.card?.info?.imageId
                      ? IMG_CDN + item?.card?.info?.imageId
                      : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                  }
                  alt=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {item?.card?.info?.name}
                  </h3>
                  <p className="text-gray-600">
                    {item?.card?.info?.description}
                  </p>
                  <p className="text-orange-500 text-lg mt-2">
                    &#8377;
                    {!item?.card?.info?.price
                      ? "250"
                      : item?.card?.info?.price / 100}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <button
              className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600"
              onClick={() => clearItemFunc()}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex justify-end mt-8">
            <div className="text-right">
              <h3 className="text-xl font-semibold">Total:</h3>
              <p className="text-3xl text-orange-500">
                &#8377;{totalSum.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
