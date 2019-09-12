import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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

  test = e => {
    e.preventDefault();
    console.log("test");
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
      price: this.state.price,
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

    console.log(order);

    axios
      .post(`/orders.json`, order)
      .then(response => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="your name"
        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="your email"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postalCode"
          placeholder="postal code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Info!</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
