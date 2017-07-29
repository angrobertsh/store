import React from 'react';
import { Link } from 'react-router-dom';
import ItemIndexItem from './item_index_item';

const ItemIndex = (props) => {
  if(props.shop){
    if(props.shop.items){
      const keys = Object.keys(props.shop.items);
      return (
        <div id="item-index">
          {keys.map((key) => (
            <ItemIndexItem item={props.shop.items[key]} key={`item-${key}`} currentUser={props.currentUser} addItemToCart={props.addItemToCart} />
          ))}
        </div>
      )
    }
  }
  return <div></div>;
}

export default ItemIndex
