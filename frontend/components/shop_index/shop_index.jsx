import React from 'react';
import { Link } from 'react-router-dom';
import ShopIndexItem from './shop_index_item';

const ShopIndex = (props) => {
  const keys = Object.keys(props.shops);
  return (
    <div id="shop-index-container">
      <div id="shop-index">
        {keys.map((key) => (
          <ShopIndexItem shop={props.shops[key]} key={`shop-${key}`} />
        ))}
      </div>
    </div>    
  )
}

export default ShopIndex
