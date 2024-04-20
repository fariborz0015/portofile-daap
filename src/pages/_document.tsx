import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark !h-full">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta
          name="theme-color"
          content={"black"}
        />
        <link rel="icon" href="/favicon.png" sizes="48x48" />
        <link
          rel="icon"
          href="/favicon.png"
          sizes="any"
          type="image"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon.png"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="author" content="ExModules" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Persian" />
        <title>
          Fariborz Shalghouni por
        </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
