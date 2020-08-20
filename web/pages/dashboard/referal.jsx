import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";
import { Button } from "@material-ui/core";

export default function () {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <section
        className="dashboard theme Referal"
        onClick={() => {
          dispatch(setNavOpen(false));
        }}
      >
        <Head>
          <title>Troisplay:: Referals</title>
        </Head>
        <div className="container_first theme">
          <span className="title">Referal Earnings</span>
          <div className="content">
            <span className="icon" />
            <span className="count">9.8765 TPC</span>
          </div>
          <div className="content_">
            <div className="item">
              <span className="name">Total Earning</span>
              <span className="value">8765434567</span>
            </div>
            <div className="item">
              <span className="name">Current Earning</span>
              <span className="value">8765434567</span>
            </div>
            <div className="item">
              <span className="name">Used Earning</span>
              <span className="value">8765434567</span>
            </div>
            <div className="item">
              <Button className="btn_">
                <span className="icon" /> refer
              </Button>
            </div>
          </div>
        </div>
        <div className="container_first theme">
          <span className="title">Referal Record</span>
          <div className="content">
            <span className="icon" />
            <span className="count">9.8765 TPC</span>
          </div>
          <div className="content_">
            <div className="item">
              <span className="name">Total Earning</span>
              <span className="value">8765434567</span>
            </div>
            <div className="item">
              <span className="name">Current Earning</span>
              <span className="value">8765434567</span>
            </div>
            <div className="item">
              <span className="name">Used Earning</span>
              <span className="value">8765434567</span>
            </div>
            <div className="item">
              <Button className="btn_">
                <span className="icon" /> refer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
