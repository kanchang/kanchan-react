import React from "react";
import { useEffect } from "react";
import "./AvailableFruit.css";
import FruitItem from "../../components/Fruits/FruitItem";

const DUMMY_FRUITS = [
  {
    id: "F1",
    img: "../../assets/apple.png",
    name: "Apple",
    description: "Eat one apple every day to keep the doctor away",
    price: 12,
  },
  {
    id: "F2",
    img: "../../assets/grapes.png",
    name: "Grapes",
    description: "Apple is great, but grapes are even better",
    price: 18,
  },
  {
    id: "F3",
    img: "../../assets/mango.png",
    name: "Mango",
    description: "The king of all fruit",
    price: 10,
  },
  {
    id: "F4",
    img: "../../assets/pineapple.png",
    name: "PineApple",
    description: "No pine, no apple, just a whole lot of pineapple.",
    price: 10,
  },
  {
    id: "F5",
    img: "../../assets/orange.png",
    name: "Orange",
    description: "Orange fruit is always good.",
    price: 12,
  },
];

const FruitList = DUMMY_FRUITS.map((fruit) => (
  <FruitItem
    key={fruit.id}
    image={fruit.img}
    name={fruit.name}
    description={fruit.description}
    price={fruit.price}
  />
));

const AvailableFruit = (props) => {
  return (
    <div class="products-container">
      <div class="products-list">
        <ul>{FruitList}</ul>
      </div>
    </div>
  );
};

export default AvailableFruit;
