import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";

export default function () {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <section
        className="dashboard"
        onClick={() => {
          dispatch(setNavOpen(false));
        }}
      >
        <Head>
          <title>EA: betting :: Personal</title>
        </Head>
      </section>
    </>
  );
}
