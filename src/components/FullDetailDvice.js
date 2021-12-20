import React from "react";
import { useParams } from "react-router";
import Product from "../page/Product";
import ALLDiviceCreater from "./ALLDiviceCreater";
import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { addToCart, removeFromCart } from "../feautres/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function FullDetailDvice() {
  // const [quantity, setQuantity] = useState(1);

  const cardDetail = [
    {
      id: "1",
      categoryArray: "laptop",
      image:
        "https://www.seekpng.com/png/full/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png",
      title: " lenevo ",
      content: "laptop lenevo 64gb ram8 ",
      prise: 1000,
    },
    {
      id: "2",
      categoryArray: "ios",
      image:
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60a91f9a5f6002a4c8174108%2FApple--iPhone--iPhone-13--new-iPhone--iPhone-upgrade--pink-iPhone--iPhone-13-release-%2F960x0.jpg%3Ffit%3Dscale",
      title: " iphone 12 ",
      content: "128gb ram8",
      prise: 1000,
    },
    {
      id: "3",
      categoryArray: "ios",
      image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png",
      title: " iphone 13  ",
      content: "1tera  3amera promax",
      prise: 1000,
    },

    {
      id: "4",
      categoryArray: "android",
      image:
        "https://www.pngkey.com/png/detail/359-3594462_galaxy-note9-samsung-galaxy-note-9-128.png",
      title: " galaxy 5 ",
      content: "64gb  ram4",
      prise: 1000,
    },
    {
      id: "5",
      categoryArray: "android",
      image:
        "https://www.pngkey.com/png/detail/359-3594462_galaxy-note9-samsung-galaxy-note-9-128.png",
      title: " galaxy 11 ",
      content: "128 gb ram 4 ",
      prise: 1000,
    },
    {
      id: "6",
      categoryArray: "laptop",
      image:
        "https://www.seekpng.com/png/full/327-3279164_lenovo-laptop-png-lenovo-laptop-png-transparent.png",
      title: " lenevo ",
      content: "laptop lenevo 64gb ram8 ",
      prise: 1000,
    },
    {
      id: "7",
      categoryArray: "ios",
      image:
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60a91f9a5f6002a4c8174108%2FApple--iPhone--iPhone-13--new-iPhone--iPhone-upgrade--pink-iPhone--iPhone-13-release-%2F960x0.jpg%3Ffit%3Dscale",
      title: " iphone 12 ",
      content: "128gb ram8",
      prise: 1000,
    },
    {
      id: "8",
      categoryArray: "ios",
      image: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png",
      title: " iphone 13  ",
      content: "1tera  3amera promax",
      prise: 1000,
    },

    {
      id: "9",
      categoryArray: "android",
      image:
        "https://m.media-amazon.com/images/I/817bQtKyr5L._AC_SX679_.jpg",
      title: " galaxy 5 ",
      content: "64gb  ram4",
      prise: 1000,
    },
    {
      id: "10",
      categoryArray: "android",
      image:
        "https://m.media-amazon.com/images/I/817bQtKyr5L._AC_SX679_.jpg",
      title: " galaxy 11 ",
      content: "128 gb ram 4 ",
      prise: 1000,
    },
  ];

  //    let { id } = useParams(); return <div>{id}</div>;  ama idy cardakan yanetawa   return <div>{id}</div>;
  // start id
  let { id } = useParams();

  let productt = cardDetail.filter((product) => {
    return product.id === id;
  });
  //   end id
  //   return <ALLDiviceCreater button="sell" product={productt[0]} />;

  // code add w remove to card
  // const  useselectorCartSllice  = useSelector((state) => state.cartSlice);
  const { cartIteem } = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  // let products;

  const cartProductId = [];

  cartIteem.forEach((cartItem) => {
    cartProductId.push(cartItem.id);
  });

  return (
    <div>
      {/* productt[0] ama hamw objectaka waragre */}

      <div style={{ display: "flex" 
      //  , justifyContent:"space-evenly"
       }}>
        <div style={{marginTop:"20px"}}>
         
          <img src={productt[0].image} style={{ height: "400px" }} />
        </div>
        <div style={{marginTop:"100px"}}>
          <h3> {productt[0].title}</h3>
          <h5>{productt[0].content}</h5>
          <h3>{productt[0].prise}$</h3>
          <div>Dapibus ac facilisis in</div>
          <div>Vestibulum at eros</div>
        </div>
        <div style={{marginTop:"250px" , marginLeft:"70px"}}>
          {" "}
          {cartProductId.includes(productt[0].id) ? (
            <button
              onClick={() => {
                dispatch(removeFromCart(productt[0].id));
              }}
              style={{backgroundColor:"red" , borderRadius:"10px"  , padding:"5px" , fontWeight:"bold"}}
            >
              remove
            </button>
          ) : (
            <button
              onClick={() => {
                cartProductId.push(productt[0].id);
                let cartProduct = { ...productt[0], count: 1 };
                dispatch(addToCart(cartProduct));

              }}
              style={{backgroundColor:"#1ded0e" , borderRadius:"10px", padding:"5px"  , fontWeight:"bold"}}

            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// <Card style={{ width: "50rem", height: "100vh" }}>
// <Card.Img
//   variant="top"
//   src={productt[0].image}
//   style={{ height: "50%" }}
// />
// <Card.Body>
//   <Card.Title> {productt[0].title}</Card.Title>
//   <Card.Text>{productt[0].content}</Card.Text>
// </Card.Body>
// <ListGroup className="list-group-flush">
//   <ListGroupItem>{productt[0].prise}$</ListGroupItem>
//   <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//   <ListGroupItem>Vestibulum at eros</ListGroupItem>
// </ListGroup>
// <Card.Body>
//   {cartProductId.includes(productt[0].id) ? (
//     <button
//       onClick={() => {
//         dispatch(removeFromCart(productt[0].id));
//       }}
//     >
//       remove
//     </button>
//   ) : (
//     <button
//       onClick={() => {
//         cartProductId.push(productt[0].id);
//         let cartProduct = { ...productt[0], count: 1 };
//         dispatch(addToCart(cartProduct));
//       }}
//     >
//       Add to cart
//     </button>
//   )}
// </Card.Body>
// </Card>
