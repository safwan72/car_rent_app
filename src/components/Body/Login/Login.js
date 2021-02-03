import { Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actioncreators";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, username, password, mode) =>
      dispatch(actions.auth(email, username, password, mode)),
  };
};

class Login extends Component {
  state = {
    mode: "SIGNUP",
  };
  modehandler = () => {
    this.setState({
      mode: this.state.mode === "SIGNUP" ? "LOGIN" : "SIGNUP",
    });
  };
  render() {
    return (
      <div className="container my-4">
        <h1 className="my-5 text-center" style={{ textTransform: "uppercase" }}>
          {this.state.mode} Page{" "}
        </h1>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }

            if (!values.password) {
              errors.password = "Required";
            }
            if (this.state.mode === "SIGNUP") {
              if (!values.username) {
                errors.username = "Required";
              }
              if (!values.confirmpassword) {
                errors.confirmpassword = "Required";
              } else if (values.password !== values.confirmpassword) {
                errors.confirmpassword =
                  "Please Confirm Your Password, It Does Not Match";
              }
            }

            return errors;
          }}
          onSubmit={(values) => {
            this.props.auth(
              values.email,
              values.username,
              values.password,
              this.state.mode
            );
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="w-75 mx-auto">
              <button
                className="btn btn-secondary btn-block"
                type="button"
                onClick={this.modehandler}
              >
                Switch to {this.state.mode === "SIGNUP" ? "LOGIN" : "SIGNUP"}
              </button>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                className="form-control mt-3"
                placeholder="Please Enter Your Email"
              />
              <span
                style={{ color: "red", fontSize: "20px", display: "block" }}
              >
                {errors.email}
              </span>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                className="form-control mt-3"
                placeholder="Please Enter Your Password"
              />
              <span
                style={{ color: "red", fontSize: "20px", display: "block" }}
              >
                {errors.password}
              </span>
              {this.state.mode === "SIGNUP" ? (
                <>
                  <input
                    type="password"
                    name="confirmpassword"
                    onChange={handleChange}
                    value={values.confirmpassword}
                    className="form-control mt-3"
                    placeholder="Please Confirm Your Password"
                  />
                  <span
                    style={{
                      color: "red",
                      fontSize: "20px",
                      display: "block",
                    }}
                  >
                    {errors.confirmpassword}
                  </span>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    className="form-control mt-3"
                    placeholder="Please Enter Your Username"
                  />
                  <span
                    style={{ color: "red", fontSize: "20px", display: "block" }}
                  >
                    {errors.username}
                  </span>
                </>
              ) : null}

              <button className="btn btn-secondary mt-3 btn-lg " type="submit">
                {this.state.mode === "SIGNUP" ? "SIGNUP" : "LOGIN"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
