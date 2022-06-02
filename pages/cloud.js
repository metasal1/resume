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
        <div className="text-5xl font-bold">☁️ Cloud</div>

        <div className="">
          <div className="typewrite">Microsoft Azure</div>
          <div className="tenure">3 years</div>
          <code>
            The Backend Server to put all other fat, heavy and embrassing
            servers to shame!
          </code>
          <div className="typewrite">Amazon AWS</div>
          <div className="tenure">3 years</div>
          <code>
            The Backend Server to put all other fat, heavy and embrassing
            servers to shame!
          </code>
          <div className="typewrite">Google GCP</div>
          <div className="tenure">0.5 year</div>
          <code>
            Love it or hate it! It saves your 🎒-side enough times and deserves
            more respect!
          </code>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
