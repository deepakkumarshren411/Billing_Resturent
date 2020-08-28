import React from "react";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      pin: this.state.pin,
    };
    console.log(formData);
    console.log(formData.pin === "12345");

    if (formData.pin === "12345") {
      this.props.history.push(`/Menu`);
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div class="row">
            <div class="col-lg-8 ">
              <h1 className="title2">Sign In</h1>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <form class="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <div class="col-sm-10">
                    <label>
                      <h6>Pin:</h6>
                    </label>
                    <input
                      placeholder="Enter Your Pin..."
                      className="form-control form-control-lg"
                      type="pin"
                      name="pin"
                      value={this.state.pin}
                      onChange={this.handleChange}
                    ></input>{" "}
                  </div>
                </div>
                <br />

                <input
                  className="btn btn-lg btn-success  "
                  type="submit"
                  value="login"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(SignIn);
