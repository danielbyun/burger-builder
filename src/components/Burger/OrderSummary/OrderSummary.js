import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price}</strong>
      </p>
      <p>Do you want to continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
