import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const Cars = (props) => {
  return (
    <div className="col-md-6 mb-3">
      <Card>
        <CardImg top width="100%" src={props.carPicture} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.carName}</CardTitle>
          <CardText>
            <strong>Price: </strong> {props.carPrice} &#36;
          </CardText>
          <CardText>
            <strong>Capacity: </strong> {props.capacity}
          </CardText>
          <Button
            color="info"
            onClick={() => {
              props.detail(props.id);
            }}
          >
            See Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
export default Cars;
