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
          Salim Karim&apos;s Projects | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">📽 Personal Projects</div>

        <div className="p-10">
          <div
            className="weblink"
            onClick={() =>
              window.open("https://sms-login-metasal.vercel.app/", "_blank")
            }
          >
            Login with SMS Demo
          </div>
          <div>Twilio verify demo</div>
          <div
            className="weblink"
            onClick={() => window.open("https://cryptmas.com.au", "_blank")}
          >
            Cryptmas
          </div>
          <div>Cryptocurrency gift card service proof of concept</div>
          <div
            className="weblink"
            onClick={() => window.open("https://solwho.com", "_blank")}
          >
            SolWho.com
          </div>
          <div>Lookup owners of domains by name or twitter handle</div>
          <div
            className="weblink"
            onClick={() => window.open("https://tokenshit.xyz", "_blank")}
          >
            TokensHit.xyz
          </div>
          <div>All the tokens listed on the Solana blockchain curated for ranking.</div>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
