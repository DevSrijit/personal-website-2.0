import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Srijit's Personal Website",
  description:
    "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
  author: "Srijit Ghosh",
  openGraph: {
    type: "website",
    url: "https://srijit.life",
    title: "Srijit's Personal Website",
    description:
      "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
    images: [
      {
        url: "https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg",
        width: 1200,
        height: 630,
        alt: "Image description",
      },
    ],
    site_name: "Srijit's Personal Website",
  },
  twitter: {
    handle: "@CheeseBlock011",
    cardType: "summary_large_image",
    title: "Srijit's Personal Website",
    description:
      "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
    image:
      "https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg",
  },
};

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
            "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
          images: [
            {
              url: "https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg",
              width: 1200,
              height: 630,
              alt: "Image description",
            },
          ],
          site_name: "Srijit's Personal Website",
        }}
        // For Twitter
        twitter={{
          handle: "@CheeseBlock011",
          cardType: "summary_large_image",
          title: "Srijit's Personal Website",
          description:
            "Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.",
          image:
            "https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg",
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
