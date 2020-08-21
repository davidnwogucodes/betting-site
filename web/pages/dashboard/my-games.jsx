import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";
import GamesPanel from "../../components/gamepanel";
import { divide } from "lodash";

export default function () {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <section
        className="dashboard Games theme"
        onClick={() => {
          dispatch(setNavOpen(false));
        }}
      >
        <Head>
          <title>Troisplay:: My Games</title>
        </Head>
        <GamesPanel />
      </section>
    </>
  );
}
