import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Email(props) {

    const [from, setFrom] = useState()
    const [message, setMessage] = useState()

    const send = () => {
        const email = fetch(`api/email?message=Mesage =${message} From = ${from}`)
    }
    
  return (
    <>
      <Head>
        <title>
          Get in touch with Salim Karim | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">✉️ Email</div>
       
      {props.result}
       <div className="font-bold">FROM</div>
       <input onChange={(e)=>{setFrom(e.target.value)}} className="text-center bg-cokesecondary text-white" type="email" placeholder="Recruiter's Email"></input>
       <div className="font-bold">TO</div>
       <input className="text-center bg-cokesecondary text-white" value="salim@outlook.com.au" readOnly></input>
       <div className="font-bold">MESSAGE</div>
       <textarea  onChange={(e)=>{setMessage(e.target.value)}} className="bg-cokesecondary text-white p-2" placeholder="message here"></textarea>
      <button onClick={send} className="mt-5 bg-cokesecondary w-48 text-white m-auto">SEND</button>
      </div>
      <Link href="/contact">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}
