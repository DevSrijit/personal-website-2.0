import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system">
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
  );
};

export default App;
