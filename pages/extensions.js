import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Extensions() {
  return (
    <>
      <Head>
        <title>
          Salim Karim&apos;s Favourite VS Code Extensions | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">🦸🏾‍♂️ Extensions</div>

        <div className="p-10">
          <div>Anchor</div>
          <div>Auto Rename Tag</div>
          <div>Better Comments</div>
          <div>Cobalt2 Theme</div>
          <div>Duplicate action</div>
          <div>ES7+ React</div>
          <div>ESLint</div>
          <div>Jupyter</div>
          <div>Live Server</div>
          <div>Lorem Ipsum</div>
          <div>LottieFiles</div>
          <div>Mermaid Editor</div>
          <div>ngrok for VSCode</div>
          <div>Quokka</div>
          <div>Tailwind CSS</div>
          <div>Vscode Blink Mind</div>

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
