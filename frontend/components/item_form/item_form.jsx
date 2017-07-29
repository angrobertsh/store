import React from 'react';

// Maybe use match params instead of checking on props.item

class ItemForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.item ?
      {
        name: this.props.item.name,
        description: this.props.item.description,
        price: this.props.item.price,
        url: this.props.item.url,
        current_amount: this.props.item.current_amount,
        active: this.props.item.active,
        merchant_id: this.props.match.params.merchantId
      }
      :
      {
        name: "",
        description: "",
        price: "",
        url: "",
        current_amount: "",
        active: true,
        merchant_id: this.props.match.params.merchantId
      };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.item){
      this.setState(nextProps.item);
    }
  }

  update(e){
    e.currentTarget.type === "checkbox" ?
      this.setState({[e.currentTarget.name]: e.currentTarget.checked})
      :
      this.setState({[e.currentTarget.name]: e.currentTarget.value});
	}

  submit(e){
    e.preventDefault();
    if(this.props.item){
      this.props.editItem(this.state);
    } else {
      this.props.addNewItem(this.state);
    }
  }

  renderErrors(){
    return (
      <ul id="merchant-errors" className="form-errors">
        {this.props.errors.map((error, idx) => (
          <li className="merchant-form-error form-error" key={`merchant-error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.item) {
      this.setState(nextProps.item)
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.match.params.itemId === "new" && prevProps.match.params.itemId !== "new"){
      this.setState({
              name: "",
              description: "",
              price: "",
              url: "",
              current_amount: "",
              active: true,
              merchant_id: this.props.match.params.merchantId
            });
    } else if(prevProps.itemsLength !== this.props.itemsLength) {
      this.props.history.push(`/merchant/${this.state.merchant_id}`);
    }
  }

  render(){
    return (
      <div id="item-form-container">
        { this.renderErrors() }
        <form id="item-form" onSubmit={this.submit}>
          <input type="text" name="name" onChange={this.update} value={this.state.name} placeholder="Item Name" />
          <input type="text" name="description" onChange={this.update} value={this.state.description} placeholder="Item Description" />
          <input type="text" name="price" onChange={this.update} value={this.state.price} placeholder="Price Per Unit" />
          <input type="text" name="url" onChange={this.update} value={this.state.url} placeholder="Image URL" />
          <input type="text" name="current_amount" onChange={this.update} value={this.state.current_amount} placeholder="Units Available" />
          <label>Currently for sale? <input type="checkbox" onChange={this.update} name="active" checked={this.state.active}/></label>
          <input className="submit-button" type="submit" value="Submit" />
          { this.props.item ? <div id="item-form-delete-button button" onClick={(e) => (this.props.deleteItem(this.props.item))}>Delete Item</div> : <div></div> }
        </form>
      </div>
    )
  }
}

export default ItemForm;
