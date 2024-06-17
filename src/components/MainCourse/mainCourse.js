import React from "react";
import { connect } from "react-redux";
import { startAddCart } from "../../actions/cartAction";
import { total } from "../../actions/totalAction";
import Swal from "sweetalert2";
import "./maincourse.css";

class MainCourse extends React.Component {
  handleCart = (name, price) => {
    this.props.dispatch(startAddCart(name, price));
    this.props.dispatch(total(price));
  };

  handleBuyNow = (name, price) => {
    Swal.fire({
      title: `Buy ${name} for ${price} Rs?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Buy Now"
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.dispatch(startAddCart(name, price));
        this.props.dispatch(total(price));
        Swal.fire("Purchased!", `${name} has been purchased.`, "success");
      }
    });
  };

  renderMainCourse = () => {
    return this.props.mainCourse.map((ele) => (
      <div className="row" key={ele.name}>
        <div className="card mb-3">
          <img
            src={ele.image}
            className="card-img-top embed-responsive-item"
            alt={ele.name}
          />
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h5 className="card-title">{ele.price} Rs</h5>
            <button onClick={() => this.handleCart(ele.name, ele.price)}>Add To Cart</button>
            <button onClick={() => this.handleBuyNow(ele.name, ele.price)}>Buy Now</button>
          </div>
        </div>
      </div>
    ));
  };

  render() {
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
                    {this.props.cart.map((ele) => (
                      <tr key={ele.name}>
                        <td>{ele.name}</td>
                        <td>{ele.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h3>Total - {this.props.total} Rs</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <h1 className="des">Main Course</h1>
        </div>
        <div>{this.renderMainCourse()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mainCourse: state.mainCourse,
    cart: state.cart,
    total: state.total,
  };
};

export default connect(mapStateToProps)(MainCourse);
