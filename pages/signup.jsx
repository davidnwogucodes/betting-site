import React from "react";
import style from "../styles/signup.module.scss";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Dialpad } from "@material-ui/icons";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

export default function signup() {
  return (
    <section className={style.signup}>
      <div className={style.signuppart}>
        <span className={style.signupicon} />
        <h3 className={style.signuptitle}>EA Bet</h3>
        <p className={style.signuptxt}>Master of your own game</p>
        <form className={style.signupform}>
          <TextField
            className={style.signupphonenumber}
            variant="outlined"
            label="Phone Number"
            required
            placeholder="country code included"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Dialpad />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={style.signupphonenumber}
            variant="outlined"
            label="Betting key"
            required
            placeholder="Betting key"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={style.signupphonenumber}
            variant="outlined"
            label="Confirm betting key"
            required
            placeholder="Confirm betting key"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button className={style.signupbutton}>Get started</Button>
        </form>
      </div>
    </section>
  );
}
