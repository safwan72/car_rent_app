import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actioncreators";

const mapstateToProps = (state) => {
  return {
    cars: state.cars,
    selectedcars: state.selectedcars,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bookcar: (car) => dispatch(actions.bookcar(car)),
  };
};

class CarDescription extends Component {
  state = {
    thiscar: [],
  };
  componentDidMount() {
    this.setState({
      ...this.state,
      thiscar: [this.props.location.state.car],
    });
  }
  handleclick = (s) => {
    this.props.bookcar(this.state.thiscar);
    this.props.history.push("cart/");
  };
  handleback = () => {
    this.props.history.push("home/");
  };
  render() {
    let car = this.props.location.state.car;

    return (
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-7">
              <img src={car.carPicture} alt={car.carName} />
            </div>
            <div className="col-md-5 " style={{ overflowY: "auto" }}>
              <h2> {car.carName}</h2>
              <p className="my-3" style={{ fontSize: "24px" }}>
                <strong> Price : </strong> {car.carPrice} &#36;
              </p>
              <p className="my-3" style={{ fontSize: "22px" }}>
                <strong> Capacity : </strong> {car.capacity}
              </p>
              <button
                className="btn btn-outline-secondary my-3"
                onClick={() => this.handleclick(car.id)}
              >
                Add To Booking Cart
              </button>
            </div>
          </div>
          <div className="row my-4">
            <p className="my-3" style={{ fontSize: "20px" }}>
              <strong> Description : </strong>
              <br />
              {car.carDescription}
            </p>
          </div>
        </div>
        <button
          className="btn btn-warning btn-lg my-3"
          onClick={() => this.handleback()}
          style={{ position: "fixed", bottom: 10, right: 10 }}
        >
          Back
        </button>
      </div>
    );
  }
}
export default connect(mapstateToProps, mapDispatchToProps)(CarDescription);
