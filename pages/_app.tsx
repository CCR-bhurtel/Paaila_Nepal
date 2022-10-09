import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
