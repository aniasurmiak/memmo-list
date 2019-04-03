import React, { Component } from 'react'
import './ItemsList.css'

export default class ItemsList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(
          item => (
            <li key={item.id}>{item.text}</li>
          )
        )}
      </ul>
    )
  }
}

