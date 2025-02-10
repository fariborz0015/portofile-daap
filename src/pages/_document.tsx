/* eslint-disable @next/next/no-title-in-document-head */
import ClarityScript from "@/providers/ClarityScript";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark !h-full">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content={"black"} />
        <script src="/clarity-script.js" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
