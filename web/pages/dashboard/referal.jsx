import Navbar from "../../components/navbar";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setNavOpen } from "../../store/action";

export default function () {
  const dispatch = useDispatch();
  return (
    <section
      className="dashboard theme Referal"
      onClick={() => {
        dispatch(setNavOpen(false));
      }}
    >
      <Head>
        <title>Troisplay:: Referals</title>
      </Head>
      <Navbar />
      <div className="container_first theme"></div>
    </section>
  );
}
