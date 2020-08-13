import React from "react";
import style from "../styles/contact.module.scss";

export default function contact() {
  return (
    <div className={style.contactbody}>
      <div className={style.contactmain}>
        <div className={style.contacttext}>
          <h1>Hola, contact us</h1>
          <div className={style.content}>
            <div className={style.address}>
              <h3>
                514 5, magnolia St.<p>Oriando.fl 32B06</p>
                <p>California</p>
              </h3>
            </div>
            <div className={style.contactemail}>
              <h3>hiagency@gmail.com</h3>
              <p>+1 900 77 4321</p>
            </div>
          </div>
          <div className={style.socialmedia}>
            <div className={style.instagram}>
              <h4>Instagram</h4>
            </div>
            <div className={style.twitter}>
              <h4>twitter</h4>
            </div>
            <div className={style.facebook}>
              <h4>facebook</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
