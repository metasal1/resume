import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Head>
        <title>
          Get in touch with Salim Karim | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">📇 Contact</div>
        <div className="card">☎️ CALL
          <a href="tel:+61401222228" target="_blank" rel="noreferrer">
            <div className="btn-primary">🇦🇺 +61 401 222 228</div>
          </a>
          <a href="tel:+17868725140" target="_blank" rel="noreferrer">

            <div className="btn-primary"> 🇺🇸 +1 786 872 5140</div>
          </a>
        </div>
        <Link href="/sms">
          <div className="btn-primary">
            💬 SMS
          </div>
        </Link>
        <Link href="/email">
          <div className="btn-primary">
            ✉️ EMAIL <br />

          </div>
        </Link>
        <div className="btn-primary">
          📮 VOICEMAIL
          <audio className="m-auto" controls></audio>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
