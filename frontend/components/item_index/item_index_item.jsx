import React from 'react';
import { Link } from 'react-router-dom';

const makeDollars = (num) => (
  ("$" + (parseFloat(Math.round(parseInt(num) * 100) / 100).toFixed(2)).toString())
)

class ItemIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item_id: this.props.item.id,
      name: this.props.item.name,
      item_amount: 0
    }
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.itemInteraction = this.itemInteraction.bind(this);
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  submit(e){
    e.preventDefault();
    // maybe some sort of sanitizing here
    this.props.addItemToCart(this.state);
  }

  itemInteraction(){
    if(this.props.currentUser){
      if(this.props.currentUser.id === this.props.item.merchant_id){
        return (<div className="item-edit"><Link to={`/merchant/${this.props.item.merchant_id}/items/${this.props.item.id}`}>Edit Item</Link></div>)
      }
    }
    return (
      <form className="add-item-to-cart" onSubmit={this.submit}>
        <input type="text" name="item_amount" onChange={this.update} placeholder="Amount"/>
        <input type="submit" value={`Add Item${this.state.item_amount > 1 ? "s" : ""} To Cart`} className="add-item-to-cart-submit submit" />
      </form>
    )
  }

  render(){
    const item = this.props.item;
    return (
      <div className="item-container">
        <div className="item-opacity-overlay clear">
          <div className="item-properties">
            <div className="item-picture">
              <img src={item.url} />
            </div>
            <div className="item-name">
              {item.name}
            </div>
            <div className="item-description">
              {item.description}
            </div>
          </div>
          <div className="item-pricing">
            <div className="item-amount">
              Current Stock: {item.current_amount}
            </div>
            <div className="item-price">
              Price Per Unit: {makeDollars(item.price)}
            </div>
          </div>
          <div className="item-interaction">
            { this.itemInteraction() }
          </div>
        </div>
      </div>
    )
  }

}

export default ItemIndexItem;
