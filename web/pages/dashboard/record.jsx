import React, { useDebugValue } from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { setNavOpen } from "../../store/action";
import { useDispatch } from "react-redux";

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
        <title>Troisplay :: Record</title>
      </Head>
      <Navbar />
    </section>
  );
}
