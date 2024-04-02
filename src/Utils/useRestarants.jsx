import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([1]);

  useEffect(() => {
    getRestaurants();
  }, []);
  console.log(process.env.RESTAURANTS_URL);
  async function getRestaurants() {
    const data = await fetch(process.env.RESTAURANTS_URL);
    const json = await data.json();
    setFilteredRestaurant(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurant,
  };
};

export default useRestaurants;
