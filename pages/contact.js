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
        <div className="card rounded-full font-bold">
          ☎️ CALL <br />
          <a className="hover:underline font-normal" href="tel:+61401222228">
            🇦🇺 +61 401 222 228 <br />
          </a>
          <a className="hover:underline font-normal" href="tel:+17868725140">
            🇺🇸 +1 786 872 5140
          </a>
        </div>
        <div className="card rounded-full font-bold">
          💬 TEXT
          <a className="hover:underline font-normal" href="sms:+61401222228">
            0401 222 228
          </a>
        </div>
        <Link href="/email">
          <div className="btn-primary">
            ✉️ EMAIL <br />
            <a
              className="hover:underline font-normal"
              href="mailto:salim@outlook.com.au?subject=We want to hire you!&body=When can you start?"
            ></a>
          </div>
        </Link>
        <div className="card rounded-full font-bold">
          📮 VOICEMAIL
          <audio controls></audio>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
