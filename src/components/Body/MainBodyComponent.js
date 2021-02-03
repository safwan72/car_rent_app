import React, { Component } from "react";
import { connect } from "react-redux";
import Cars from "./Cars/Cars";
import * as actions from "../../redux/actioncreators";
import SpinnerComponent from "./Spinner/SpinnerComponent";

const mapstateToProps = (state) => {
  return {
    cars: state.cars,
    loader: state.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadcars: () => dispatch(actions.loadcars()),
    carapi: () => dispatch(actions.carloader()),
  };
};

class MainBodyComponent extends Component {
  componentDidMount() {
    this.props.carapi();
  }
  seedetail = (s) => {
    let selected = this.props.cars.filter((item) => {
      return item.id === s;
    });
    this.props.history.push("/cardesc", { car: selected[0] });
  };
  render() {
    let showdishes = null;
    if (this.props.cars !== undefined) {
      showdishes = this.props.cars.map((item, index) => {
        return (
          <Cars
            carName={item.carName}
            carPicture={item.carPicture}
            carDescription={item.carDescription}
            carPrice={item.carPrice}
            capacity={item.capacity}
            id={item.id}
            key={index}
            detail={this.seedetail}
          />
        );
      });
    } else {
      showdishes = (
        <h1 className="my-5 text-center mx-auto text-danger">
          No Cars In The List
        </h1>
      );
    }

    let arr = null;
    if (this.props.loader) {
      arr = <SpinnerComponent />;
    } else {
      arr = <div className="row gy-3">{showdishes}</div>;
    }

    return <div className="container my-5">{arr}</div>;
  }
}

export default connect(mapstateToProps, mapDispatchToProps)(MainBodyComponent);
