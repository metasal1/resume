import "../styles/globals.css";
import { motion, AnimatePresence} from "framer-motion";
import Link from "next/link";
import Ticker from "./components/Ticker";

function MyApp({ Component, pageProps, router }) {
  return(
    <AnimatePresence>
  <motion.div
  key={router.route}
    initial="pageInitial"
    animate="pageAnimate"
    exit="pageExit"
    variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
      },
      pageExit : {
        opacity: 1
      }
    }}
  >
    <Component {...pageProps} />

  <Ticker />
  </motion.div>
    <div className="text-xs font-thin p-2 text-white">&copy; {new Date().getFullYear()}</div>
  </AnimatePresence>

  )
}

export default MyApp;
