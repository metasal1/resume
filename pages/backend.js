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
          Salim Karim&apos;s Backend Skills | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">👨🏽‍💻 Backend</div>

        <div className="">
          <div className="typewrite">Node JS</div>
          <div className="tenure">3 years</div>
          <code>
            The Backend Server to put all other fat, heavy and embrassing
            servers to shame!
          </code>
          <div className="typewrite">REST API's</div>
          <div className="tenure">3 years</div>
          <code>
            The Backend Server to put all other fat, heavy and embrassing
            servers to shame!
          </code>
          <div className="typewrite">TypeScript</div>
          <div className="tenure">0.5 year</div>
          <code>
            Love it or hate it! It saves your 🎒-side enough times and deserves
            more respect!
          </code>
        </div>
        <div className="typewrite">PHP</div>
        <div className="tenure">2 years</div>

        <code></code>
        <div className="typewrite">Python</div>
        <div className="tenure">1 year</div>

        <code>
          All those nights wasted on ExpressJS makes me cry - but this is the
          future!
        </code>
        <div className="typewrite">gRPC</div>
        <div className="tenure">0.08 year</div>

        <code>
          Very keen to learn and grow my RPC skills especially with Rust.
        </code>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
