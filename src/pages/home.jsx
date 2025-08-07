import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import heroimage from '../assets/hero-background.png';
import deliveryguy from '../assets/delivery-guy.png';
import clock from '../assets/clock.png';
import freshfood from '../assets/fresh-food.png';
import './home.css';
import About from "./about.jsx";

//import { useContext } from 'react';
//import UserContext from '../UserContext';
import { Link } from "react-router-dom";


function Home() {

  return (
    <>

    	<div className='hero'>
		<p>Order Delicious food at home, without drying your wallet.</p>
    		<img src={heroimage} alt="food on table" />
    	</div>

	<div className='dashboard'>
		<p><h2>100+</h2>Food varieties</p>
		<p><h2>1M+</h2>Items Delivered</p>
		<p><h2>20+</h2>Delivered Cities</p>
	</div>

	<div className='left-content'>
		<img src={deliveryguy}/>
		<div id='about-content'>
			<h2>Fresh Food, Everytime!</h2>
			<p>Every box is packed with freshly prepared meals using high-quality ingredients. Taste the difference in every bite — no compromises, ever.</p>
		</div>
	</div>
	<div className='right-content'>
		<div id='about-content'>
			<h2>Fast-delivery, Everytime!</h2>
			<p>Hungry? We’ve got you. Our lightning-fast delivery ensures your food arrives hot and on time — faster than you can say "Flash All Might"!</p>
		</div>
		<img src={clock} width="400px"/>
	</div>
	<div className='left-content'>
		<img src={freshfood} width="300px"/>
		<div id='about-content'>
			<h2>Delicious Food, Low Prices!</h2>
			<p>Great taste shouldn’t break the bank. Enjoy fresh, satisfying meals at pocket-friendly prices — perfect for students, families, and foodies on a budget.</p>
		</div>
	</div>

	<div className='ordernow'>
		<p>Why wait? Just Order.</p>
		<Link to='/order'>Order Now!</Link>
	</div>

    </>
  );
}

export default Home;
