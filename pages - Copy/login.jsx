import React from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Dialpad } from "@material-ui/icons";
import { useState } from "react";

export default function Login() {
  const [phone_number, setPhone_number] = useState("");
  return (
    <section className="Login">
      <div className="loginpart">
        <span className="icon" />
        <h3 className="title">EA Bet</h3>
        <p className="txt">Master of your own game</p>
        <form className="form">
          <TextField
            className="phonenumber"
            variant="outlined"
            label="Phone Number"
            required
            value="phone_number"
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
          <Button className="button">Get started</Button>
        </form>
      </div>
    </section>
  );
}
