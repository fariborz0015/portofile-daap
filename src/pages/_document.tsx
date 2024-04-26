/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark !h-full">
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content={"black"} />
        <link rel="icon" href="/favicon.png" sizes="48x48" />
        <link rel="icon" href="/favicon.png" sizes="any" type="image" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta
          property="og:title"
          content="  Fariborz Shalghooni por - Senior FrontEnd Developer"
        />
        <meta name="card" content="summary_large_image" />
        <meta
          name="description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta
          property="og:description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta property="og:image" content="/avatar.jpg" />
        <meta property="og:url" content="https://fariborz.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta property="twitter:image" content="/avatar.jpg" />
        <meta property="twitter:url" content="https://fariborz.vercel.app" />

  
     
      </Head>
      <body>
   
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
