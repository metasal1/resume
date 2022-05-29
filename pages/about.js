import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>About Salim Karim | Full Stack Developer Melbourne</title>
      </Head>
      <div className="card">
        <div className="text-3xl font-bold">🏠 Statement</div>
        <div className="p-4 text-2xl">
          <div>
            Salim is a passionate and hard-working developer who has a proven
            track record of creating solutions and products that exceed business
            and spec requirements. For his next challenge, Salim is looking to
            push himself to grow his already well-established creativity and
            problem-solving skills to continue his development as a full stack
            developer.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="text-2xl font-bold">🏃🏽‍♂️ Hobbies</div>
        <div className="p-4 text-1xl">
          <div className="grid grid-cols-3">
            <div>Running</div>
            <div>Swimming</div>
            <div>Cricket</div>
            <div>Reading</div>
            <div>Writing</div>
            <div>Creating</div>
          </div>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
