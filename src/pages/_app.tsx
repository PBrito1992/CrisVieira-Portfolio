import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import AppContextProvider from "context/app-context";
import Head from "next/head";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  richText: {
    resolver: (component, blok) => {
      if (component === "portfolio_breaking_rule") return "<br />";
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cristiana Vieira Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Cristiana Vieira and I'm a Digital Marketeer. I consider myself an organized, committed, empathetic and communicative person. I'm always looking for continuous improvement and personal development with focus on my goals and aiming to achieve good results. I'm motivated to continue self developing on either my personal and professional perspectives."
        />
        <meta
          name="keywords"
          content="social media, marketeer, digital marketing, freelancer, redes sociais, marketing, design, copywriting, publicidade, advertising, serviços de marketing, google ads, seo, produção de conteudos, portugal, gestao redes sociais, benchmarking, economico"
        />
      </Head>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
