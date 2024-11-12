
// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart, DecQty, IncQty } from "../redux/guddu/cartRedux/CartAction";

// const CartButton = ({ item }) => {
//   const [count, setCount] = React.useState(0);
//   const dispatch = useDispatch();

//   const handleInc = () => {
//     setCount(count + 1);
//     dispatch(IncQty(item.name));
//   };

//   const handleDec = () => {
//     if (count > 1) {
//       setCount(count - 1);
//       dispatch(DecQty(item.name));
//     }
//   };

//   const handleBtn = () => {
//     setCount(1);
//     dispatch(addToCart(item));
//   };

//   return (
//     <div className="bt">
//       {count === 0 ? (
//         <button className="addcart" onClick={handleBtn}>
//           Add to Cart
//         </button>
//       ) : (
//         <div className="btn-div">
//           <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//             <button
//               className="btn"
//               style={{
//                 padding: "10px",
//                 fontSize: "20px",
//                 width: "45px",
//                 borderRadius: "50%",
//               }}
//               onClick={handleDec}
//             >
//               -
//             </button>
//             <p className="count-item">{count}</p>
//             <button
//               className="btn"
//               style={{
//                 padding: "10px",
//                 fontSize: "20px",
//                 width: "45px",
//                 borderRadius: "50%",
//               }}
//               onClick={handleInc}
//             >
//               +
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartButton;
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, DecQty, IncQty } from "../redux/guddu/cartRedux/CartAction";

const CartButton = ({ item }) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();

  const handleInc = () => {
    setCount(count + 1);
    dispatch(IncQty(item._id)); // Use _id instead of id
  };

  const handleDec = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(DecQty(item._id)); // Use _id instead of id
    } else {
      setCount(0);
      dispatch({ type: "REM_ONE", payload: item._id }); // Use _id for removal
    }
  };

  const handleBtn = () => {
    setCount(1);
    dispatch(addToCart(item)); // Pass entire item object with _id
  };

  return (
    <div className="bt">
      {count === 0 ? (
        <button className="addcart" onClick={handleBtn}>
          Add to Cart
        </button>
      ) : (
        <div className="btn-div">
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "45px",
                borderRadius: "50%",
              }}
              onClick={handleDec}
            >
              -
            </button>
            <p className="count-item">{count}</p>
            <button
              className="btn"
              style={{
                padding: "10px",
                fontSize: "20px",
                width: "45px",
                borderRadius: "50%",
              }}
              onClick={handleInc}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
