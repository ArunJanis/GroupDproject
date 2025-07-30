import React, { useState } from 'react';
import './FeaturedDishes.css';

const foodItems = [
  // Biryani Variants
  { id: 1, name: "Chicken Biryani", image: "/dishes/bryni.png", price: "₹180" },
  { id: 2, name: "Veg Biryani", image: "/dishes/bryni.png", price: "₹160" },
  { id: 3, name: "Hyderabadi Biryani", image: "/dishes/bryni.png", price: "₹200" },
  { id: 4, name: "Paneer Biryani", image: "/dishes/bryni.png", price: "₹190" },
  { id: 5, name: "Spicy Dum Biryani", image: "/dishes/bryni.png", price: "₹210" },

  // Curd Variants
  { id: 6, name: "Curd Rice", image: "/dishes/curd.png", price: "₹90" },
  { id: 7, name: "Curd with Pickle", image: "/dishes/curd.png", price: "₹95" },
  { id: 8, name: "Curd Veg Bowl", image: "/dishes/curd.png", price: "₹110" },
  { id: 9, name: "Spiced Curd Delight", image: "/dishes/curd.png", price: "₹100" },

  // Dosa Variants
  { id: 10, name: "Masala Dosa", image: "/dishes/dosa.png", price: "₹100" },
  { id: 11, name: "Cheese Dosa", image: "/dishes/dosa.png", price: "₹120" },
  { id: 12, name: "Paneer Dosa", image: "/dishes/dosa.png", price: "₹130" },
  { id: 13, name: "Paper Dosa", image: "/dishes/dosa.png", price: "₹110" },
  { id: 14, name: "Set Dosa", image: "/dishes/dosa.png", price: "₹90" },

  // Poori Variants
  { id: 15, name: "Poori Bhaji", image: "/dishes/poori.png", price: "₹95" },
  { id: 16, name: "Paneer Poori", image: "/dishes/poori.png", price: "₹115" },
  { id: 17, name: "Poori Sabzi", image: "/dishes/poori.png", price: "₹100" },
  { id: 18, name: "Chana Poori", image: "/dishes/poori.png", price: "₹110" },

  // Rice Variants
  { id: 19, name: "Lemon Rice", image: "/dishes/rice.png", price: "₹85" },
  { id: 20, name: "Tomato Rice", image: "/dishes/rice.png", price: "₹90" },
  { id: 21, name: "Jeera Rice", image: "/dishes/rice.png", price: "₹80" },
  { id: 22, name: "Butter Rice", image: "/dishes/rice.png", price: "₹95" },

  // Roti Variants
  { id: 23, name: "Butter Roti", image: "/dishes/roti.png", price: "₹20" },
  { id: 24, name: "Paneer Roti", image: "/dishes/roti.png", price: "₹35" },
  { id: 25, name: "Stuffed Roti", image: "/dishes/roti.png", price: "₹40" },
  { id: 26, name: "Tandoori Roti", image: "/dishes/roti.png", price: "₹25" },
  { id: 27, name: "Ghee Roti", image: "/dishes/roti.png", price: "₹30" },

  // Sambar Variants
  { id: 28, name: "Sambar Rice", image: "/dishes/smbr.png", price: "₹90" },
  { id: 29, name: "Mini Sambar Thali", image: "/dishes/smbr.png", price: "₹130" },
  { id: 30, name: "Sambar Bowl", image: "/dishes/smbr.png", price: "₹70" },
  { id: 31, name: "Sambar with Idli", image: "/dishes/smbr.png", price: "₹80" },

  // Vada Variants
  { id: 32, name: "Medu Vada", image: "/dishes/vada.png", price: "₹60" },
  { id: 33, name: "Vada Sambar", image: "/dishes/vada.png", price: "₹75" },
  { id: 34, name: "Vada Combo", image: "/dishes/vada.png", price: "₹90" },
  { id: 35, name: "Crispy Vada", image: "/dishes/vada.png", price: "₹65" },

  // Bonus Combos & Creative Dishes
  { id: 36, name: "Cheese Burst Dosa", image: "/dishes/dosa.png", price: "₹140" },
  { id: 37, name: "Extra Paneer Rice", image: "/dishes/rice.png", price: "₹120" },
  { id: 38, name: "Veg Feast Combo", image: "/dishes/bryni.png", price: "₹250" },
  { id: 39, name: "South Indian Mega Thali", image: "/dishes/smbr.png", price: "₹270" },
  { id: 40, name: "Curd Vada Special", image: "/dishes/curd.png", price: "₹95" },
  { id: 41, name: "Butter Naan & Curry", image: "/dishes/roti.png", price: "₹140" },
  { id: 42, name: "Idli Dosa Combo", image: "/dishes/dosa.png", price: "₹150" },
  { id: 43, name: "Full Meal Tray", image: "/dishes/bryni.png", price: "₹300" },
  { id: 44, name: "Paneer Stuffed Paratha", image: "/dishes/roti.png", price: "₹120" },
  { id: 45, name: "Chutney Rice Bowl", image: "/dishes/rice.png", price: "₹90" },
  { id: 46, name: "Tomato Dosa", image: "/dishes/dosa.png", price: "₹100" },
  { id: 47, name: "Pesarattu", image: "/dishes/dosa.png", price: "₹105" },
  { id: 48, name: "Khichdi Bowl", image: "/dishes/rice.png", price: "₹115" },
  { id: 49, name: "Butter Milk Curd Rice", image: "/dishes/curd.png", price: "₹95" },
  { id: 50, name: "Deluxe Thali", image: "/dishes/smbr.png", price: "₹299" },
];

function FeaturedDishes() {
  const [orderedItem, setOrderedItem] = useState(null);

  return (
    <section className="featured-dishes">
      <h2>Today's Menu</h2>
      <div className="dish-grid">
        {foodItems.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
            <button className="btn primary" onClick={() => setOrderedItem(dish.name)}>
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
