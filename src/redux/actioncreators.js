import * as actions from "./actiontypes";
import Axios from "axios";
import jwt_decode from "jwt-decode";
export const loadcars = () => {
  return {
    type: actions.CARS_LOADING,
  };
};

export const carsloaded = (cars) => {
  return {
    type: actions.CARS_LOADED,
    payload: cars,
  };
};

export const carloader = () => (dispatch) => {
  dispatch(loadcars());
  Axios.get("http://127.0.0.1:8000/vehicle/?format=json").then((response) => {
    dispatch(carsloaded(response.data));
  });
};

export const bookcar = (car) => {
  return {
    type: actions.ADD_TO_CART,
    payload: car,
  };
};

export const checkoutsuccess = () => {
  return {
    type: actions.BOOK_CAR,
  };
};

export const checkout = (time, selectedcars, user) => (dispatch) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let arr = selectedcars.map((item, i) => {
    return item.id;
  });

  const values = {
    rent_to: time,
    vehicle: arr,
    user: user,
  };

  Axios.post("http://127.0.0.1:8000/rentcar/", values, header)
    .then((response) => {
      dispatch(authsuccess());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authsuccess = (token) => {
  return {
    type: actions.AUTH_SUCCESS,
    payload: token,
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT,
  };
};

export const auth = (email, username, password, mode) => (dispatch) => {
  const valuestobepassed = {
    email: email,
    username: username,
    password: password,
  };
  const loginvalues = {
    email: email,
    password: password,
  };
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let url = null,
    passvalue = null;
  if (mode === "SIGNUP") {
    url = "http://127.0.0.1:8000/new_user/";
    passvalue = valuestobepassed;
  } else {
    url = "http://127.0.0.1:8000/token/";
    passvalue = loginvalues;
  }

  Axios.post(url, passvalue, header)
    .then((response) => {
      if (mode === "SIGNUP") {
        console.log(response);
        console.log(passvalue);
      } else {
        const decoded = jwt_decode(response.data.access);
        dispatch(authsuccess(decoded));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
