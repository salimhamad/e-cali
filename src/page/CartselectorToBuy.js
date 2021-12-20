// import { Table } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increment, decrement } from "../feautres/CartSlice";

// localStore
// const cartFromLocalstorage=JSON.parse(localStorage.getItem("cart")  || "[]")

export default function CartselectorToBuy() {
  const useselectorShowreadData = useSelector(
    (state) => state.cartSlice.cartIteem
  );
  // console.log(useselectorShowreadData);
  const dispatch = useDispatch();
  //
  //
  return (
    <div>
      {useselectorShowreadData.map((key, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              // paddingRight: "30px",
              justifyContent: "space-evenly",
              borderBottom: "2px solid  black",
              // margin: "20px",
            }}
          >
            <div>
              <img
                src={key.image}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  verticalAlign: "middle",
                  textAlign: "center",
                  marginTop: "28px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
            >
              <h style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
                id : {key.id}
              </h>
              <h style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
                {" "}
                {key.title}
              </h>
              <h style={{ fontSize: "20px", fontWeight: "bold" }}>
                {key.content}
              </h>
            </div>
            <div
              style={{
                display: "flex",
                paddingRight: "30px",
                margin: "20px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <h style={{ paddingTop: "30px" }}> {key.prise}$</h>
              <button
                onClick={() => {
                  dispatch(increment(key.id));
                }}
                style={{
                  color: "#269b2e",
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "20px",
                  width: "40px",
                  height: "40px",
                }}
              >
                +
              </button>
              <h
                style={{
                  paddingTop: "3px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <h6>Quantity</h6>{" "}
                <div style={{ border: "2px solid  black" }}>{key.count}</div>
              </h>
              <button
                onClick={() => {
                  dispatch(decrement(key.id));
                }}
                style={{
                  color: "red",
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "20px",
                  width: "40px",
                  height: "40px",
                }}
              >
                -
              </button>

              <div style={{ fontSize: "20px" }}>
                <h6>Total</h6>( {key.prise}$
                <b style={{ fontSize: "20px" }}>*</b> {key.count} ={" "}
                {key.prise * key.count})
              </div>

              <div style={{ marginLeft: "40px", paddingTop: "30px" }}>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(key.id));
                  }}
                  style={{
                    marginTop: "50px",
                    marginLeft: "20px",
                    height: "40px",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  removeFomeCart
                </button>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: "20px" }}>
              {/* {(key.prise*key.count )+ (key.prise * key.count)} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
