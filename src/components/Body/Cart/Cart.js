import React, { Component } from "react";
import { connect } from "react-redux";
import CartDisplay from "./CartDisplay";

const mapStateToProps = (state) => {
  return {
    selectedcars: state.selectedcars,
  };
};

class Cart extends Component {
  handlecheckout = () => {
    this.props.history.push("checkout/");
  };

  render() {
    let showcars = null;
    if (this.props.selectedcars.length !== 0) {
      showcars = this.props.selectedcars.map((item, i) => {
        return <CartDisplay item={item} key={i} />;
      });
    } else {
      showcars = (
        <h3 className="my-5 mx-auto text-center"> No Cars in The Cart </h3>
      );
    }

    return (
      <div>
        <div className="container">
          <h1 className="my-3 mx-auto text-center">Cart Page </h1>
          <div className="row">{showcars}</div>
        </div>
        <div className="my-5">
          <button
            className="btn btn-primary my-3"
            style={{ position: "fixed", right: 10, bottom: 10 }}
            onClick={() => this.handlecheckout()}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);
