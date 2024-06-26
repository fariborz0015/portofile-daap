// Imports
import RootLayout from "@/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import raf from "@studio-freight/tempus";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head'
if (typeof window !== "undefined") {
  // Register the ScrollTrigger plugin with gsap
  gsap.registerPlugin(ScrollTrigger);

  // Set default options for ScrollTrigger
  ScrollTrigger.defaults({});

  // Set lagSmoothing to 0 for the gsap ticker
  gsap.ticker.lagSmoothing(0);

  // Remove the updateRoot callback from the gsap ticker
  gsap.ticker.remove(gsap.updateRoot);

  // Add a callback to the requestAnimationFrame loop
  raf.add((time: number) => {
    // Update the root of the gsap animation system
    gsap.updateRoot(time / 1000);
  }, 0);
}

// Define the App component, which takes Component and pageProps as AppProps
export default function App({ Component, pageProps }: AppProps) {
  return (
    // Render the RootLayout component
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RootLayout>
        {/* Render the Toaster component with custom toastOptions */}
        <Toaster
          toastOptions={{
            className: "!bg-gray-800 bg-opacity-20 border !text-white",
          }}
        />
        {/* Render the Component with its props */}
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </RootLayout>
    </>
  );
}
