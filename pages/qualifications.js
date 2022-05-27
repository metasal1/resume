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
          Salim Karim&apos;s Qualifications | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">📜 Qualifications</div>

        <div className="p-10">
          <div>Bachelor of Computing </div>
          <sup>Monash University</sup>
          <div>Diploma of Engineering </div>
          <sup>RMIT</sup>
          <div>Certificate IV in Training</div>
          <sup> Box Hill Institute</sup>
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
