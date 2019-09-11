import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = e => {
    e.preventDefault();
    console.log(this.props.ingredients);
    this.setState({
      loading: true
    });

    // firebase specific
    const order = {
      ingredients: this.props.ingredients,
      // not recommended for production code
      price: this.state.totalPrice,
      customer: {
        name: "Max ehs'german",
        address: {
          street: "Teststreet",
          state: "NY",
          zipCode: "11752",
          country: "United STates"
        },
        email: "test@test.com"
      },
      deliveryMethod: "premium"
    };
    axios
      .post(`/orders.json`, order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Info!</h4>
        <form>
          <input
            className="Input"
            type="text"
            name="name"
            placeholder="your name"
          />
          <input
            className="Input"
            type="email"
            name="email"
            placeholder="your email"
          />
          <input
            className="Input"
            type="text"
            name="street"
            placeholder="street"
          />
          <input
            className="Input"
            type="text"
            name="postalCode"
            placeholder="postal code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
