import './Home.css';
import FeaturedDishes from '../components/FeaturedDishes';

function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
            <h2 className="fade-in-down delay-1">BiteBolt</h2>
          <h1 className="fade-in-down delay-2">Home Foods, Delivered Healthy </h1>
          <p className="fade-in-down delay-3">Craving something tasty? Order now with lightning speed delivery</p>
          <a href="#" className="btn primary fade-in-up delay-4">Order Now</a>
            <img src="/banana-leaf.png" alt="Banana Leaf" className="banana-leaf" />

        </div>
      </section>

      
      <FeaturedDishes />

      {/* Why Us Section */}
      <section className="why-us">
        <h2> Why Choose BiteBolt?</h2>
        <div className="why-grid">
          <div className="why-box">⚡ 30 Min Guaranteed Delivery</div>
          <div className="why-box">🥗 100% Fresh Ingredients</div>
          <div className="why-box">💸 Best Prices in Town</div>
          <div className="why-box">📍 Real-time Order Tracking</div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="app-section">
        <h2>Order On The Go</h2>
        <p>Download the BiteBolt app for iOS & Android</p>
        <div className="app-buttons">
          <button className="btn dark">Download for Android</button>
          <button className="btn dark">Download for iOS</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Incredibly fast service. Food was still hot!”</p>
            <h4>- Arun Janis.</h4>
          </div>
          <div className="testimonial-card">
            <p>“Hands down the best biryani I've had via delivery.”</p>
            <h4>- Samarth.</h4>
          </div>
          <div className="testimonial-card">
            <p>“Love the UI and the food options. 10/10.”</p>
            <h4>- Harish.</h4>
          </div>
        </div>
      </section>

      {/* Order Process Timeline */}
      <section className="process-section">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>Choose your dish</li>
          <li>Place your order</li>
          <li>Track in real-time</li>
          <li>Delivered hot to your doorstep</li>
        </ol>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Trusted by Top Restaurants</h2>
        <div className="partner-logos">
          <img src="/partner1.png" alt="Partner 1" />
          <img src="/partner2.png" alt="Partner 2" />
          <img src="/partner3.png" alt="Partner 3" />
        </div>
      </section>

      {/* Final CTA */}
<section className="final-cta">
  <img src="banner.png" alt="Delicious Food" className="cta-image" />

  <div className="cta-content">
    <h2>Hungry Already?</h2>
    <p>Satisfy your cravings with our fast, fresh, and flavorful dishes.</p>
    <a href="#" className="cta-btn">Order with BiteBolt Now 🍴</a>
  </div>
</section>

    </div>
  );
}

export default Home;
