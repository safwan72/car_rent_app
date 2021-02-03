import React, { Component } from "react";
import { connect } from "react-redux";
import DateTimePicker from "react-datetime-picker";
import * as actions from "../../../redux/actioncreators";

const mapStateToProps = (state) => {
  return {
    token: state.token,
    selectedcars: state.selectedcars,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkout: (time, selectedcars, user) =>
      dispatch(actions.checkout(time, selectedcars, user)),
  };
};
class Checkout extends Component {
  state = {
    time: new Date(),
  };
  changehandler = (date) => {
    this.setState({
      ...this.state,
      time: date,
    });
  };

  checkouthandler = () => {
    this.props.checkout(
      this.state.time,
      this.props.selectedcars,
      this.props.token.user_id
    );
    this.props.history.push("home/");
  };

  render() {
    let selections = null;
    if (this.props.selectedcars.length !== 0) {
      selections = this.props.selectedcars.map((item, i) => {
        return (
          <li className="list-group-item" key={i}>
            {item.carName}
          </li>
        );
      });
    } else {
      selections = <h4> No Selected Cars </h4>;
    }
    return (
      <div>
        <div className="container my-5 ">
          <h1 className="text-center mb-5"> Checkout Page </h1>

          <label style={{ fontWeight: "bold" }}> Rent To Be: </label>
          <DateTimePicker
            value={this.state.time}
            onChange={(date) => this.changehandler(date)}
            className="form-control"
          />
          <br />
          <br />
          <label style={{ fontWeight: "bold", fontSize: "25px" }}>
            {" "}
            Selected Cars:{" "}
          </label>
          <ul className="list-group">{selections}</ul>
        </div>
        <button
          className="btn btn-info btn-lg my-3"
          onClick={this.checkouthandler}
          style={{ position: "fixed", bottom: 10, right: 10 }}
        >
          CheckOut
        </button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
