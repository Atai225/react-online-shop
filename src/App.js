import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Furnitures from "./components/Furnitures";
import Categories from "./components/Categories";
import Modal from "./components/Modal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      currentFurnitures: [],
      furnitures: [
        {
          id: 1,
          title: "Серый стул",
          img: "chair-grey.jpeg",
          desc: "Серый стул в современном стиле, наполненный пухом",
          category: "chairs",
          price: "49.99$",
        },
        {
          id: 2,
          title: "Кожаный диван",
          img: "leather-sofa.jpeg",
          desc: "Просторный кожаный диван с мягкими подушками",
          category: "sofas",
          price: "599.99$",
        },
        {
          id: 3,
          title: "Стол обеденный",
          img: "dining-table.jpeg",
          desc: "Деревянный обеденный стол с местом для 6 человек",
          category: "tables",
          price: "299.99$",
        },
        {
          id: 4,
          title: "Шкаф для одежды",
          img: "wardrobe.jpg",
          desc: "Просторный шкаф для одежды с вешалками и полками",
          category: "storage",
          price: "399.99$",
        },
        {
          id: 5,
          title: "Компьютерный стол",
          img: "computer-desk.jpg",
          desc: "Удобный компьютерный стол с выдвижной клавиатурной полкой",
          category: "tables",
          price: "149.99$",
        },
        {
          id: 6,
          title: "Книжная полка",
          img: "bookshelf.jpg",
          desc: "Многоуровневая книжная полка для хранения и декора",
          category: "storage",
          price: "79.99$",
        },
        {
          id: 7,
          title: "Кресло-качалка",
          img: "rocking-chair.jpg",
          desc: "Удобное кресло-качалка с подушкой и подлокотниками",
          category: "chairs",
          price: "129.99$",
        },
        {
          id: 8,
          title: "Кухонный стул",
          img: "kitchen-chair.jpg",
          desc: "Высокий кухонный стул со спинкой и подножкой",
          category: "chairs",
          price: "39.99$",
        },
        {
          id: 9,
          title: "Комод",
          img: "dresser.jpg",
          desc: "Просторный комод с несколькими ящиками для хранения",
          category: "storage",
          price: "199.99$",
        },
      ],
      modalOn: false,
      fullItem: {}
    };
    this.state.currentFurnitures = this.state.furnitures
    this.addToCart = this.addToCart.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.showFullItem = this.showFullItem.bind(this)
  }

  addToCart(item) {
    const isInCart = this.state.cart.filter(cart => cart.id === item.id);
    if (isInCart.length === 0) {
      this.setState({ cart: [...this.state.cart, item] })
    }
  }

  deleteFromCart(id) {
    this.setState({ cart: this.state.cart.filter(item => item.id !== id) })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentFurnitures: this.state.furnitures });
      return;

    }
    this.setState({ currentFurnitures: this.state.furnitures.filter(item => item.category === category) })
  }

  showFullItem(item){
    this.setState({fullItem: item});
    this.setState({modalOn: true});
  }

  render() {
    return (
      <div className="wrapper">
        <Header cart={this.state.cart} onDelete={this.deleteFromCart} />
        <Categories chooseCategory={this.chooseCategory} />
        <Furnitures showFullItem={this.showFullItem} cart={this.state.cart} furnitures={this.state.currentFurnitures} onAdd={this.addToCart} />
        {this.state.modalOn && <Modal closeModal={() => this.setState({modalOn: false})} showFullItem={this.showFullItem} item={this.state.fullItem} cart={this.state.cart} onAdd={this.addToCart}/>}
        <Footer />
      </div>
    );
  }


}
