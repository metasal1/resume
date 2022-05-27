import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Qualifcations() {
  return (
    <>
      <Head>
        <title>
          Salim Karim&apos;s Skills | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">👨🏽‍💻 Skills</div>

        <div className="">
          <div className="typewrite">HTML</div>
          <code>Marking up text using this language makes me feel hyper!</code>
          <div className="typewrite">CSS</div>
          <code>Style sheets that give you the 💩 but sure make&apos;s this site look good!</code>
          <div className="typewrite">React JS</div>
          <code>Fell in 💓 years ago - but sometimes it feels like it&apos;s not mutual!</code>
          <div className="typewrite">Next JS</div>
          <code>All those nights wasted on ExpressJS makes me cry - but this is the future!</code>
          <div className="typewrite">Node JS</div>
          <code>The Backend Server to put all other fat, heavy and embrassing servers to shame!</code>
          <div className="typewrite">TypeScript</div>
          <code>Love it or hate it! It saves your 🎒-side enough times and deserves more respect!</code>

        </div>
      </div>
      <Link href="/">
        <a className="backarrow">
          &larr;
        </a>
      </Link>
    </>
  );
}
