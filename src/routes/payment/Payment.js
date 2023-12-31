import React from "react";
import EmptyCart from "../cart/EmptyCart.js";

import CheckoutPayment from "./CheckoutPayment";
export default class Payment extends React.Component {
  render() {
    const { cartItems, totalPayment, taxes} = this.props;
    return (
      <React.Fragment>
        {cartItems.length === 0 ? <EmptyCart /> : <CheckoutPayment totalPayment={totalPayment} taxes={taxes}/>}
      </React.Fragment>
    );
  }
}
