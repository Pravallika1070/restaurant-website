// import CartButton from "./menucart";

// const GroceryItem = (item) => {
//   const { discount, imgURL, mrp, title, detail } = item;
//   return (
//     <div className="grocery">
//       <div className="upper">
//         <p>{discount}</p>
//         <img
//           style={{ width: "450px", height: "350px" }}
//           src={imgURL}
//           alt="ijiji"
//         />
//       </div>  
//       <p>{title}</p>
//       <div className="price-div">
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             marginTop: "20px",
//           }}
//         >
//           <p>₹ {mrp}</p>

//           <p>{detail}</p>
//         </div>
//       </div>
//       <CartButton item={item} />
//     </div>
//   );
// };

// export default GroceryItem;
// GroceryItem.js
import React from "react";
import CartButton from "./menucart";

const GroceryItem = ({ name, description, price, image, category,_id }) => {
  const item = { name, description, price, image, category,_id };

  return (
    <div className="grocery" >
      <div className="upper">
        <img
          style={{ width: "auto", height: "350px", borderRadius: "15px" }}
          src={image}
          alt={name}
        />
      </div>
      <p style={{fontWeight:600 ,fontSize:'25px'}}> {name}</p>
      <div className="price-div">
        <div style={{ display: "flex", flexDirection: "column", marginTop: "2px"}}>
          <p style={{fontWeight:'400'}}>₹ {price}</p>
          <p>{description}</p>
          
        </div>
      </div>
      <CartButton item={item} /> {/* Passing the full item object */}
    </div>
  );
};

export default GroceryItem;
