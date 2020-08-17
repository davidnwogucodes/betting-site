import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";
import Panel from "../../components/panel";

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
          <title>Troisplay :: Personal</title>
        </Head>
        <Panel />
      </section>
    </>
  );
}
