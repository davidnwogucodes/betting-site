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
import { setNavOpen, setTheme } from "../store/action";
import { Tooltip } from "@material-ui/core";
import { DarkIcon, LightIcon } from "./icons";

function Navbar() {
  const dispatch = useDispatch();
  const navOpen = useSelector((state) => state.initial.navOpen);
  const theme = useSelector((state) => state.initial.theme);
  useEffect(() => {
    document.querySelectorAll(".theme").forEach((themecon) => {
      themecon.classList.remove("light-mode");
      themecon.classList.remove("dark-mode");
      themecon.classList.add(theme);
    });
    let defaultTheme = localStorage.getItem("theme") ?? "light-mode";
    if (defaultTheme !== theme) {
      dispatch(setTheme(defaultTheme));
    }
  }, [theme]);
  const { pathname, push } = useRouter();
  useEffect(() => {
    if (pathname === "/dashboard" || pathname === "/dashboard/") {
      push("/dashboard/personal");
    }
    setTimeout(() => {
      dispatch(setNavOpen(false));
    }, 200);
  }, [pathname]);
  return (
    <>
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
      <div
        className={
          navOpen
            ? `navcenter active theme ${theme}`
            : `navcenter theme ${theme}`
        }
      >
        <div className="main_title_">
          <span className="titlename theme">Troisplay</span>
          <div
            className="themechanger light"
            onClick={() => {
              dispatch(setTheme(false));
              dispatch(setNavOpen(false));
              localStorage.setItem("theme", "dark-mode");
            }}
          >
            <DarkIcon />
          </div>
          <div
            className="themechanger dark"
            onClick={() => {
              dispatch(setNavOpen(false));
              dispatch(setTheme(true));
              localStorage.setItem("theme", "light-mode");
            }}
          >
            <LightIcon />
          </div>
        </div>
        <div className="naviconbar">
          <Link href="/dashboard/personal">
            <a
              className={
                pathname === "/dashboard/personal"
                  ? "navlinks active theme"
                  : "navlinks theme"
              }
            >
              <div className="cont">
                <Tooltip
                  arrow
                  className={navOpen ? "tippy hide" : "tippy"}
                  title="Personal"
                  placement="right"
                >
                  <Dashboard />
                </Tooltip>
                <span className="txt">Dashboard</span>
              </div>
            </a>
          </Link>
          <Link href="/dashboard/my-games">
            <a
              className={
                pathname === "/dashboard/my-games"
                  ? "navlinks active theme"
                  : "navlinks theme"
              }
            >
              <div className="cont">
                <Tooltip
                  arrow
                  className={navOpen ? "tippy hide" : "tippy"}
                  title="My Games"
                  placement="right"
                >
                  <SportsEsports />
                </Tooltip>
                <span className="txt">Play Game</span>
              </div>
            </a>
          </Link>
          <Link href="/dashboard/record">
            <a
              className={
                pathname === "/dashboard/record"
                  ? "navlinks active theme"
                  : "navlinks theme"
              }
            >
              <div className="cont">
                <Tooltip
                  arrow
                  className={navOpen ? "tippy hide" : "tippy"}
                  title="Games Record"
                  placement="right"
                >
                  <Assessment />
                </Tooltip>
                <span className="txt">Game Records</span>
              </div>
            </a>
          </Link>
          <Link href="/dashboard/wallet">
            <a
              className={
                pathname === "/dashboard/wallet"
                  ? "navlinks active theme"
                  : "navlinks theme"
              }
            >
              <div className="cont">
                <Tooltip
                  arrow
                  className={navOpen ? "tippy hide" : "tippy"}
                  title="Wallet"
                  placement="right"
                >
                  <AccountBalanceWallet />
                </Tooltip>
                <span className="txt">Wallet</span>
              </div>
            </a>
          </Link>
          <Link href="/dashboard/matches">
            <a
              className={
                pathname === "/dashboard/matches"
                  ? "navlinks active theme"
                  : "navlinks theme"
              }
            >
              <div className="cont">
                <Tooltip
                  arrow
                  className={navOpen ? "tippy hide" : "tippy"}
                  title="Matches"
                  placement="right"
                >
                  <Sports />
                </Tooltip>
                <span className="txt">My referrals</span>
              </div>
            </a>
          </Link>
          <Link href="/dashboard/settings">
            <a
              className={
                pathname === "/dashboard/settings"
                  ? "navlinks active theme"
                  : "navlinks theme"
              }
            >
              <div className="cont">
                <Tooltip
                  arrow
                  className={navOpen ? "tippy hide" : "tippy"}
                  title="Settings"
                  placement="right"
                >
                  <Settings />
                </Tooltip>
                <span className="txt">settings</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
