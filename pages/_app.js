import "../styles/globals.css";
import { motion, AnimatePresence} from "framer-motion";
import Link from "next/link";

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
        backgroundColor: 'white',
        filter: `invert()`,
        opacity: 1
      }
    }}
  >
    <Component {...pageProps} />
    <Link href="/">
      <a className="text-5xl m-2 hover:bg-white hover:-skew-y-6 cursor-grab">&larr;</a>
      </Link>
    <div>&copy; {new Date().getFullYear()}</div>
  </motion.div>
  </AnimatePresence>

  )
}

export default MyApp;
