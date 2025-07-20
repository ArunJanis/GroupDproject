import './FeaturedDishes.css';

const dishes = [
  { name: "Cooked Rice", image: "./dishes/rice.png" },
  { name: "Sambhar", image: "/dishes/smbr.png" },
  { name: "Curd Rice", image: "/dishes/curd.png" },
  { name: "Dosa", image: "/dishes/dosa.png" },
  { name: "Poori", image: "/dishes/poori.png" },
  { name: "Vada", image: "/dishes/vada.png" },
  { name: "Chapati", image: "/dishes/roti.png" },
  { name: "Biriyani", image: "/dishes/bryni.png" },
];

function FeaturedDishes() {
  return (
    <div className='slider'>
    <div className="infinite-slider">
      <div className="slider-track">
        {dishes.concat(dishes).map((dish, index) => (
          <div className="slider-item" key={index}>
            <img src={dish.image} alt={dish.name} />
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FeaturedDishes;
