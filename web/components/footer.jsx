import React from "react";
import moment from "moment";
import { Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="title">
          <span className="logo" />
          <h3>Troisplay</h3>
        </div>
        <p>
          Reekta is breaking the cycle of believe that only large organizations
          can afford the tools and systems for digital transformation and that
          digital transformation is exclsuively for large organizations
        </p>
        <div className="links">
          <Fab className="link">
            <Facebook />
          </Fab>
          <Fab className="link">
            <Twitter />
          </Fab>
          <Fab className="link">
            <Instagram />
          </Fab>
        </div>
      </div>
      <div className="content">
        <h3 className="main_title">Dashboard Content</h3>
        <ul>
          <li>Games</li>
          <li>Record</li>
          <li>Deposite</li>
          <li>Withdraw</li>
          <li>Start Game</li>
        </ul>
      </div>
      <div className="content">
        <h3 className="main_title">Content</h3>
        <ul>
          <li>Blog</li>
          <li>Support</li>
          <li>Resource</li>
          <li>Term of service</li>
          <li>Privacy Policy</li>
          <li>Live Chat</li>
        </ul>
      </div>
      <span className="ryt">
        Copyright &copy;{moment().format("YYYY")} Troisplay LTD
      </span>
    </footer>
  );
}
