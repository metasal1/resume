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
          <p>
          Salim Karim is a highly skilled Full Stack Engineer with a proven track record of delivering innovative and results-driven solutions. With a Bachelor of Computing from Monash University, a Diploma of Engineering (Computer Systems) from RMIT, and a Certificate IV in Training and Assessment from Box Hill Institute, Salim has a strong educational background in computing and engineering. Additionally, Salim is a Certified Custom Apps Developer from Zendesk.
</p>
<p>

Salim has over 2 years of professional experience working as a software developer for Amazon AWS / Zendesk at Aware Super, where he has developed and maintained a variety of custom apps used by over 300 agents, including the Member Viewer app, MemberLocker, SkipReporter, SecureMyPDF, Document Indexer app, MemberPrefs, SendSMS, Next Best Convo app, NBC Logger and Workflows Manager. Salim has also been involved in migrating 260,000 members to Zendesk, designing employer schema for managing 90,000 members in Zendesk, and working with the business to gather requirements and points of friction for process improvement.
</p>
<p>

Prior to that, Salim has worked as a JavaScript Developer / Zendesk Consultant at Vision Australia where he implemented and customized Zendesk into the Retail / Equipment Solutions team, integrated a complex solution utilising Okta SSO and MFA, Microsoft Dynamics, Oracle NetSuite, Salesforce Lightning, Drupal Commerce and Mulesoft API, Created Vision Store Locator using Javascript, JQuery, NodeJS, Google Maps API, Drupal - Administer and customise using HTML, CSS, JS using ARIA and WCAG best practice for low vision audiences.
</p>
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
