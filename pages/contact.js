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
<div className="btn-primary">🇦🇺 +61 401 222 228</div>
<div className="btn-primary"> 🇺🇸 +1 786 872 5140</div>
        </div>
        <div className="btn-primary">
          💬 TEXT
          <a className="hover:underline font-normal" href="sms:+61401222228">
          </a>
        </div>
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
