import Head from "next/head";
import Header from "../components/header";
import Link from "next/link";
import { SportsEsports } from "@material-ui/icons";
import { Fab } from "@material-ui/core";

export default function () {
  return (
    <section className="Home">
      <Head>
        <title>Troisplay :: the master of sport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="first">
        <div className="left">
          <span className="img" />
          <span className="img" />
          <span className="img" />
          <span className="img" />
          <span className="img" />
        </div>
        <div className="right">
          <h3 className="txt">
            Play<strong>.</strong>Win<strong>.</strong>Share
          </h3>
          <h2 className="txt">master of your games</h2>
          <span className="txt">
            place orders from top chefs nation wide in your location and get it
            delivered to you all from the comform of you home.
          </span>
          <div className="action">
            <div className="txt_">
              Start earning in just 1 mins
              <div>
                10% <span>off</span>
              </div>
            </div>
            <Fab variant="extended" className="btn_">
              <Link href="/signup">
                <a>
                  <SportsEsports /> Join
                </a>
              </Link>
            </Fab>
          </div>
        </div>
      </div>
    </section>
  );
}
