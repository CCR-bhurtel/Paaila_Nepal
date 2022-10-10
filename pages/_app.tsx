import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import LowerFoot from "../Components/Layout/LowerFoot";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative font-Inter overflow-hidden">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <LowerFoot />
    </div>
  );
}

export default MyApp;
