import React from "react";
import { useNavigate } from "react-router";
import styles from "./browsecat.module.css";
const Browsecat = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.forheadrow}>
        <h1 className={styles.head}>BROWSE CATEGORIES</h1>
        <div className={styles.lineoggray}></div>
      </div>
      <div className={styles.cardcontain}>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1478749485505-2a903a729c63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Soups"
          />
          <p className={styles.cardname}>Soups</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1702705497146-bbde3336a801?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Starters"
          />
          <p className={styles.cardname}>Starters</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chinese"
          />
          <p className={styles.cardname}>Chinese</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.pexels.com/photos/9609868/pexels-photo-9609868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Biryanis"
          />
          <p className={styles.cardname}>Biryanis</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.pexels.com/photos/8156645/pexels-photo-8156645.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Tandoori"
          />
          <p className={styles.cardname}>Tandoori</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.unsplash.com/photo-1532269748385-a458d8ee473e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beverages"
          />
          <p className={styles.cardname}>Beverages</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://images.pexels.com/photos/13350094/pexels-photo-13350094.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Stay Home Specials"
          />
          <p className={styles.cardname}>Stay Home Specials</p>
        </div>
        <div onClick={()=>navigate("/menu")} className={styles.child}>
          <img
            className={styles.cardimagessp}
            src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
            alt="View All Menu"
          />
          <div className={styles.divs}>
            <p className={styles.cardnamesp}>View All Menu </p>
            <img
              className={styles.arrow}
              src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browsecat;
