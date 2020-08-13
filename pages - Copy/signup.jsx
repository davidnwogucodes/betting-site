import React from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Dialpad } from "@material-ui/icons";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

export default function signup() {
  return (
    <section className="signup">
      <div className="signuppart">
        <span className="signupicon" />
        <h3 className="signuptitle">EA Bet</h3>
        <p className="signuptxt">Master of your own game</p>
        <form className="signupform">
          <TextField
            className="signupphonenumber"
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
            className="signupphonenumber"
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
            className="signupphonenumber"
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
          <Button className="signupbutton">Get started</Button>
        </form>
      </div>
    </section>
  );
}
