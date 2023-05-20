import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import axios from "axios";

// import { filterData } from "../Utils/Helper";
import Restuarantcard from "../Restuarantcard";

const Home = ({ user }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRes, setFilteredRes] = useState([]);
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

      console.log(allRestaurants);
    } catch (error) {
      console.error(error);
    }
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
    <div className="flex flex-wrap items-center py-4 justify-center gap-4">
      {filteredRes?.length == 0 ? (
        <Shimmer />
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
  );
};

export default Home;
