import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";

export default function () {
  return (
    <section className="dashboard">
      <Head>
        <title>EA: betting :: Record</title>
      </Head>
      <Navbar />
    </section>
  );
}
