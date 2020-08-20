import { InputAdornment, TextField } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import ImagePicker from "../components/imagepicker";
import Head from "next/head";

export default function Setup() {
  return (
    <div className="Setup">
      <Head>
        <title>Player setup :: Troisplay</title>
      </Head>
      <div className="first">
        <div className="filling">
          <ImagePicker />
        </div>
      </div>
    </div>
  );
}
