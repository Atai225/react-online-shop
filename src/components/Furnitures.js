import React, { Component } from "react";
import Item from "./Item";

export default class Furnitures extends Component {
  render() {
    return (
      <main>
        {this.props.furnitures.map((item) => (
          <Item showFullItem={this.props.showFullItem} key={item.id} cart={this.props.cart} item={item} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}
