import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

// Image URLs
const IMAGE_URLS = {
  deliciousFood: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EoYWO2PzxRrzzHqh7GWLXvPCbUJ-gIZc-Q&s",
  cozyAtmosphere: "https://lh3.googleusercontent.com/xmyqFjHd1uPMyrIXQztRBxhJpPz6gH46678DQ90WXzvk5AII4-XYia_nQhxof5cmb_ZDXe844EZiMGGJFHv1faO0jdU=w600-rw",
  fastDelivery: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnvUc3rPFCo-IZpUb5j0jHlotIliwfl7EVw&s"
};

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Our Restaurant</h1>
        <p className="home-subtitle">Experience the best food in town</p>
        <Link to="/menu" className="home-button">
          View Menu
        </Link>
      </header>

      <section className="home-features">
        <div className="home-feature">
          <img src={IMAGE_URLS.deliciousFood} alt="Delicious Food" className="home-feature-image" />
          <h2 className="home-feature-title">Delicious Food</h2>
          <p className="home-feature-description">
            Our dishes are made with the freshest ingredients and love.
          </p>
        </div>
        <div className="home-feature">
          <img
            src={IMAGE_URLS.cozyAtmosphere}
            alt="Cozy Atmosphere"
            className="home-feature-image"
          />
          <h2 className="home-feature-title">Cozy Atmosphere</h2>
          <p className="home-feature-description">
            Enjoy your meal in a warm and friendly environment.
          </p>
        </div>
        <div className="home-feature">
          <img
            src={IMAGE_URLS.fastDelivery}
            alt="Fast Delivery"
            className="home-feature-image"
          />
          <h2 className="home-feature-title">Fast Delivery</h2>
          <p className="home-feature-description">
            Get your favorite dishes delivered to your doorstep in no time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
