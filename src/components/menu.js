import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Swal from "sweetalert2";
import Starters from "./starters";
import MainCourse from "./mainCourse";
import Dessert from "./dessert";
import { connect } from "react-redux";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      allotedTable: "",
      table: [
        { no: 1 },
        { no: 2 },

        { no: 3 },
        { no: 4 },
        { no: 5 },
        { no: 6 },
        { no: 7 },
        { no: 8 },
        { no: 9 },
        { no: 10 },
      ],
    };
  }
  handlePay = () => {
    Swal.fire({
      title: `Are you Sure?`,

      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Pay!",
    });
  };
  handleTable = (no) => {
    this.setState((prevState) => {
      return {
        allotedTable: prevState.allotedTable + no,
      };
    });
    Swal.fire({
      title: `Table Will Be Selected`,

      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SELECT!",
    });
  };

  render() {
    console.log(this.state.allotedTable);
    return (
      <div className="container">
        <BrowserRouter>
          <div className=" navbar navbar-expand-md  ">
            <a className="navbar-brand" href="">
              <h1>welcome</h1>
            </a>

            <div>
              <a className="navbar-brand" href="">
                {" "}
              </a>
            </div>

            <div className="navbar-nav ml-auto">
              <div className="navbar-nav ml-auto">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/MainCourse">
                      &nbsp; Main Course
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/Starters">
                      &nbsp; Starters
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/Dessert ">
                      &nbsp; Dessert
                    </Link>
                  </li>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Bill
                  </button>
                  <div
                    class="modal"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h3 class="modal-title" id="exampleModalLabel">
                            Totol Amount
                          </h3>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <h3>Totol -{this.props.totol}</h3>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-dismiss="modal"
                            onClick={this.handlePay}
                          >
                            Pay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  &nbsp; &nbsp; &nbsp;
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                  >
                    Select Table
                  </button>
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-backdrop="static"
                    data-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            Tables
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          {this.state.table.map((ele) => {
                            return (
                              <button
                                onClick={() => {
                                  this.handleTable(ele.no);
                                }}
                              >
                                Table No{ele.no}
                              </button>
                            );
                          })}
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-dismiss="modal"
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <Route path="/MainCourse" component={MainCourse} exact={true}></Route>
          <Route path="/Starters" component={Starters} exact={true}></Route>
          <Route path="/Dessert " component={Dessert} exact={true}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    totol: state.totol,
  };
};
export default connect(mapStateToProps)(Menu);
