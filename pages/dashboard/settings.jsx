import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";
import { Button, Fab } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";

export default function () {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <section
        className="dashboard Settings theme"
        onClick={() => {
          dispatch(setNavOpen(false));
        }}
      >
        <Head>
          <title>Troisplay :: Settings</title>
        </Head>
        <div className="setting_body"></div>
        <div className="setting_panel">
          <div className="head_">
            <Fab className="btn_ theme">
              <KeyboardBackspace />
            </Fab>
            <span className="name">Settings Panel</span>
          </div>
          <div className="content">
            <Button className="btn_ theme">
              <Link href="/dashboard/settings#general">
                <a>General Control</a>
              </Link>
            </Button>
            <Button className="btn_ theme">
              <Link href="/dashboard/settings#general">
                <a>General Control</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
