import React from "react";

const CartDisplay = (props) => {
  return (
    <div className="col-md-6 my-5">
      <div className="card my-3">
        <img
          src={props.item.carPicture}
          className="card-img-top"
          alt={props.item.carName}
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.carName}</h5>
          <p className="card-text">Price : {props.item.carPrice} &#36;</p>
          <p className="card-text">Capacity : {props.item.capacity}</p>
        </div>
      </div>
    </div>
  );
};
export default CartDisplay;
