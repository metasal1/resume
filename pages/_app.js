import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Ticker from "./components/Ticker";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0.1,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
            transition: {
              duration: 1,
            },
          },
        }}
      >
        <Component {...pageProps} />
        <Ticker />
      </motion.div>
      <div className="block text-xs font-thin p-2 text-white">
        &copy; {new Date().getFullYear()} {" | "}
        <a
        className="hover:underline"
          href="https://github.com/metasal1/resume"
          target="_blank" rel="noreferrer"
        >
          Feedback?
        </a>  
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
