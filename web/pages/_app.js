import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/home.scss";
import "../styles/login.scss";
import "../styles/signup.scss";
import "../styles/contact.scss";
import "../styles/navbar.scss";
import "../styles/dashboard.scss";
import "../styles/personal.scss";
import "../styles/panel.scss";
import "../styles/wallet.scss";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
