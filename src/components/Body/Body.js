import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import MainBodyComponent from "./MainBodyComponent";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import CarDescription from "./Cars/CarDescription";
import { connect } from "react-redux";
import CheckOut from "./CheckOut/CheckOut";
import Logout from "./Login/Logout";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

class Body extends Component {
  render() {
    let shows = null;
    if (this.props.token !== null) {
      shows = (
        <Switch>
          <Route path="/home" exact component={MainBodyComponent} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/cardesc" exact component={CarDescription} />
          <Route path="/checkout" exact component={CheckOut} />
          <Route path="/logout" exact component={Logout} />
          <Redirect from="/" to="/home" />
        </Switch>
      );
    } else {
      shows = (
        <Switch>
          <Route path="/home" exact component={MainBodyComponent} />
          <Route path="/login" exact component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
      );
    }

    return <>{shows}</>;
  }
}
export default connect(mapStateToProps)(Body);
