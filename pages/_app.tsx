import { AppPropsWithLayout } from "@/constant";

import { Provider } from "react-redux";
import "../styles/globals.css";

import { DefaulLayout, MainLayout } from "@/components/layout";
import store from "@/store/store";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || DefaulLayout;

  return (
    <Provider store={store}>
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
