import React from "react";
import MainComponent from "./components/MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";
import mystore from './redux/store'
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
      <Provider store={mystore}>
      <BrowserRouter>
            <MainComponent  />
      </BrowserRouter>
      </Provider>
  );
};

export default App;
