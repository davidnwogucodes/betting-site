import React from "react";
import { Button } from "@material-ui/core";

export default function Myrecord() {
  return (
    <>
      <div>
        <div className="container_not">
          <h3 className="title_">Requests</h3>
          <div className="noti">
            <div className="main">
              <div className="date">
                <span>03:00 am</span>
                <span>10th, August 2020</span>
              </div>
              <div className="btw">
                <span className="avatar" />
                <span className="avatar" />
              </div>
            </div>
            <div className="games"></div>
            <span className="cash">
              <strong>BEt:</strong> <b>&#8358;</b> 40032
            </span>
            <div className="action">
              <Button className="btn_">Accept</Button>
              <Button className="btn_">Reject</Button>
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
    </>
  );
}
