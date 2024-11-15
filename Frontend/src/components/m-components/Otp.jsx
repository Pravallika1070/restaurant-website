import React, { useEffect, useState } from "react";

import styles from "./Otp.module.css";
import { useNavigate } from "react-router-dom";


export const Otp =()=>{
    const navigate = useNavigate();

 localStorage.setItem("signed", 0)
   let phone=JSON.parse(localStorage.getItem("number"))
   const [sec,setsec]=useState(180)
   const navigator=useNavigate()
//    let timer= setInterval(()=>{
//     setsec(prevSec => {
//         if (prevSec === 0) {
//           // Reset sec to 180 and redirect to Signin
//           navigator("/Signin");
//           return 180;
//         }
    
//         // Otherwise, decrease sec by 1
//         return prevSec - 1;
//       });
//     }, 1000);
   useEffect(()=>{
    const timer = setInterval(() => {
        setsec(prevSec => {
          if (prevSec === 0) {
            navigator("/Signin");
            return 180;
          }
          return prevSec - 1;
        });
      }, 1000);
    
      // Clean up the interval when the component unmounts
      return () => clearInterval(timer);

    
   },[sec])

   const handleOtp =()=>{
    localStorage.setItem("signed", 1)
    navigate("/")
   }

return(
    <div id={styles.centre}>
        <div className={styles.header}>Sign In / Sign up
        
        
        </div>
        <div className={styles.logoimg}><img src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/KFC_logo.svg"
                 alt="noimg" /></div>
        <div className={styles.siocawp}>WE JUST TEXTED YOU</div>

        <div className={styles.displayPhoneNumber}>Please enter the verification code we just sent to {phone}</div>
        <div className={styles.differentNumber}>Different number?</div>

        <input  className={styles.otp} id="phone" type="number" placeholder="OTP*"   />

        <div className={styles.displayPhoneNumber} >Your code will expire in {sec} sec</div>
        <div className={styles.differentNumber}>Resend the Code</div>

        <div class={styles.skipBtnDiv}>
                <button onClick={handleOtp} class={styles.skipBtn} id="skipBtn" >Submit</button>
            </div> 


    </div>


)


}