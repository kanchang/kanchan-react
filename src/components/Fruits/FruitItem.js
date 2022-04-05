import { Fragment } from "react";
import "./FruitItem.css";
import "../../components/Cart/AddToCartButton.css";
import AddToCartButton from "../../components/Cart/AddToCartButton";

const FruitItem = (props) => {
  return (
    <Fragment>
      <li class="product-item">
        <span>
          <img class="fruit-image" src={props.image} alt="" />
        </span>
        <span class="product-list-detail">
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
        </span>
        <span>${props.price}</span>
        <AddToCartButton />
      </li>
    </Fragment>
  );
};

export default FruitItem;
