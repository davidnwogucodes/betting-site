import Head from "next/head";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Call, VpnKey } from "@material-ui/icons";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";

export default function Login() {
  const [phone_number, setPhone_number] = useState("");
  const [key, setKey] = useState("");
  return (
    <section className="Login">
      <Head>
        <title>Troisplay :: Login</title>
      </Head>
      <Header />
      <div className="loginpart">
        <span className="icon" />
        <h3 className="title">Troisplay :: Login</h3>
        <p className="txt">Master of your own game</p>
        <form className="form">
          <TextField
            className="inputBox"
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
                <InputAdornment className="icon_" position="start">
                  <Call />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className="inputBox"
            variant="outlined"
            label="Betting Key"
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
            placeholder="country code included"
            InputProps={{
              startAdornment: (
                <InputAdornment className="icon_" position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <Button className="button">Get started</Button>
          <p className="link">
            Don't have an account yet ?
            <Link href="/signup">
              <a>click here</a>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
