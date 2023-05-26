import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "../header/Slider";
import Restuarantcard from "../Restuarantcard";
import { filterData } from "../../Utils/Helper";

const Home = ({ user }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    try {
      const response = await axios.get(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
      );

      const json = response.data;

      const allRestaurants = json?.data?.cards[2]?.data?.data?.cards;

      setAllRestaurants(allRestaurants);
      setFilteredRes(allRestaurants);
      setIsLoading(false);

      console.log(allRestaurants);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setFilteredRes(allRestaurants);
    }
  };

  const handleSearchSubmit = () => {
    const fData = filterData(searchText, allRestaurants);
    setFilteredRes(fData);
  };

  if (isLoading) {
    return (
      <>
        <Slider loading={isLoading} />
        <Shimmer />
      </>
    );
  }

  return (
    <>
      <Slider loading={isLoading} />
      <div className="text-sm flex gap-2 my-4 justify-center">
        <input
          type="text"
          placeholder="Search for a restaurant"
          className="w-64 text-xs border border-gray-300 focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button
          className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white"
          onClick={handleSearchSubmit}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap items-center py-4 justify-center gap-4">
        {filteredRes?.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          filteredRes?.map((item) => {
            return (
              <Link to={"/restaurant/" + item.data.id} key={item?.data?.id}>
                <Restuarantcard {...item?.data} user={user} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
