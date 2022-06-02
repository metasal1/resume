import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function backend() {
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
          <div className="typewrite">TypeScript</div>
          <div className="tenure">0.5 year</div>
          <code>
            Love it or hate it! It saves your 🎒-side enough times and deserves
            more respect!
          </code>
        </div>
        <div className="typewrite">React JS</div>
        <div className="tenure">2 years</div>

        <code>
          Fell in 💓 years ago - but sometimes it feels like it&apos;s not
          mutual!
        </code>
        <div className="typewrite">Next JS</div>
        <div className="tenure">1 year</div>

        <code>
          All those nights wasted on ExpressJS makes me cry - but this is the
          future!
        </code>

        <div className="typewrite">HTML</div>
        <div className="tenure">7 years</div>
        <code>Marking up text using this language makes me feel hyper!</code>
        <div className="typewrite has-tooltip">
          CSS
          <span className="tooltip">I ❤️ Tailwind!</span>
        </div>
        <div className="tenure">5 years</div>

        <code>
          Style sheets that give you the 💩 but sure make&apos;s this site look
          good!
        </code>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
