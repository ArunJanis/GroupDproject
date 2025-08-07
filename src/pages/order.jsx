import React from 'react';
import { useNavigate } from 'react-router-dom';
import './order.css';

import { useContext } from 'react';
import UserContext from '../UserContext';

const foodItems = [
  { id: 45, name: "Chutney Rice Bowl", image: "/dishes/rice.png", price: "₹90" },
  { id: 49, name: "Butter Milk Curd Rice", image: "/dishes/curd.png", price: "₹95" },
  { id: 50, name: "Deluxe Thali", image: "/dishes/smbr.png", price: "₹299" },
  { id: 24, name: "Paneer Roti", image: "/dishes/roti.png", price: "₹35" },
  { id: 18, name: "Chana Poori", image: "/dishes/poori.png", price: "₹110" },
  { id: 22, name: "Butter Rice", image: "/dishes/rice.png", price: "₹95" },
  { id: 44, name: "Paneer Stuffed Paratha", image: "/dishes/roti.png", price: "₹120" },
  { id: 21, name: "Jeera Rice", image: "/dishes/rice.png", price: "₹80" },
  { id: 4, name: "Paneer Biryani", image: "/dishes/bryni.png", price: "₹190" },
  { id: 38, name: "Veg Feast Combo", image: "/dishes/bryni.png", price: "₹250" },
  { id: 6, name: "Curd Rice", image: "/dishes/curd.png", price: "₹90" },
  { id: 12, name: "Paneer Dosa", image: "/dishes/dosa.png", price: "₹130" },
  { id: 13, name: "Paper Dosa", image: "/dishes/dosa.png", price: "₹110" },
  { id: 1, name: 'Samosa', image: '/dishes/samosa.png', price: '20' },
  { id: 10, name: "Masala Dosa", image: "/dishes/dosa.png", price: "₹100" },
  { id: 51, name: "Chicken Biryani", image: "/dishes/bryni.png", price: "₹180" },
  { id: 52, name: "Veg Biryani", image: "/dishes/bryni.png", price: "₹160" },
  { id: 46, name: "Tomato Dosa", image: "/dishes/dosa.png", price: "₹100" },
  { id: 47, name: "Pesarattu", image: "/dishes/dosa.png", price: "₹105" },
  { id: 48, name: "Khichdi Bowl", image: "/dishes/rice.png", price: "₹115" },
  { id: 53, name: "Hyderabadi Biryani", image: "/dishes/bryni.png", price: "₹200" },
  { id: 26, name: "Tandoori Roti", image: "/dishes/roti.png", price: "₹25" },
  { id: 29, name: "Mini Sambar Thali", image: "/dishes/smbr.png", price: "₹130" },
  { id: 30, name: "Sambar Bowl", image: "/dishes/smbr.png", price: "₹70" },
  { id: 31, name: "Sambar with Idli", image: "/dishes/smbr.png", price: "₹80" },
  { id: 32, name: "Medu Vada", image: "/dishes/vada.png", price: "₹60" },
  { id: 17, name: "Poori Sabzi", image: "/dishes/poori.png", price: "₹100" },
  { id: 20, name: "Tomato Rice", image: "/dishes/rice.png", price: "₹90" },
  { id: 40, name: "Curd Vada Special", image: "/dishes/curd.png", price: "₹95" },
  { id: 14, name: "Set Dosa", image: "/dishes/dosa.png", price: "₹90" },
  { id: 15, name: "Poori Bhaji", image: "/dishes/poori.png", price: "₹95" },
  { id: 16, name: "Paneer Poori", image: "/dishes/poori.png", price: "₹115" },
  { id: 7, name: "Curd with Pickle", image: "/dishes/curd.png", price: "₹95" },
  { id: 8, name: "Curd Veg Bowl", image: "/dishes/curd.png", price: "₹110" },
  { id: 11, name: "Cheese Dosa", image: "/dishes/dosa.png", price: "₹120" },
  { id: 33, name: "Vada Sambar", image: "/dishes/vada.png", price: "₹75" },
  { id: 34, name: "Vada Combo", image: "/dishes/vada.png", price: "₹90" },
  { id: 35, name: "Crispy Vada", image: "/dishes/vada.png", price: "₹65" },

  // Bonus Combos & Creative Dishes
  { id: 36, name: "Cheese Burst Dosa", image: "/dishes/dosa.png", price: "₹140" },
  { id: 9, name: "Spiced Curd Delight", image: "/dishes/curd.png", price: "₹100" },
  { id: 37, name: "Extra Paneer Rice", image: "/dishes/rice.png", price: "₹120" },
  { id: 39, name: "South Indian Mega Thali", image: "/dishes/smbr.png", price: "₹270" },
  { id: 23, name: "Butter Roti", image: "/dishes/roti.png", price: "₹20" },
  { id: 25, name: "Stuffed Roti", image: "/dishes/roti.png", price: "₹40" },
  { id: 43, name: "Full Meal Tray", image: "/dishes/bryni.png", price: "₹300" },
  { id: 27, name: "Ghee Roti", image: "/dishes/roti.png", price: "₹30" },
  { id: 28, name: "Sambar Rice", image: "/dishes/smbr.png", price: "₹90" },
  { id: 19, name: "Lemon Rice", image: "/dishes/rice.png", price: "₹85" },
  { id: 41, name: "Butter Naan & Curry", image: "/dishes/roti.png", price: "₹140" },
  { id: 5, name: "Spicy Dum Biryani", image: "/dishes/bryni.png", price: "₹210" },
  { id: 42, name: "Idli Dosa Combo", image: "/dishes/dosa.png", price: "₹150" },
];

function order() {
	const { user } = useContext(UserContext);
	const currentUser = (user? user.name : null);
	let cart = [];

	const addToCart = (id) => {
	  if (!currentUser) return alert('Login first!');
	  const food = foodItems.find(f => f.id === id);
	  cart.push(food);
	};

 	const buyAll = () => {
	if (cart.length == 0) return alert ('Add something in cart first!');
	if (!currentUser) return alert('Login first!');
		fetch('http://localhost:3000/buy', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ user: currentUser, cart })
	})

	.then(res => res.text())
	.then(data => {
	alert('Order placed: ' + data);
	cart = [];
	});
	};

    return (
    <>
    	<div className='blankspace'></div>


    	<div className='foodGrid'>
    		{foodItems.map((food) => (
			<div key={food.id} className="item">
				<img src={food.image} alt={food.name} />
				<p id='itemName'>{food.name}</p>
				<p>{food.price}/- Rs</p>
				<button onClick={() => addToCart(food.id)}>Add to Cart</button>
			</div>
		))}
	</div>
	<div className='buyAll'>
		<button onClick={buyAll}>Buy Free</button>
	</div>
    </>
    );
}

export default order;
