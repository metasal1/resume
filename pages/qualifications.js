import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Qualifications() {
  return (
    <>
      <Head>
        <title>
          About Salim Karim | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-3xl font-bold">🏠 Home</div>

        <div className="p-4">
          <div>Bachelor of Computing </div>
          <sup>Monash University</sup>
          <div>Diploma of Engineering </div>
          <sup>RMIT</sup>
          <div>Certificate IV in Training</div>
          <sup> Box Hill Institute</sup>
          <div>Certified Custom Apps Developer</div>
          <sup>Zendesk</sup>
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
