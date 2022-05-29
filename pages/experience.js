import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Experience() {
  const ts = new Date(Date.now());
  const awareStart = Date.parse("2020-11-11");

  const diff = ts - awareStart;
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24) / 7);
  return (
    <>
      <Head>
        <title>
          Salim Karim&apos;s Career Experience | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-4xl font-bold">🗄 Experience</div>

        <div className="grid">
          <div className="typewrite mt-5 has-tooltip cursor-pointer">
            Aware Super
            <span className="tooltip">
              One of Australia&apos;s top 4 super companies with over $165b FUMs
            </span>
          </div>
          <div className="tenure">{weeks} weeks</div>
          <div className="text-xs grid grid-cols-[1fr_15px_15px_15px] text-right ">
            Legend:
            <div className="problem">
              P<span className="tooltip">Problem</span>
            </div>
            <div className="solution">
              S<span className="tooltip">Solution</span>
            </div>
            <div className="technology">
              T<span className="tooltip">Technology</span>
            </div>
          </div>

          

          <div className="card">
            <div className="bold">Member Viewer app</div>
            <div id="custom scripts" className="grid grid-cols-[10px_1fr] ">
              <div className="problem">
                P<span className="tooltip">Problem</span>
              </div>
              <div className="textbox">
                Agents spend excessive time verifying Members - between apps
                etc.
              </div>
              <div className="solution">
                S<span className="tooltip">Solution</span>
              </div>
              <div className="textbox">
                Custom app that pulls data from the registry, populates Zendesk,
                allows Agents to verify Members via SMS, presents login details,
                allows locking and unlocking accounts.
              </div>

              <div className="technology">
                T<span className="tooltip">Technology</span>
              </div>
              <div className="textbox">
                ReactJS, FIGMA, Boomi, AWS, Twilio, Zendesk
              </div>
            </div>
          </div>

          <div className="card">
            <div className="bold">Document Index app</div>
            <div id="custom scripts" className="grid grid-cols-[10px_1fr] ">
              <div className="problem">
                P<span className="tooltip">Problem</span>
              </div>
              <div className="textbox">
                Members and Employers send attachments via mail and email.
              </div>
              <div className="solution">
                S<span className="tooltip">Solution</span>
              </div>
              <div className="textbox">
                Custom Ticket app that allows Agents to view attachments, add
                comments and send documents for storage and the Registrar.
              </div>

              <div className="technology">
                T<span className="tooltip">Technology</span>
              </div>
              <div className="textbox">VueJS, FIGMA, Boomi, Azure, Zendesk</div>
            </div>
          </div>

          <div className="card">
            <div className="bold">HULK app</div>
            <div id="custom scripts" className="grid grid-cols-[10px_1fr] ">
              <div className="problem">
                P<span className="tooltip">Problem</span>
              </div>
              <div className="textbox">
                Agent licenses and audits require excessive admin time.
              </div>
              <div className="solution">
                S<span className="tooltip">Solution</span>
              </div>
              <div className="textbox">
                Custom Nav bar app with sorting and filtering by login and
                suspend fields.
              </div>

              <div className="technology">
                T<span className="tooltip">Technology</span>
              </div>
              <div className="text-xs">
                ExpressJS, EJS, JavaScript, NodeJS, Zendesk, VS Code
              </div>
            </div>
          </div>
          <div className="card">
            <div className="bold">Custom scripts</div>
            <div id="custom scripts" className="grid grid-cols-[10px_1fr] ">
              <div className="problem">
                P<span className="tooltip">Problem</span>
              </div>
              <div className="textbox">
                Import 260k members, 45k employers. Change Client Id of 1.2m
                records.
              </div>
              <div className="solution">
                S<span className="tooltip">Solution</span>
              </div>
              <div className="textbox">
                Scripts that can handle Zendesk&apos;s API limit of 700 per
                minute.
              </div>

              <div className="technology">
                T<span className="tooltip">Technology</span>
              </div>
              <div className="textbox">
                Node JS, AWS, JavaScript, Axios-Throttle, Zendesk, VS Code
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
