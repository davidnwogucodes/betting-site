import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import Particles from "react-particles-js";
import { CoinIcon, PlayIcon } from "../../components/icons";
import { Fab } from "@material-ui/core";
import {
  AccountBalance,
  MonetizationOn,
  Payment,
  Redeem,
} from "@material-ui/icons";

export default function () {
  return (
    <section className="dashboard theme Wallet">
      <Head>
        <title>EA: betting :: Wallet</title>
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
      </Head>
      <Navbar />
      <section className="first">
        <div className="left">
          <h3 className="title_txt theme">Wallet</h3>
          <div className="pay_card">
            <div className="icon">
              <span className="front">
                <PlayIcon />
              </span>
              <span className="back">
                <CoinIcon />
              </span>
            </div>
            <div className="option">
              <div className="op">
                <Fab className="btn_">
                  <MonetizationOn />
                </Fab>
                <p>deposite</p>
              </div>
              <div className="op">
                <Fab className="btn_">
                  <AccountBalance />
                </Fab>
                <p>withdraw</p>
              </div>
              <div className="op">
                <Fab className="btn_">
                  <Payment />
                </Fab>
                <p>transfer</p>
              </div>
              <div className="op">
                <Fab className="btn_">
                  <Redeem />
                </Fab>
                <p>redeem</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="title_txt theme">History</h3>
          <div className="history">
            <div className="stack">
              <span className="transaction_date">10th April, 2020</span>
              <span className="amount">$30000</span>
              <span className="method">transfer</span>
              <span className="transaction_id">Transaction ID: 9876545678</span>
            </div>
            <div className="stack">
              <span className="transaction_date">01th April, 2020</span>
              <span className="amount">$30000</span>
              <span className="method">transfer</span>
              <span className="transaction_id">Transaction ID: 9876545678</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
