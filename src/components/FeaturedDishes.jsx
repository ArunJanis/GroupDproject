import React, { useState } from 'react';
import './FeaturedDishes.css';

const foodItems = [
  { id: 1, name: "Paneer Butter Masala", image: "/dishes/paneer.jpg", price: "₹150" },
  { id: 2, name: "Chicken Biryani", image: "/dishes/biryani.jpg", price: "₹180" },
  { id: 3, name: "Masala Dosa", image: "/dishes/dosa.jpg", price: "₹100" },
  { id: 4, name: "Chole Bhature", image: "/dishes/chole.jpg", price: "₹120" },
  { id: 5, name: "Rajma Chawal", image: "/dishes/rajma.jpg", price: "₹110" },
  { id: 6, name: "Tandoori Chicken", image: "/dishes/tandoori.jpg", price: "₹200" },
  { id: 7, name: "Aloo Paratha", image: "/dishes/paratha.jpg", price: "₹90" },
  { id: 8, name: "Fish Curry", image: "/dishes/fish.jpg", price: "₹210" },
  { id: 9, name: "Veg Thali", image: "/dishes/thali.jpg", price: "₹160" },
  { id: 10, name: "Butter Naan & Curry", image: "/dishes/naan.jpg", price: "₹130" },
];

function FeaturedDishes() {
  const [orderedItem, setOrderedItem] = useState(null);

  return (
    <section className="featured-dishes">
      <h2>Featured Dishes</h2>
      <div className="dish-grid">
        {foodItems.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
            <button
              className="btn primary"
              onClick={() => setOrderedItem(dish.name)}
            >
              Order Me Now
            </button>
          </div>
        ))}
      </div>
      {orderedItem && (
        <div style={{ marginTop: "2rem", color: "#2f4723", fontWeight: "bold" }}>
          ✅ You just ordered: <span style={{ color: "green" }}>{orderedItem}</span>
        </div>
      )}
    </section>
  );
}

export default FeaturedDishes;
