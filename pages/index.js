import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Developer Melbourne</title>
      </Head>
      <div>
        <div className="w-48 md:w-96 lg:w-256">
        <Image  src="/salim.png" width={400} height={400} alt="Artist's impression of Salim"/>
        </div>
        <div className="text-4xl md:text-6xl lg:7-xl">Salim Karim</div>
        <div>Full Stack Developer</div>
        <div className="">
          <div className="btn-primary">Contact</div>
          <div className="btn-primary">Skills</div>
          <div className="btn-primary">Technology</div>
          <div className="btn-primary">Experience</div>
          <div className="btn-primary">Infrastructure</div>
          <div className="btn-primary">Qualifications</div>
        </div>
        
        </div>
        <div>
          &copy; {new Date().getFullYear()}
      </div>
    </>
  );
}
