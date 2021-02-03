import * as actions from "./actiontypes";

const initstate = {
  cars: [],
  token: null,
  selectedcartodisplay: null,
  selectedcars: [],
  totalPrice: 0,
  loader: false,
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case actions.CARS_LOADING:
      return {
        ...state,
        loader: true,
      };
    case actions.CARS_LOADED:
      return {
        ...state,
        loader: false,
        cars: [...action.payload],
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        selectedcars: [...state.selectedcars.concat(action.payload)],
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case actions.LOGOUT:
      return {
        ...state,
        token: null,
      };
    case actions.BOOK_CAR:
      return {
        ...state,
        selectedcartodisplay: null,
        selectedcars: [],
      };
    default:
      return state;
  }
};
export default reducer;
