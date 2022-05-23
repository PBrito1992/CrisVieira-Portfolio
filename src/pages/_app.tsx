import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import AppContextProvider from "context/app-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
