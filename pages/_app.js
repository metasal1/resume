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
        exitBeforeEnter
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: .1,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
        <Ticker />
      </motion.div>
      <div className="text-xs font-thin p-2 text-white">
        &copy; {new Date().getFullYear()}
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
