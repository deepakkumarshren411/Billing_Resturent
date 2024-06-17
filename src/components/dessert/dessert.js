import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddCart } from "../../actions/cartAction";
import { total } from "../../actions/totalAction";
import Swal from "sweetalert2";
import "./dessert.css";

const Dessert = () => {
  const dispatch = useDispatch();
  const dessert = useSelector((state) => state.dessert);
  const cart = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.total);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, []);

  const handleCart = (name, price) => {
    dispatch(startAddCart(name, price));
    dispatch(total(price));
  };

  const handleBuyNow = (name, price) => {
    Swal.fire({
      title: `Buy ${name} for ${price} Rs?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Buy Now"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startAddCart(name, price));
        dispatch(total(price));
        Swal.fire("Purchased!", `${name} has been purchased.`, "success");
      }
    });
  };

  const renderDessert = () => {
    return dessert.map((ele, index) => (
      <div className="row" key={ele.name}>
        <div className="card" style={{ opacity: 0, transform: "translateY(50px)" }}>
          <img
            src={ele.image}
            className="card-img-top embed-responsive-item"
            alt={ele.name}
          />
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h5 className="card-title">{ele.price} Rs</h5>
            <button onClick={() => handleCart(ele.name, ele.price)}>Add To Cart</button>
            <button onClick={() => handleBuyNow(ele.name, ele.price)}>Buy Now</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="container-3">
        <h1 className="des">Cart</h1>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <table border="3px">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((ele) => (
                    <tr key={ele.name}>
                      <td>{ele.name}</td>
                      <td>{ele.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3>Total - {totalAmount} Rs</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <h1 className="des">Dessert</h1>
      </div>
      <div>{renderDessert()}</div>
    </div>
  );
};

export default Dessert;
