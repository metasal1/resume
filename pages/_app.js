import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Ticker from "./components/Ticker";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <div>
        <Component {...pageProps} />
        <Ticker />
        <div className="block text-xs font-thin p-2 text-white">
          &copy; {new Date().getFullYear()} {" | "}
          <a
            className="hover:underline"
            href="https://github.com/metasal1/resume"
            target="_blank"
            rel="noreferrer"
          >
            Feedback?
          </a>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
