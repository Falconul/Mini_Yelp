import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";

export default function AllRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const response = await fetch(
        "https://yelpapi-bkck.onrender.com/api/restaurant"
      );
      setRestaurants(await response.json());
    }
    doFetch();
  }, []);

  return (
    <div>
      <h1>All Restaurants</h1>

      <ul className="grid grid-cols-4 gap-4 m-2">
        {restaurants.map((restaurant) => {
          return (
            <li key={restaurant._id} >
              <RestaurantCard
                imageSrc={restaurant.image}
                restaurantName={restaurant.name}
                rating={restaurant.rating}
                restaurantCity={restaurant.city}
                reviews={restaurant.reviews}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
