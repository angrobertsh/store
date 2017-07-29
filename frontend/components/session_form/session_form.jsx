import React from 'react';
import { NavLink } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      store_name: ""
    }
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.props.history.push('/');
    }
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}

  submit(e){
    e.preventDefault();
    if(this.props.location.pathname === "/login"){
      this.props.logIn(this.state);
    } else {
      this.props.signUp(this.state);
    }
  }

  renderErrors(){
    return (
      <ul id="session-errors" className="form-errors">
        {this.props.errors.map((error, idx) => (
          <li className="session-form-error form-error" key={`session-error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }


  render(){
    return (
      <div id="session-form-container">
        <NavLink to="/signup">Sign Up</NavLink> or <NavLink to="/login">Log In</NavLink>
        { this.renderErrors() }
        <form id="session-form" onSubmit={this.submit}>
          { this.props.location.pathname === "/signup" ? <input className="session-input" name="store_name" type="text" value={this.state.store_name} placeholder="Store Name" onChange={this.update} /> : <div></div> }
          <input className="session-input" name="email" type="text" value={this.state.email} placeholder="E-mail Address" onChange={this.update} />
          <input className="session-input" name="password" type="password" value={this.state.password} placeholder="Password" onChange={this.update} />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default SessionForm
