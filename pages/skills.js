import Head from "next/head";
import Image from "next/image";
import clientPromise from "../lib/mongodb";

import styles from "../styles/Home.module.css";

const uri = process.env.MONGO_URI;

import { useState } from "react";
import Link from "next/link";
export default function Skills(props) {
  const [search, setSearch] = useState("");

  const results = JSON.parse(props.results);
  return (
    <>
      <Head>
        <title>
          Salim Karim&apos;s Skills | Full Stack Developer Melbourne
        </title>
      </Head>
      <div className="card">
        <div className="text-5xl font-bold">👨🏽‍💻 Skills</div>

        <div className="">
          <Link href="/backend">
            <a className="btn-primary">Backend</a>
          </Link>{" "}
          <Link href="/frontend">
            <a className="btn-primary">Frontend</a>
          </Link>{" "}
          <Link href="/cloud">
            <a className="btn-primary">Cloud</a>
          </Link>{" "}
          <Link href="/ci-cd">
            <a className="btn-primary">CI/CD</a>
          </Link>{" "}
          <Link href="/tools">
            <a className="btn-primary">Tools</a>
          </Link>
          <div>
            <input
              className="text-md pl-1 border-2 mt-4 w-1/4"
              type="search"
              placeholder="Filtering coming soon!..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="italic">{results.length} skills loaded</div>
        <div>
          {results.map((element) => {
            return (
              <div className="card" key="element._id">
                <div className="skillname">{element.name}</div>
                <div className="skilldescription">{element.description}</div>
                <div className="skillperiod">
                  {element.period || "not provided"}
                </div>
                <div className="skillcategory">{element.category || "n/a"}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="/">
        <a className="backarrow">&larr;</a>
      </Link>
    </>
  );
}

export async function getServerSideProps(context) {

  try {
    const client = await clientPromise;
    const cursor = client.db("salimsresume").collection("skills").find({});

    const results = await cursor.toArray();
    console.log(results.length);

    return {
      props: { isConnected: true, results: JSON.stringify(results) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
