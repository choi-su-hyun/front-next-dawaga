import Layout from "@/components/Layout";
import "./globals.scss";
import "@/styles/common.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "@/configs/recoil";
import Popup from "@/components/common/Modal/Popup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <RecoilRoot>
        <Component {...pageProps} />
        <Popup />
      </RecoilRoot>
    </Layout>
  );
}
