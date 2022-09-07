import type { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";

import "antd/dist/antd.min.css";
import "../assets/css/global.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { store } from "../redux/store";
import Layout from "../components/Layout";
import { I18nextProvider } from "react-i18next";

import i18n from "../translation";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </Provider>
  );
}
