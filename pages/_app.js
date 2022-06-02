import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Ticker from "./components/Ticker";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
        <Component {...pageProps} />
        <Ticker />
        <Footer />
    </AnimatePresence>
  )
}


export default MyApp;
