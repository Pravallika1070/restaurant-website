// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import styles from "../navbar/Navbar.module.css";
// import Secblack from "../Secblack/Secblack"
// const Navbar = () => { 
//   const [SignStatus1,setSignStatus1]= useState(0)
  
//   const data = useSelector((state) => state.cartdata.cartdata)
//   // const data=[];
//   const items = data.reduce((acc, elem) => {
//     return (acc += elem.qty);
//   }, 0);
//   const subtotal = data.reduce((acc, elem) => {
//     return (acc += elem.price * elem.qty);
//   }, 0);
//   const navigate = useNavigate();

//   useEffect(()=>{
// let SignStatus = localStorage.getItem("signed")||0
// setSignStatus1(SignStatus)
//   })

//   return (<>
//     <div className={styles.navpar}>
//       <div className={styles.bgcl}>
//         <div  className={styles.subpars}>
//           <img onClick={()=>navigate("/")}
//             className={styles.logoofkfc}
//             src="Frontend/src/components/shhivajiscompo/navbar/ntech-services.png"
//             alt="ddd"
//           />
//           <div onClick={()=>navigate("/menu")} className={styles.fornavmenu}>
//             {/* <Link to="">Menu</Link> */}
//             Menu
//           </div>
//           <div onClick={()=>navigate("/deals")} className={styles.fornavmenu}>Deals</div>
//         </div>
//         <div className={styles.subpars}>
//           <div className={styles.logoac}>
//             <img
//               src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
//               alt="acc"
//             />
//           </div>
//           <div className={styles.forsignin} onClick={()=>navigate("/Signin")}>{SignStatus1 ? "Account":"Sign in"}</div>
//           <div className={styles.vl}></div>
//           <div className={styles.fordigit}>
//             <p>₹ {subtotal}</p>
//           </div>
//           <div onClick={()=>navigate("/cart")} className={styles.logocart}> 
//             <img
//               src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
//               alt=""
//             />
//             <p id={styles.cartitems}>{items}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Secblack/>
//     </>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import Secblack from "../Secblack/Secblack";
import ntechServices from './ntech-services.png';

const Navbar = () => { 
  const [signStatus, setSignStatus] = useState(0);
  
  const data = useSelector((state) => state.cartdata.cartdata); // Fetching the cart data
  const items = data.reduce((acc, elem) => acc + (elem.qty || 1), 0); // Calculating total quantity
  const subtotal = data.reduce((acc, elem) => acc + (elem.price * (elem.qty || 1)), 0); // Calculating subtotal
  
  const navigate = useNavigate();

  useEffect(() => {
    const signStatusFromStorage = localStorage.getItem("signed") || 0;
    setSignStatus(signStatusFromStorage);
  }, []); // Runs only once on mount

  return (
    <>
      <div className={styles.navpar}>
        <div className={styles.bgcl}>
          <div className={styles.subpars}>
            <img 
              onClick={() => navigate("/")}
              className={styles.logo}
              src={ntechServices}
              alt="Logo"
            />
            <div onClick={() => navigate("/menu")} className={styles.fornavmenu}>Menu</div>
            <div onClick={() => navigate("/deals")} className={styles.fornavmenu}>Deals</div>
          </div>
          <div className={styles.subpars}>
            <div className={styles.logoac}>
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                alt="Account Icon"
              />
            </div>
            <div className={styles.forsignin} onClick={() => navigate("/Signin")}>
              {signStatus ? "Account" : "Sign in"}
            </div>
            <div className={styles.vl}></div>
            <div className={styles.fordigit}>
              <p>₹ {subtotal}</p>
            </div>
            <div onClick={() => navigate("/cart")} className={styles.logocart}> 
              {/* <img
                src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                alt="Cart Icon"
              /> */}
              <div><i class="fa-solid fa-cart-shopping" ></i></div>
              <p id={styles.cartitems}>{items}</p>
            </div>
          </div>
        </div>
      </div>
      <Secblack/>
    </>
  );
};

export default Navbar;
