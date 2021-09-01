import "../styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { AuthStateProvider } from "../providers/AuthStateProvider";
import { AppStateProvider } from "../providers/AppStateProvider";
import authReducer, { initAuth } from "../reducers/authReducer";
import appReducer, { initApp } from "../reducers/appReducer";

library.add(fab);

function MyApp({ Component, pageProps }) {
  return (
    <AuthStateProvider initialState={initAuth} reducer={authReducer}>
      <AppStateProvider initialState={initApp} reducer={appReducer}>
        <Component {...pageProps} />
      </AppStateProvider>
    </AuthStateProvider>
  );
}

export default MyApp;
