import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div className='full-item'>
        <div className='full-item__info'>
          <img src={`./img/${this.props.item.img}`} alt={this.props.item.title} onClick={() => this.props.showFullItem(this.props.item)} />
          <span className='close-btn' onClick={this.props.closeModal}>
          </span>
          <div className='item__info'>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}</b>
          </div>
          <div className={`add-to-cart ${this.props.cart.some(item => item.id === this.props.item.id) && 'added'}`} onClick={() => this.props.onAdd(this.props.item)}>
          </div>
        </div>
      </div>
    )
  }
}
