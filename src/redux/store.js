import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
const myStore = createStore(reducer, applyMiddleware(thunk));

export default myStore;
