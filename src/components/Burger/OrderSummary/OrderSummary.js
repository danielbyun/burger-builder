import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

// this could be a functional component, a class component right now to see if it unneccesarily updates / renders
class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[OrderSummary] did update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
          {this.props.ingredients[key]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Do you want to continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
