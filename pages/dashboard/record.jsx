import React, { useDebugValue } from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { setNavOpen } from "../../store/action";
import { useDispatch } from "react-redux";
import Myrecord from "../../components/myrecord";

export default function () {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <section
        className="dashboard theme"
        onClick={() => {
          dispatch(setNavOpen(false));
        }}
      >
        <Head>
          <title>Troisplay :: Record</title>
        </Head>
        <Myrecord />
      </section>
    </>
  );
}
