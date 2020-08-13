import Head from "next/head";
import Header from "../components/header";

export default function () {
  return (
    <section className="Home">
      <Head>
        <title>EA Bet :: the master of sport</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="first">
        <div className="left">
          <span className="img" />
          <span className="img" />
          <span className="img" />
          <span className="img" />
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
}
