import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      state: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "State"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zipcode"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          option: [
            {
              value: "premium",
              displayValue: "fastest"
            },
            { value: "gold", displayValue: "fast" },
            { value: "economoy", displayValue: "cheapest" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  test = e => {
    e.preventDefault();
    console.log("test");
  };

  orderHandler = e => {
    // to not submit and refresh the page
    e.preventDefault();

    this.setState({
      loading: true
    });

    // transforming object
    const formData = {};
    // creating key/value pairs
    for (let formElementIdentifier in this.state.orderForm) {
      // key (email, name, etc) = value the user entered
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    // firebase specific
    const order = {
      ingredients: this.props.ingredients,
      // not recommended for production code
      price: this.state.price,
      orderData: formData
    };

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

  checkValidity(value, rules) {
    let isValid = false;

    if (rules.required) {
      // update true or false depending on the check value if it is not equal to empty string
      isValid = value.trim() !== " " && isValid;
    }

    if (rules.minLength) {
      // expect value to be 1, 2, 3...so on
      isValid = value.length >= rules.minLength && isValid;
    } else if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    // cloning deeply
    const updatedOrderForm = {
      ...this.state.orderForm
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;

    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    console.log(updatedFormElement);

    this.setState({
      orderForm: updatedOrderForm
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success">ORDER</Button>
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
