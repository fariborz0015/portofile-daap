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
        <meta
          property="og:description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta property="og:image" content="/images/avatar.jpg" />
        <meta property="og:url" content="http://fariborz.vercel.app" />
        <meta
          property="twitter:description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta property="twitter:image" content="/images/avatar.jpg" />
        <meta property="twitter:url" content="http://fariborz.vercel.app" />


        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Fariborz Shalghouni por</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
