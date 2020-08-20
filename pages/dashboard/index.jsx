import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import Setup from "../../components/setup";
import { setNavOpen } from "../../store/action";

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
        <Setup />
      </section>
    </>
  );
}
