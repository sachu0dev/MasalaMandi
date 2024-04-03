import { useEffect, useState } from "react";

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([1]);

  function getCards(json) {
    const restaurants = json.data.cards.filter((item) => {
      return (
        item.card.card.gridElements?.infoWithStyle?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      );
    });
    return restaurants[0].card.card.gridElements.infoWithStyle.restaurants;
  }

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(process.env.RESTAURANTS_URL);
    const json = await data.json();
    const restaurants = getCards(json);
    setAllRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  }
  return {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurant,
  };
};

export default useRestaurants;
