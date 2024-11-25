import { AppProps } from "next/app";

import "../src/styles/reset.css";
import "../src/styles/global.css";
import { Layout } from "../src/components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
