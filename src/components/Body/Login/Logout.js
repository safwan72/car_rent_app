import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actioncreators";
import { Redirect } from "react-router-dom";
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

class Logout extends Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return <Redirect to="/" />;
  }
}
export default connect(null, mapDispatchToProps)(Logout);
