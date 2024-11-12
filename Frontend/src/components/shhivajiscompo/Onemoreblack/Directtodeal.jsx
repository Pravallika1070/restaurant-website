import React from "react";
import { useNavigate } from "react-router";
import deleImage from "./DELE.png";
import styles from "./Directtodeal.module.css";
const Directtodeal = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <div style={{ width: "30%" }}></div>

      <div className={styles.splitbet}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.dist}>
          <div className={styles.dist}>
            <h4 className={styles.h2}>OFFERS & DEALS</h4>
          </div>

          <p onClick={()=>navigate("/deals")} className={styles.cardnamesp}>View All Menu </p>
        </div>
        <div className={styles.card}>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h1 className={`${styles.offer} offer`}> 1 PC Free Double ka meetha</h1>
            <div className={styles.btpar}>
              <p>View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://images.pexels.com/photos/28236327/pexels-photo-28236327/free-photo-of-pizza.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h1 className={`${styles.offer} offer`}> 1 Free Cool Drink</h1>
            <div className={styles.btpar}>
              <p>View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src={deleImage}
              alt=""
            />
            <h1 className={`${styles.offer} offer`}>Free Delivery</h1>
            <div className={styles.btpar}>
              <p >View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directtodeal;
