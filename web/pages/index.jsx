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
            Here is a platform that brings your love for money and passion for
            competition all in one place.
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
      <div className="second_first">
        <span className="icon"></span>
        <div className="title">About US</div>
        <p className="txt">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur
          cumque iure. Reiciendis, rerum adipisci. Necessitatibus culpa nostrum,
          molestiae saepe soluta totam tenetur fugiat sed doloribus earum
          corporis aut dicta?
        </p>
      </div>
      <div className="second">
        <div className="content">
          <div className="main_txt">
            integrate your workflow with Troisplay consulting
          </div>
        </div>
        <div className="container">
          <div className="block">
            <span className="img" role="img" />
            <h3 className="title">Troisplay Business Manager</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              dolorum quam quisquam totam qui eaque ipsa ullam nam, repudiandae
              tenetur blanditiis, ad nec
            </p>
          </div>
          <div className="block">
            <span className="img" role="img" />
            <h3 className="title">Troisplay Process Manager</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              dolorum quam quisquam totam qui eaque ipsa ullam nam, repudiandae
              tenetur blanditiis, ad nec
            </p>
          </div>
          <div className="block">
            <span className="img" role="img" />
            <h3 className="title">Troisplay Business App</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              dolorum quam quisquam totam qui eaque ipsa ullam nam, repudiandae
              tenetur blanditiis, ad nec
            </p>
          </div>
        </div>
        <div className="action">try now</div>
      </div>
      <div className="thrid_first">
        <div className="title">our features</div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
        <div className="content">
          <span className="icon"></span>
          <span className="sub_title">stuff</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            neque debitis laborum tempora, molestias deleniti? Amet mollitia
            earum qui accusantium!
          </p>
        </div>
      </div>
      <div className="thrid">
        <div className="container">
          <span className="img" />
          <div className="content">
            <h3 className="title">Process Discovery (Mapping)</h3>
            <p>
              No process documentation? Scattered, incomplete, out of date,
              widely ignored process documentation? We get the process out of
              people's heads and into a process map, the single most powerful
              tool to help you gain control of your processes.
            </p>
            <span className="action">view documentation</span>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h3 className="title">Digitalized Process Documentation </h3>
            <p>
              We develop a process library for your orgnanization and support in
              documenting and putting your processes and work instruction in a
              digital platform. This will help in current and future process
              improvement exercises. Often times process paper documentation get
              neglected and outdated without being enforceable
            </p>
            <span className="action">view documentation</span>
          </div>
          <span className="img" />
        </div>
        <div className="container">
          <span className="img" />
          <div className="content">
            <h3 className="title">Process Improvement (Advisory)</h3>
            <p>
              Only once the current processes are mapped can we start to improve
              them. We will guide your team to solve their own problems using an
              effective methodology.
            </p>
            <span className="action">view documentation</span>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h3 className="title">Work Digitilization & process automation</h3>
            <p>
              With our Troisplay Business Manager, organizations especially SMEs
              are able to digitize repetitive tasks/ processes as defined in
              their process documentations. This repetitive processes account
              for more than 80% of an organizations man hour while contributing
              about 20% to value recogized by the client.The processes include
              request for approvals (leave, expense, loan etc), activity/ task
              tracking, reporting, filing, registration & onbaording.{" "}
            </p>
            <span className="action">view documentation</span>
          </div>
          <span className="img" />
        </div>
      </div>
      <div className="forth">
        <div className="title">Start using Troisplay today</div>
        <p>
          get started in seconds, integrating and customizing your workflow into
          Troisplay
        </p>
        <div className="btns">
          <Link href="/get-started">
            <a className="btn">get started</a>
          </Link>
          <Link href="/contact-us">
            <a className="btn">contact us</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
