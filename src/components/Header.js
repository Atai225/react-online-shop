import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import Cart from "./Cart";

const showCart = (props) => {
  let sum = 0;
  props.cart.forEach(item => sum += Number.parseFloat(item.price))
  return (
    <div>
      {props.cart.map((item) => (
        <Cart key={item.id} cartItem={item} onDelete={props.onDelete} />
      ))}
      <p className="sum">Всего: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};

const cartIsEmpty = () => {
  return <div className="empty"><h4>Корзина пустая</h4></div>
}

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar">
        <span className="logo">AtaiHome</span>
        <ul className="nav">
          <BsCartFill
            className={`cart-button ${cartOpen && "active"}`}
            onClick={() => setCartOpen(!cartOpen)}
          />
          <li className="nav__link">О нас</li>
          <li className="nav__link">Контакты</li>
          <li className="nav__link">Кабинет</li>
        </ul>

        {cartOpen && (
          <div className="cart">
            {props.cart.length > 0 ? showCart(props) : cartIsEmpty()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
