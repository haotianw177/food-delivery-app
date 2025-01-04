import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {/*             get data from food list arrary above and map it on this food item component below
         */}{" "}
        {food_list.map((item, index) => {
          /*                 return one component that take the food data display that in a card (use food item component).
                    pass the raw data using props, but not designing the food item
 */
          {
            console.log(category, item.category);
          }
          if (category === "ALL" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
