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
        <div className="text-3xl font-bold">🏠</div>

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
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
