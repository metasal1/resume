import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
export default function Email(props) {
  const [from, setFrom] = useState();
  const [message, setMessage] = useState();
  const [button, setButton] = useState(false);
  const [response, setResponse] = useState();
  const [resultBox, setResultBox] = useState(false);

  useEffect(() => {
    if (from && message) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [from, message]);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setResultBox(current => !current);
  };


  const success = () => {
      setFrom('')
      setMessage('')
      handleClick()
  }
  const send = async () => {
    const email = await fetch(
      `api/email?message=Message =${message} From = ${from}`
    );
    const result = await email.json();
    setResponse('message sent!')
    console.log(result);
    if (result.result === 'success')
    {
        success()
    }
  };

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
        <div className="font-bold has-tooltip">
          <span className="tooltip">That&apos;s you</span>
          FROM
        </div>
        <input
          onChange={(e) => {
            setFrom(e.target.value);
          }}
          className="text-center bg-cokesecondary text-white"
          type="email"
          required
          value={from}
          placeholder="Email and/or Phone Number"
        ></input>
        <div className="font-bold has-tooltip">
          <span className="tooltip">That&apos;s me</span>
          TO
        </div>
        <input
          className="blur-sm text-center bg-cokesecondary text-white"
          value="agent99@chaos.org 🤓"
          tabIndex="-1"
          readOnly
        ></input>
        <div className="font-bold">MESSAGE</div>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
          rows="8"
          value={message}
          className="bg-cokesecondary text-white p-2"
          placeholder="Message..."
        ></textarea>
        <div className={resultBox ? 'snack animate-exit': 'snack animate-exit'}>{response}</div>
        {button && (
          <button
            onClick={send}
            type="button"
            className={resultBox ? 'animate-bounce sendBtn btn-primary w-1/3 m-auto mt-5 animate-exit': 'sendBtn btn-primary w-1/3 m-auto mt-5' }
            // className="sendBtn btn-primary w-1/3 m-auto mt-5"
          >
            SEND
          </button>
        )}
      </div>
      <Link href="/contact">
        <a className="backarrow">&larr;</a>
      </Link>
      <div>{resultBox.toString()}</div>
    </>
  );
}
