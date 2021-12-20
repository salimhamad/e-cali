import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import FullDetailDvice from "./FullDetailDvice";
export default function ALLDiviceCreater({ button, product }) {
  console.log(product);
  return (
    <div >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image}  style={{width:"300px" , height:"220px" , }}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.content} </Card.Text>
          <Button as={Link} to={`/product/${product.id}`} variant="primary">
            {button}
          </Button>
          {/* onClick={() => <FullDetailDvice/> */}
        </Card.Body>
      </Card>
    </div>
  );
}
