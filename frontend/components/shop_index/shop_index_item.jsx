import React from 'react';
import { NavLink } from 'react-router-dom';

const ShopIndexItem = (props) => (
  <div className="shop-container">
    <NavLink to={`merchant/${props.shop.id}`}>
      <div className="shop-name">
        {props.shop.store_name}
      </div>
    </NavLink>
  </div>
)

export default ShopIndexItem;
