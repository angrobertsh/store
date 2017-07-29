import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="greeting-auth-container">
    <span className="greeting-el"><Link to="/login">Merchant Log In</Link></span>
    <span className="greeting-el"><Link to="/signup">Create a New Store</Link></span>
  </nav>
);

const personalGreeting = (currentUser, logOut) => (
  <nav className="greeting-auth-container">
    <span className="greeting-el">Welcome, <Link to={`/merchant/${currentUser.id}/myStore`}>{currentUser.store_name}</Link></span>
    <span className="greeting-el" onClick={logOut}>Log Out</span>
  </nav>
);

const Greeting = ({currentUser, logOut}) => (
  currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
);

export default Greeting;
