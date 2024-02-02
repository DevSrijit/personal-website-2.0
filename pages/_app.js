import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import * as gtag from "../utils/gtag";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <ThemeProvider defaultTheme="light">
      <Analytics />
      <SpeedInsights />
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://srijit.life",
          title: "Srijit's Personal Website",
          description:
            "Srijit Ghosh is a 16 year old frontend developer and technologist. This is his personal website.",
          site_name: "Srijit's Personal Website",
        }}
        // For Twitter
        twitter={{
          handle: "@CheeseBlock011",
          cardType: "summary_large_image",
          title: "Srijit's Personal Website",
          description:
            "Srijit Ghosh is a 16 year old frontend developer and technologist. This is his personal website.",
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
};

export default App;
