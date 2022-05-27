import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Developer Melbourne</title>
      </Head>
      <div className="center justify-center items-center place-content-center">
        <div className="w-48 md:w-96 lg:w-256">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Image
              src="/salim.png"
              width={400}
              height={400}
              alt="Artist's impression of Salim"
            />
          </motion.div>
        </div>
        <div className="text-4xl md:text-6xl lg:7-xl">Salim Karim</div>
        <p className="decoration-dotted -skew-y-3 bg-gray-200 m-3">
          Full Stack Developer
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/">
            <a className="btn-primary">Home</a>
          </Link>
          <Link href="/contact">
            <a className="btn-primary">Contact</a>
          </Link>
          <Link href="/skills">
            <a className="btn-primary">Skills</a>
          </Link>
          <Link href="/projects">
            <a className="btn-primary">Projects</a>
          </Link>
          <Link href="/experience">
            <a className="btn-primary">Experience</a>
          </Link>
          <Link href="/qualifications">
            <a className="btn-primary">Qualifications</a>
          </Link>
          <Link href="/technology">
            <a className="btn-primary">Technology</a>
          </Link>
          <Link href="/tools">
            <a className="btn-primary">Tools</a>
          </Link>
        </div>
      </div>
    </>
  );
}
