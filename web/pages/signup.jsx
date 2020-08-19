import Head from "next/head";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Call, VpnKey, Person } from "@material-ui/icons";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/header";
import { url } from "../constant";
import Axios from "axios";
import { ScaleLoader } from "react-spinners";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

export default function signup() {
  const [full_name, setFull_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [phone_number_error, setPhone_number_error] = useState("");
  const [key, setKey] = useState("");
  const [loading, setloading] = useState(false);
  const { push } = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!(/^[0-9]*$/g.test(key) && key.length < 7)) return;
    if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(phone_number)) {
      setPhone_number_error("invalid");
      return;
    }
    setloading(true);
    await Axios({
      method: "POST",
      url: `${url}/account`,
      data: {
        full_name,
        phone_number,
        key,
      },
    })
      .then(() => {
        toast.success("Successfull");
        setTimeout(() => {
          push("/login");
        }, 3000);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 400") {
          setPhone_number_error("used");
          return;
        }
        toast.error("Opp's an error occured");
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <section className="signup">
      <Head>
        <title>Troisplay :: Signup</title>
      </Head>
      <Header />
      <ToastContainer position="bottom-center" />
      <div className="signuppart">
        <span className="signupicon" />
        <h3 className="signuptitle">Troisplay :: Signup</h3>
        <p className="signuptxt">Master of your own game</p>
        <form className="signupform" onSubmit={handleSubmit}>
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
            error={phone_number_error !== ""}
            helperText={
              phone_number_error === "used"
                ? "This number is already used."
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
            error={key.length !== 6}
            helperText={
              key.length !== 6 ? "Your key should be 6 digits long." : ""
            }
            onChange={(e) => {
              if (
                /^[0-9]*$/g.test(e.target.value) &&
                e.target.value.length < 7
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
            {loading ? <ScaleLoader color="white" /> : "Get started"}
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
