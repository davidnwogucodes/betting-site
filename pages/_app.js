import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/home.scss";
import "../styles/login.scss";
import "../styles/signup.scss";
import "../styles/contact.scss";
import "../styles/navbar.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
