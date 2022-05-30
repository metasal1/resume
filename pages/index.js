import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Typewriter from "typewriter-effect";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const [flavour, setFlavour] = React.useState("blank");

  const handleChange = (event) => {
    document.body.classList.remove(flavour);
    setFlavour(event.target.value);
    document.body.classList.add(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Full Stack Developer Melbourne</title>
      </Head>
      <div className="">
        <div>
          <select
            className="btn-primary"
            value={flavour}
            onChange={handleChange}
            name="flavour"
            id="flavour"
          >

            <option value="blank" selected="selected" >Choose your flavour:</option>
            <option value="coke">Coca-Cola</option>
            <option value="pepsi">Pepsi</option>
            <option value="fanta">Fanta</option>
            <option value="sprite">Sprite</option>
          </select>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Image
            // className="rounded-full"
            src="/salim.png"
            width={200}
            height={200}
            alt="Artist's impression of Salim"
          />
        </motion.div>
      </div>
      <div className="text-4xl md:text-6xl lg:7-xl">Salim Karim</div>
      <div className="decoration-dotted -skew-y-3 bg-white opacity-75 m-3">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Web Developer")
              .pauseFor(500)
              .deleteAll()
              .typeString("Front End Developer")
              .pauseFor(500)
              .deleteAll()
              .typeString("Back End Developer")
              .pauseFor(500)
              .deleteAll()
              .typeString("Full Stack Developer!")
              .start();
          }}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/about">
          <a className="btn-primary">About</a>
        </Link>
        <Link href="/contact">
          <a className="btn-primary">Contact</a>
        </Link>
        <Link href="/skills">
          <a className="btn-primary">Skills</a>
        </Link>
        <Link href="/projects">
          <a className="btn-primary">Projects</a>
        </Link>
        <Link href="/experience">
          <a className="btn-primary">Experience</a>
        </Link>
        <Link href="/qualifications">
          <a className="btn-primary">Qualifications</a>
        </Link>
        <Link href="/technology">
          <a className="btn-primary">Technology</a>
        </Link>
        <Link href="/tools">
          <a className="btn-primary">Tools</a>
        </Link>
      </div>
    </>
  );
}
