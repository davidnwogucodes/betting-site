import React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Head from "next/head";
import Header from "../components/header";
import { useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [company_name, setcompany_name] = useState("");
  const [company_size, setcompany_size] = useState("0 - 100");
  const [message, setmessage] = useState("");
  return (
    <div className="contact">
      <Head>
        <title>Troisplay :: Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="first">
        <div className="left">
          <span role="img" className="img" />
          <div className="txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a
            animi saepe qui repellendus ab obcaecati! Dignissimos animi corrupti
            accusantium mollitia dolor, eum debitis inventore quibusdam illum
            autem ex excepturi?
          </div>
        </div>
        <div className="right">
          <div className="title">Reach out to us</div>
          <div className="txt">
            We are here for you, to learn how Troisplay platform works and to
            provide you with any information you might need.
          </div>
          <form>
            <TextField
              className="inputBox"
              variant="standard"
              label="Name"
              placeholder=""
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <TextField
              className="inputBox"
              variant="standard"
              label="Email"
              type="email"
              placeholder=""
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <TextField
              className="inputBox"
              variant="standard"
              label="Company Name"
              placeholder=""
              required
              value={company_name}
              onChange={(e) => {
                setcompany_name(e.target.value);
              }}
            />
            <FormControl className="inputBox select">
              <InputLabel>Company Size</InputLabel>
              <Select
                variant="standard"
                required
                value={company_size}
                onChange={(e) => {
                  setcompany_size(e.target.value);
                }}
              >
                <MenuItem value="0 - 100">0 - 100</MenuItem>
                <MenuItem value="100 - 1,000">100 - 1,000</MenuItem>
                <MenuItem value="1,000 - 5,000">1,000 - 5,000</MenuItem>
                <MenuItem value="5,000,- 10,000">5,000 - 10,000</MenuItem>
                <MenuItem value="10,000 and Above">10,000 and Above </MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="inputBox"
              variant="standard"
              placeholder="Write the content of your message"
              multiline
              rowsMax={6}
              required
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
            />
            <Button className="btn" type="submit">
              send message
            </Button>
          </form>
        </div>
      </div>
      <div className="second">
        <div className="content">
          <svg className="icon" viewBox="0 0 512 512">
            <g>
              <path d="m65 346v-132c0-7.814 2.144-13.539 1.858-12.776-1.296.101-2.582.24-3.858.416v-97.64c0-8.284-6.716-15-15-15s-15 6.716-15 15v109.646c-19.836 14.084-33 38.556-33 66.354 0 41.662 29.55 75.871 66.858 78.776.161.429-1.858-5.257-1.858-12.776z" />
              <path d="m288 393h-64c-20.671 0-38.255 13.42-44.531 32h-3.469c-21.787 0-40.285-14.298-46.636-34-20.873 0-23.839.419-31.202-1.592 6.389 37.194 38.849 65.592 77.838 65.592h3.469c6.276 18.58 23.86 32 44.531 32h64c25.916 0 47-21.084 47-47s-21.084-47-47-47z" />
              <path d="m128.815 169c10.313-65.064 63.56-114 127.185-114s116.872 48.936 127.185 114c20.341 0 23.264-.402 30.51 1.551-10.045-82.583-77.105-145.551-157.695-145.551s-147.65 62.968-157.695 145.551c7.225-1.947 10.172-1.551 30.51-1.551z" />
              <path d="m402 199h-33.976c-8.271 0-15 6.729-15 15v132c0 8.271 6.729 15 15 15h33.976c8.271 0 15-6.729 15-15v-132c0-8.271-6.729-15-15-15z" />
              <path d="m110 361h34c8.271 0 15-6.729 15-15v-132c0-8.271-6.729-15-15-15h-34c-8.271 0-15 6.729-15 15v132c0 8.271 6.729 15 15 15z" />
              <path d="m445.142 201.224c-.026-.103 1.858 5.509 1.858 12.776v132c0 7.829-2.084 13.227-1.858 12.776 37.308-2.905 66.858-37.114 66.858-78.776s-29.55-75.871-66.858-78.776z" />
            </g>
          </svg>
          <div className="">
            <h3 className="title">Technical Support</h3>
            <p>
              Let's get your problem solved. Contact our technical support team
              for help.
            </p>
            <Link href="/faq">
              <span className="link">Contact Support</span>
            </Link>
          </div>
        </div>
        <div className="content">
          <svg
            className="icon"
            x="0px"
            y="0px"
            width="552.855px"
            height="552.855px"
            viewBox="0 0 552.855 552.855"
          >
            <g>
              <g>
                <path
                  d="M511.9,157.425c-3.408-25.845-17.057-53.513-40-76.463c-22.943-22.944-50.605-36.585-76.445-39.994
			c-11.695-1.542-27.307-8.005-36.664-15.184C338.1,9.915,308.889,0,276.434,0s-61.665,9.915-82.351,25.784
			c-9.357,7.179-24.97,13.642-36.665,15.184c-25.845,3.409-53.501,17.05-76.445,39.994c-22.944,22.95-36.592,50.619-40,76.463
			c-1.536,11.695-8.005,27.295-15.178,36.653c-15.875,20.686-25.79,49.896-25.79,82.35c0,32.455,9.915,61.666,25.784,82.352
			c7.179,9.357,13.642,24.963,15.178,36.652c3.409,25.844,17.056,53.514,40,76.463c22.944,22.943,50.606,36.586,76.445,39.994
			c11.695,1.543,27.308,8.006,36.665,15.184c20.686,15.869,49.896,25.783,82.351,25.783c32.455,0,61.666-9.914,82.352-25.783
			c9.357-7.178,24.969-13.641,36.664-15.184c25.846-3.408,53.502-17.051,76.445-39.994c22.943-22.949,36.592-50.619,40-76.463
			c1.537-11.695,8.006-27.295,15.178-36.652c15.869-20.686,25.783-49.896,25.783-82.352c0-32.454-9.914-61.665-25.783-82.35
			C519.9,184.72,513.438,169.12,511.9,157.425z M309.525,433.191c0,6.764-5.484,12.24-12.24,12.24h-39.652
			c-6.756,0-12.24-5.477-12.24-12.24v-39.65c0-6.764,5.483-12.24,12.24-12.24h39.652c6.756,0,12.24,5.477,12.24,12.24V433.191z
			 M384.502,243.674c-7.994,12.632-25.068,29.823-51.238,51.58c-13.543,11.26-21.951,20.312-25.221,27.16
			c-2.447,5.135-3.904,13.305-4.344,24.51c-0.264,6.758-5.588,12.234-12.352,12.234h-33.72c-6.757,0-12.301-3.428-12.369-7.65
			c-0.061-3.916-0.098-6.463-0.098-7.643c0-18.869,3.122-34.389,9.357-46.562c6.243-12.172,18.715-25.862,37.429-41.083
			c18.717-15.214,29.896-25.184,33.545-29.896c5.631-7.454,8.445-15.673,8.445-24.651c0-12.479-4.975-23.164-14.945-32.069
			c-9.969-8.904-23.391-13.354-40.281-13.354c-11.604,0-21.842,2.356-30.741,7.068c-5.973,3.164-14.406,10.355-18.476,15.753
			c-4.541,6.022-8.219,13.268-11.034,21.738c-2.136,6.414-8.636,11.138-15.349,10.306l-34.584-4.29
			c-6.714-0.833-11.897-6.995-10.698-13.648c3.978-22.032,15.098-41.114,33.354-57.24c21.53-19.021,49.792-28.531,84.786-28.531
			c36.824,0,66.107,9.626,87.865,28.874c21.756,19.248,32.639,41.653,32.639,67.216
			C396.484,217.658,392.488,231.048,384.502,243.674z"
                />
              </g>
            </g>
          </svg>
          <div className="">
            <h3 className="title">FAQ</h3>
            <p>
              Have a simple question? Find the answer in our knowledge base.
            </p>
            <Link href="/faq">
              <a className="link">Check out FAQ</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
