import React from "react";
import { IMG_CDN } from "../Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines = [],
  slaString,
  costForTwoString,
  avgRating,
  offerPercentage,
}) => {
  return (
    <div className="md:w-64 md:h-80 shadow-md md:shadow-none py-4 px-4 md:py-2 hover:shadow-lg rounded flex flex-col gap-1 text-sm text-[#535665] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="relative">
        <img
          src={
            IMG_CDN +
            (cloudinaryImageId === ""
              ? "s6fhwzl0tss0vgrqvcid"
              : cloudinaryImageId)
          }
          alt=""
          className="rounded object-cover w-full h-44"
        />
        <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-1 rounded">
          <FontAwesomeIcon
            icon={faPercentage}
            className="text-[#a0522d] mr-1"
          />
          <span className="text-[#a0522d]">
            {offerPercentage
              ? `${offerPercentage}% off | Use TRYNEW`
              : "40% off | Use TRYNEW"}
          </span>
        </div>
      </div>
      <span className="font-medium text-base text-black">{name}</span>
      <span className="text-sm">{cuisines.join(", ")}</span>
      <div className="flex justify-between items-center my-2 font-medium">
        <div className="flex items-center gap-1 px-1 text-white bg-green-500 font-semibold">
          <i className="fa-solid fa-star text-[0.6rem]"></i>
          <span className="text-[0.6rem]">
            {avgRating === "--" ? "4.2" : avgRating}
          </span>
        </div>
        <div className="w-3 h-3 rounded-full bg-black"></div>
        <span>{slaString}</span>
        <div className="w-3 h-3 rounded-full bg-black"></div>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
