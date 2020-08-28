import React from "react";
import { connect } from "react-redux";
import { startAddCart } from "../actions/cartAction";
import { totol } from "../actions/totolAction";

class MainCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleCart = (name, price) => {
    this.props.dispatch(startAddCart(name, price));
    this.props.dispatch(totol(price));
  };
  renderMainCourse = () => {
    const mainCourse = this.props.mainCourse.map((ele) => {
      return (
        <div class="row">
          <div class="card mb-3">
            <img
              src={ele.image}
              class="card-img-top embed-responsive-item"
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title">{ele.name}</h5>
              <h5 class="card-title">{ele.price}</h5>
              <button
                onClick={() => {
                  this.handleCart(ele.name, ele.price);
                }}
              >
                {" "}
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      );
    });

    return <div>{mainCourse}</div>;
  };
  render() {
    return (
      <div>
        <div className="container-3">
          <h1 className="des">Cart</h1>
          <div class="row">
            <div class="card">
              <div class="card-body">
                <table border="3px">
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cart.map((ele) => {
                      return (
                        <tr>
                          <td>{ele.name}</td>
                          <td>{ele.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h3>Totol-{this.props.totol}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <h1 className="des"> Main Course</h1>
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
    totol: state.totol,
  };
};

export default connect(mapStateToProps)(MainCourse);
