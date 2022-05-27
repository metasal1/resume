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

        <div className="p-10">
         <div className="cursor-pointer" onClick={()=> window.location.href='tel:+61401222228'}>0401 222 228</div>
         <div className="cursor-pointer" onClick={()=> window.location.href='mailto:salim@outlook.com.au?subject=I want to hire you!&body=When can you start?'}>salim@outlook.com.au</div>
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
