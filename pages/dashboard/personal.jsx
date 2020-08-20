import React from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";
import Panel from "../../components/panel";
import { Button } from "@material-ui/core";
import { DownIcon, UpIcon } from "../../components/icons";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Dashboardheader from "../../components/dashboardheader";

const data = [
  {
    name: "7th",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "8th",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "9th",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "10th",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11th",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12th",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "13th",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function () {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <section
        className="dashboard personal theme"
        onClick={() => {
          dispatch(setNavOpen(false));
        }}
      >
        <Head>
          <title>Troisplay :: Dashboard Personal</title>
        </Head>
        <Dashboardheader />
        <Panel />
        <div className="container">
          <div className="container_track">
            <div className="main_title">
              <h3 className="title">GamePlay OverView</h3>
            </div>
            <Button className="track">
              <span className="con">
                <span className="count">8545</span>
                <span className="title_">winnings</span>
                <span className="g_flow up">
                  <UpIcon /> 20%
                </span>
              </span>
            </Button>
            <Button className="track">
              <span className="con">
                <span className="count">85</span>
                <span className="title_">losses</span>
                <span className="g_flow down">
                  <DownIcon /> 20%
                </span>
              </span>
            </Button>
            <Button className="track">
              <span className="con">
                <span className="count">
                  <strong>&#8358;</strong>85876
                </span>
                <span className="title_">Earnings</span>
                <span className="g_flow up">
                  <UpIcon /> 20%
                </span>
              </span>
            </Button>
          </div>
          <div className="container_map">
            <div className="main_head">
              <h3 className="title_">
                <strong>Your</strong>Game analysis
              </h3>
              <div className="selector">
                <Button className="oo active">day</Button>
                <Button className="oo">week</Button>
                <Button className="oo">quater</Button>
                <Button className="oo">year</Button>
              </div>
              <span className="query">today</span>
            </div>
            <ResponsiveContainer
              width="100%"
              height={350}
              minHeight={300}
              maxHeight={450}
            >
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="65%" stopColor="#FF5722" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF5722" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="65%" stopColor="#101010" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#101010" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#FF5722"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#101010"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="container_not">
          <h3 className="title_">Requests</h3>
          <div className="noti">
            <div className="main">
              <div className="date">
                <span>03:00 am</span>
                <span>10th, August 2020</span>
              </div>
              <div className="btw">
                <span className="avatar" />
                <span className="avatar" />
              </div>
            </div>
            <div className="games"></div>
            <span className="cash">
              <strong>BEt:</strong> <b>&#8358;</b> 40032
            </span>
            <div className="action">
              <Button className="btn_">Accept</Button>
              <Button className="btn_">Reject</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
