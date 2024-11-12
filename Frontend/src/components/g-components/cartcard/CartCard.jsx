import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  DecQty,
  IncQty,
  RemoveOne,
} from "../../../redux/guddu/cartRedux/CartAction";
import styles from "./cartcard.module.css";

export const CartCard = (props) => {
  const [qty, setqty] = useState(1);
  const dispatch = useDispatch();

  const qtyInc = () => {
    setqty(qty + 1);
    dispatch(IncQty(props._id));
  };
  const qtyDec = () => {
    if (qty >= 1) {
      setqty(qty - 1);
      dispatch(DecQty(props._id));
    }
  };

  const removeOne = () => {
    dispatch(RemoveOne(props._id));
  };
  return (
    <div id={styles.frame}>
      <div>
        <img src={props.imgURL} alt="product image" />
      </div>
      <div id={styles.centerDiv}>
        <p>{props.title}</p>
        <button onClick={removeOne}>Remove</button>
      </div>
      <div id={styles.priceandqty}>
        <button className={styles.btn} onClick={qtyDec}>
          -
        </button>
        <p>{qty}</p>
        <button className={styles.btn} onClick={qtyInc}>
          +
        </button>
        <p>{`₹${props.price * qty}`}</p>
      </div>
    </div>
  );
};
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DecQty, IncQty, RemoveOne } from "../../../redux/guddu/cartRedux/CartAction";
// import styles from "./cartcard.module.css";

// export const CartCard = (props) => {
//   const dispatch = useDispatch();

//   // Fetching cart data from Redux store
//   const cartData = useSelector((state) => state.cartdata);

//   // Find the item in the cart using the MongoDB `_id`
//   const cartItem = cartData.find((item) => item._id === props._id);

//   const qtyInc = () => {
//     if (cartItem) dispatch(IncQty(props._id));
//   };

//   const qtyDec = () => {
//     if (cartItem && cartItem.qty > 1) {
//       dispatch(DecQty(props._id));
//     }
//   };

//   const removeOne = () => {
//     dispatch(RemoveOne(props._id));
//   };

//   return (
//     <div id={styles.frame}>
//       <div>
//         <img src={props.imgURL} alt="product image" />
//       </div>
//       <div id={styles.centerDiv}>
//         <p>{props.title}</p>
//         <button onClick={removeOne}>Remove</button>
//       </div>
//       <div id={styles.priceandqty}>
//         <button className={styles.btn} onClick={qtyDec}>-</button>
//         <p>{cartItem ? cartItem.qty : 1}</p>
//         <button className={styles.btn} onClick={qtyInc}>+</button>
//         <p>{`₹${cartItem ? cartItem.price * cartItem.qty : props.price}`}</p>
//       </div>
//     </div>
//   );
// };
