import React, { Component, Fragment } from "react";
import CartItem from "./CartItem";

class CartList extends Component {
  render() {
    const {cart} = this.props.value;
    return (
      <div className="container-fluid">
        {cart.map(item=>{
          return <CartItem key={item.id} item={item} value={this.props.value}/>
        })}   
      </div>
    )
  }
}

export default CartList;