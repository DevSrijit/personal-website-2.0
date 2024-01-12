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
          name="keywords"
          content="srijit, srijit ghosh, srijit ghosh developer, srijit developer, srijit ghosh coder, srijit coder, srijit ghosh teenager, srijit teenager, srijit .life, srijit ghosh .life"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
