import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";

export default function () {
  const dispatch = useDispatch();
  return (
    <section
      className="dashboard theme"
      onClick={() => {
        dispatch(setNavOpen(false));
      }}
    >
      <Head>
        <title>Troisplay :: Settings</title>
      </Head>
      <Navbar />
    </section>
  );
}
