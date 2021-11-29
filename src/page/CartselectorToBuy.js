import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increment, decrement } from "../feautres/CartSlice";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// localStore
// const cartFromLocalstorage=JSON.parse(localStorage.getItem("cart")  || "[]")

export default function CartselectorToBuy() {
  const useselectorShowreadData = useSelector(
    (state) => state.cartSlice.cartIteem
  );

  // const incWdic = useSelector((state) => state.cartSlice.count);
  // const [iWDcont, setIWDcont] = useState(incWdic);
  // useEffect(() => {
  //   const cuntIwD = Number(localStorage.getItem("cawnter") || 0);
  //   if (cuntIwD) {
  //     setIWDcont(cuntIwD);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("cawnter", JSON.stringify(iWDcont));
  // });

  // console.log(useselectorShowreadData);

  const dispatch = useDispatch();
  //  useDispatch data akaata storakawa useSelector datay lewaragretawane

  // localStore
  // const [cart, setCart] = useState(cartFromLocalstorage);
  // setCart(useselectorShowreadData);
  // React.useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // },[cart]);

  return (
    <div>
      {useselectorShowreadData.map((key, index) => (
        <div key={index}>
          {/* key={index} akre nashy nwsyyyy */}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>title</th>
                <th>content</th>
                <th>price</th>
                <th>inc</th>
                <th>quantity</th>
                <th>dic</th>
                <th> total-price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {key.id}</td>
                <td>
                  <img src={key.image} />
                </td>
                <td> {key.title}</td>
                <td> {key.content} </td>
                <td>{key.prise}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increment(key.id));
                    }}
                  >
                    +
                  </button>
                </td>
                {/* <td>{key.setQuantity(key.quantity)} </td> */}

                <td>{key.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(decrement(key.id));
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                </td>
                <td>
                  {key.prise} * {key.count} = {key.prise * key.count}
                </td>
              </tr>
              <tr>
                <td colSpan="9">
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(key.id));
                    }}
                  >
                    remove
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>

          {/* <div>
            <button
              onClick={() => {
                dispatch(removeFromCart(key.id));
              }}
            >
              remove
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
}

/* <div>
  <div>
    <div>
      {" "}
      <img src={key.image} />{" "}
    </div>
    <h4> {key.id} </h4>
    <h3> {key.title} </h3>

    <p> {key.content} </p>
    <h5>
      {key.prise} <p>*</p> key.quantity
    </h5>
    <h5> </h5>
  </div>

  <div>
    <button
      onClick={() => {
        dispatch(removeFromCart(key.id));
      }}
    >
      remove
    </button>
  </div>
</div>; */
