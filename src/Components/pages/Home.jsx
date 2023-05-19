import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { filterData } from "../Utils/Helper";
import Restuarantcard from "../Restuarantcard";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);
  async function getAllRestaurants() {
    const data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return null;
  {
    /*hero*/
  }
  {
    /*body part*/
  }

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center justify-center">
      <Restuarantcard />
    </div>
  );
};

export default Home;
