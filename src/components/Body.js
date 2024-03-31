import RestaunrantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaunrantList, setRestaunrantList] = useState([]);

  const [unFilteredList, setUnFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const jsonData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const bigData = await jsonData.json();
    const finalData =
      bigData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaunrantList(finalData);
    setUnFilteredList(finalData);
  };

  // if(restaunrantList.length===0){
  //   return <Shimmer/>
  // }

  return restaunrantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="fliter-btns">
          <button
            className="filter-btn"
            onClick={() => {
              // setUnFilteredList(restaunrantList);
              const filteredList = restaunrantList.filter(
                (res) => res.info.avgRating > 4
              );
              setRestaunrantList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="reset-btn"
            onClick={() => {
              setRestaunrantList(unFilteredList);
            }}
          >
            Reset
          </button>
        </div>
        <div className="searchBar">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRest = restaunrantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaunrantList(filteredRest);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {restaunrantList.length === 0 ? (
          <h1>No Restaurants</h1>
        ) : (
          restaunrantList.map((restaurant) => (
            <RestaunrantCard key={restaurant.info.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
