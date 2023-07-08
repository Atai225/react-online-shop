import React, { Component } from 'react'

export default class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                }, 
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'storage',
                    name: 'Шкафы'
                },
                {
                    key: 'sofas',
                    name: 'Диваны'
                },
            ],
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(item => (
            <div key={item.key} onClick={() => this.props.chooseCategory(item.key)}>
                {item.name}
            </div>
        ))}
      </div>
    )
  }
}
