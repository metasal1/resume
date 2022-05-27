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
          Salim Karim&apos;s favourite tools | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">🧰 Favourite Tools</div>

        <div className="p-1">
          <div className="typewrite">VS Code</div>
          <code>I use vscode 6~ to 10~ hours every day!</code>
          <br></br>
          <sup>
            You can find my list of favourite extensions{" "}
            <Link href="/extensions"><a className="underline">here</a></Link>
          </sup>
          <div className="typewrite">Postman</div>
          <code>
            It's getting heavy but it&apos;s a beast of a tool to GET (get it?) and
            consume all my APIs.
          </code>
          <div className="typewrite">Warp CLI</div>
          <code>
            Found it in March 2022, it&apos;s a great little addition to using the
            Mac built-in CLI
          </code>
          <div className="typewrite">FIGMA</div>
          <code>
            Sometimes I just want to design a logo, wireframe or even designed a
            kitchen once.
          </code>
          <div className="typewrite">Chrome Dev Tools</div>
          <code>How good is it!? I could speak for hours about it - but I won&apos;t</code>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
