import React, { useEffect, useState } from "react";
import {
  SportsEsports,
  ShortText,
  Assessment,
  AccountBalanceWallet,
  Settings,
  Sports,
  Dashboard,
  ArrowBack,
} from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setNavOpen } from "../store/action";

export default function Navbar() {
  const dispatch = useDispatch();
  const navOpen = useSelector((state) => state.initial.navOpen);
  const { pathname, push } = useRouter();
  useEffect(() => {
    if (pathname === "/dashboard" || pathname === "/dashboard/") {
      push("/dashboard/personal");
    }
  }, [pathname]);
  return (
    <div className={navOpen ? "navcenter active" : "navcenter"}>
      <div className="naviconbar">
        <div
          className={navOpen ? "bar active" : "bar"}
          onClick={() => {
            dispatch(setNavOpen());
          }}
        >
          <span className="shortbar" />
          <span className="shortbar" />
          <span className="shortbar" />
        </div>
        <Link href="/dashboard/personal">
          <a
            className={
              pathname === "/dashboard/personal"
                ? "navlinks active"
                : "navlinks"
            }
          >
            <div className="cont">
              <Dashboard />
              <span className="txt">Dashboard</span>
            </div>
          </a>
        </Link>
        <Link href="/dashboard/my-games">
          <a
            className={
              pathname === "/dashboard/my-games"
                ? "navlinks active"
                : "navlinks"
            }
          >
            <div className="cont">
              <SportsEsports />
              <span className="txt">My Games</span>
            </div>
          </a>
        </Link>
        <Link href="/dashboard/matches">
          <a
            className={
              pathname === "/dashboard/matches" ? "navlinks active" : "navlinks"
            }
          >
            <div className="cont">
              <Sports />
              <span className="txt">Matches</span>
            </div>
          </a>
        </Link>
        <Link href="/dashboard/record">
          <a
            className={
              pathname === "/dashboard/record" ? "navlinks active" : "navlinks"
            }
          >
            <div className="cont">
              <Assessment />
              <span className="txt">Game Records</span>
            </div>
          </a>
        </Link>
        <Link href="/dashboard/wallet">
          <a
            className={
              pathname === "/dashboard/wallet" ? "navlinks active" : "navlinks"
            }
          >
            <div className="cont">
              <AccountBalanceWallet />
              <span className="txt">Wallet</span>
            </div>
          </a>
        </Link>
        <Link href="/dashboard/settings">
          <a
            className={
              pathname === "/dashboard/settings"
                ? "navlinks active"
                : "navlinks"
            }
          >
            <div className="cont">
              <Settings />
              <span className="txt">settings</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
