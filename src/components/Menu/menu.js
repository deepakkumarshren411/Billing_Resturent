import React, { useState } from "react";
import { BrowserRouter, Link, Route, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import Starters from "../Starters/starters";
import MainCourse from "../MainCourse/mainCourse";
import Dessert from "../dessert/dessert";
import "./menu.css"; // Import CSS file

const Menu = ({ total }) => {
  const history = useHistory();
  const handleNavigate = () => {
    history.push("/other-route");
  };
  const [allotedTable, setAllotedTable] = useState("");
  const table = [
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
  ];

  const handlePay = () => {
    Swal.fire({
      title: `Are you Sure?`,
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Pay!",
    });
  };

  const handleTable = (no) => {
    setAllotedTable((prevState) => prevState + no);
    Swal.fire({
      title: `Table Will Be Selected`,
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SELECT!",
    });
  };
  console.log(allotedTable);
  return (
    <div className="container">
      <BrowserRouter>
        <div className="navbar navbar-expand-md">
          <a className="navbar-brand" href="www.linked.com">
            <h1>Welcome</h1>
          </a>
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
                <Link className="nav-link" to="/Dessert">
                  &nbsp; Dessert
                </Link>
              </li>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Bill
              </button>
              <div
                className="modal"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalLabel">
                        Total Amount
                      </h3>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h3>Total - {total}</h3>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={handlePay}
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
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#staticBackdrop"
              >
                Select Table
              </button>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-backdrop="static"
                data-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Tables
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {table.map((ele) => (
                        <button
                          key={ele.no}
                          onClick={() => handleTable(ele.no)}
                          className="table-btn"
                        >
                          Table No {ele.no}
                        </button>
                      ))}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
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
          <div>
            <button onClick={handleNavigate}> Go to main Page </button>
          </div>
        </div>
        <Route path="/MainCourse" component={MainCourse} exact />
        <Route path="/Starters" component={Starters} exact />
        <Route path="/Dessert" component={Dessert} exact />
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.total,
  };
};

export default connect(mapStateToProps)(Menu);
