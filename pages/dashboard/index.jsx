import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";

export default function () {
  return (
    <>
      <Navbar />
      <section className="dashboard theme" />
    </>
  );
}
