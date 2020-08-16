import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";

export default function () {
  return (
    <section className="dashboard theme">
      <Head>
        <title>EA: betting :: My Games</title>
      </Head>
      <Navbar />
    </section>
  );
}
