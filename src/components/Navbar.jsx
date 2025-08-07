import { useContext } from 'react';
import UserContext from '../UserContext';

import { Link } from "react-router-dom";
import softbitelogo from "../assets/softbite-logo.png";
import "./Navbar.css";

function NavBar() {
  const { user } = useContext(UserContext);

  return (
    	<div className='bar'>
		<a href="#" className='logo'>
			<img src={softbitelogo} />
			<p>SOFTBITE</p>
		</a>
		<div className='links'>
			<Link to="/">Home</Link>
			<Link to="/order">Order</Link>
			<Link to="/about">AboutUs</Link>
		</div>

			<Link className="help" to="/login"> {user? `Welcome ${user.name}`:"Login/Register"}</Link>
	</div>
  );
}

export default NavBar;

