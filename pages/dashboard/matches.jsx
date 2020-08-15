import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";

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
          <title>EA: betting :: Matches</title>
        </Head>
      </section>
    </>
  );
}
