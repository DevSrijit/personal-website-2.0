import { Html, Head, Main, NextScript, Meta } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Srijit's Personal Website." />
        <meta
          name="description"
          content="Srijit Ghosh is a 16 year old frontend developer and technologist. This is his personal website."
        />
        <meta
          property="og:image"
          content="https://cloud-d5en4ol6h-hack-club-bot.vercel.app/0logo_lg.png"
        />
        <meta
          name="twitter:image"
          content="https://cloud-d5en4ol6h-hack-club-bot.vercel.app/0logo_lg.png"
        />
        <meta
          name="keywords"
          content="srijit, srijit ghosh, srijit ghosh developer, srijit developer, srijit ghosh coder, srijit coder, srijit ghosh teenager, srijit teenager, srijit .life, srijit ghosh .life, teenager srijit, teenager srijit ghosh, srijit hackclub, srijit ghosh hackclub, srijit ghosh hackclubber, srijit hackclubber, srijit codeday, srijit ghosh codeday, srijit codeday kolkata, srijit ghosh codeday kolkata, codeday kolkata, codeday, hackclub, the code cafe, the code cafe leaders, the code cafe hackclub, the code cafe founder"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Srijit Ghosh" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
