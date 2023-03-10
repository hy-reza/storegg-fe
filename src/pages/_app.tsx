import "@/styles/utilities.css";
import "@/styles/homepage.css";
import "@/styles/detail.css"
import "@/styles/checkout.css"
import "@/styles/complete-checkout.css"
import "@/styles/sign-in.css"
import "@/styles/sign-up.css"
import "@/styles/sign-up-photo.css"
import "@/styles/sign-up-success.css"
import "@/styles/404-not-found.css"
import "@/styles/sidebar.css"
import "@/styles/overview.css"
import "@/styles/transactions.css"
import "@/styles/transactions-detail.css"
import "@/styles/edit-profile.css"
import "@/styles/navbar-log-in.css"
import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "@next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={poppins.className}>
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async />
        <Component {...pageProps} />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        />
      </main>
    </>
  );
}
