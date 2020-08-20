import Head from "next/head";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Call, VpnKey } from "@material-ui/icons";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Axios from "axios";
import { url } from "../constant";
import { ScaleLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

export default function Login() {
  const [phone_number, setPhone_number] = useState("");
  const [phone_number_error, setPhone_number_error] = useState("");
  const [key, setKey] = useState("");
  const [key_error, setKey_error] = useState(false);
  const [loading, setloading] = useState(false);
  const { push } = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(/^[0-9]*$/g.test(key) && key.length < 7)) return;
    if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(phone_number)) {
      setPhone_number_error("invalid");
      return;
    }
    if (loading) return;
    setloading(true);
    await Axios({
      method: "POST",
      url: `${url}/account/login`,
      data: {
        phone_number,
        key,
      },
    })
      .then(({ data: { token } }) => {
        document.cookie = `token=${token};`;
        toast.success("Login Successful.");
        setTimeout(() => {
          push("/dashboard");
        }, 3000);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 402") {
          setPhone_number_error("wrong");
          return;
        }
        if (err.message === "Request failed with status code 401") {
          setKey_error(true);
          return;
        }
        toast.error("Opp's an error occured");
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <section className="Login">
      <Head>
        <title>Troisplay :: Login</title>
      </Head>
      <Header />
      <div className="loginpart">
        <ToastContainer position="bottom-center" />
        <span className="icon" />
        <h3 className="title">Troisplay :: Login</h3>
        <p className="txt">Master of your own game</p>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            className="inputBox"
            variant="outlined"
            label="Phone Number"
            required
            value={phone_number}
            error={phone_number_error !== ""}
            helperText={
              phone_number_error === "wrong"
                ? "This number is not registered with any user."
                : phone_number_error === "invalid"
                ? "Invalid number NOTE: country code must be included."
                : ""
            }
            onChange={(e) => {
              if (phone_number_error !== "") {
                setPhone_number_error("");
              }
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
            error={key.length !== 6 || key_error}
            helperText={
              key_error
                ? "Incorrect key."
                : key.length !== 6
                ? "Your key should be 6 digits long."
                : ""
            }
            onChange={(e) => {
              if (
                /^[0-9]*$/g.test(e.target.value) &&
                e.target.value.length < 7
              ) {
                if (key_error) {
                  setKey_error(false);
                }
                setKey(e.target.value);
              } else {
                setKey(key.substr(0, 6));
              }
            }}
            placeholder="SECRET"
            InputProps={{
              startAdornment: (
                <InputAdornment className="icon_" position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" className="button">
            {loading ? <ScaleLoader color="white" /> : "Login"}
          </Button>
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
