import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CartCount() {
  let [cartItems, setCartItem] = useState([]);

  let { cartIteem } = useSelector((state) => state.cartSlice);

  useEffect(() => {
    if (cartIteem) setCartItem(cartIteem);
    //if ( cartIteem.length > 0) setCartItem(cartIteem);
  }, [cartIteem]);
  return (
    <span
      className="badge"
      // style={{
      //   border: "3px solid red",
      //   borderRadius: "10px",
      //   backgroundColor: "#29e571",
      // }}
    >
      {cartItems.length}
    </span>
  );
}
