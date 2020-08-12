import React from "react";
import style from "../styles/login.module.scss";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Dialpad } from "@material-ui/icons";
import { useState } from "react";

export default function Login() {
  const [phone_number, setPhone_number] = useState("");
  return (
    <section className={style.Login}>
      <div className={style.loginpart}>
        <span className={style.icon} />
        <h3 className={style.title}>EA Bet</h3>
        <p className={style.txt}>Master of your own game</p>
        <form className={style.form}>
          <TextField
            className={style.phonenumber}
            variant="outlined"
            label="Phone Number"
            required
            value={phone_number}
            onChange={(e) => {
              setPhone_number(e.target.value);
            }}
            placeholder="country code included"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Dialpad />
                </InputAdornment>
              ),
            }}
          />
          <Button className={style.button}>Get started</Button>
        </form>
      </div>
    </section>
  );
}
