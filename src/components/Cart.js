import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Cart extends Component {
    render() {
        return (
            <div className="cart__item">
                <img src={`./img/${this.props.cartItem.img}`} alt={this.props.cartItem.title} />
                <div className="item__info">
                    <h2>{this.props.cartItem.title}</h2>
                    <b>{this.props.cartItem.price}</b>
                </div>
                <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.cartItem.id)} />
            </div>
        );
    }
}

export default Cart;
