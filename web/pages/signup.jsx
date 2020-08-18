import Head from "next/head";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Call, VpnKey, Person } from "@material-ui/icons";
import Link from "next/link";
import { useState } from "react";

export default function signup() {
  const [full_name, setFull_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [key, setKey] = useState("");
  return (
    <section className="signup">
      <Head>
        <title>Troisplay :: Signup</title>
      </Head>
      <div className="signuppart">
        <span className="signupicon" />
        <h3 className="signuptitle">Troisplay :: Signup</h3>
        <p className="signuptxt">Master of your own game</p>
        <form className="signupform">
          <TextField
            className="inputBox"
            variant="outlined"
            label="Full Name"
            required
            placeholder="first last, other names"
            value={full_name}
            onChange={(e) => {
              setFull_name(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment className="icon_" position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className="inputBox"
            variant="outlined"
            label="Phone Number"
            required
            placeholder="country code included"
            value={phone_number}
            onChange={(e) => {
              setPhone_number(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment className="icon_" position="start">
                  <Call />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className="inputBox"
            variant="outlined"
            label="Betting key"
            required
            value={key}
            onChange={(e) => {
              if (
                /^[0-9]*$/g.test(e.target.value) &&
                e.target.value.length < 10
              ) {
                setKey(e.target.value);
              }
            }}
            placeholder="betting key"
            InputProps={{
              startAdornment: (
                <InputAdornment className="icon_" position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <Button className="signupbutton" type="submit">
            Get started
          </Button>
          <p className="link">
            Already have an account ?
            <Link href="/login">
              <a>click here</a>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
