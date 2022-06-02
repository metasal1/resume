import Head from "next/head";
import Image from "next/image";
import clientPromise from "../lib/mongodb";
const uri = process.env.MONGO_URI;
import styles from "../styles/Home.module.css";
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
          <a onClick={() => setSearch("backend")} className="btn-primary">
            Backend
          </a>
          <a onClick={() => setSearch("frontend")} className="btn-primary">
            Frontend
          </a>
          <a onClick={() => setSearch("cloud")} className="btn-primary">
            Cloud
          </a>
          <a onClick={() => setSearch("ci/cd")} className="btn-primary">
            CI/CD
          </a>
          <a onClick={() => setSearch("tool")} className="btn-primary">
            Tools
          </a>
          <div>
            <input
              className="text-md pl-1 border-2 mt-4 w-1/4"
              autoComplete="false"
              spellCheck="false"
              type="search"
              placeholder="Filter..."
              onChange={(e) => {
                setSearch(e.target.value.trim());
              }}
            ></input>
          </div>
        </div>
        <div>
          <div className="italic">
            {
              results.filter((skill) => {
                if (search === "") {
                  return skill;
                } else if (
                  skill.name?.toLowerCase().includes(search.toLowerCase()) ||
                  skill.description
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                  skill.period?.toLowerCase().includes(search.toLowerCase()) ||
                  skill.category?.toLowerCase().includes(search.toLowerCase())
                ) {
                  return skill;
                }
              }).length
            }{" "}
            skills loaded
          </div>

          {results
            .filter((skill) => {
              if (search === "") {
                return skill;
              } else if (
                skill.name?.toLowerCase().includes(search.toLowerCase()) ||
                skill.description
                  ?.toLowerCase()
                  .includes(search.toLowerCase()) ||
                skill.period?.toLowerCase().includes(search.toLowerCase()) ||
                skill.category?.toLowerCase().includes(search.toLowerCase())
              ) {
                return skill;
              }
            })
            .map((skill) => {
              return (
                <div className="card" key="skill._id">
                  <div className="skillname">{skill.name}</div>
                  <div className="skilldescription">{skill.description}</div>
                  <div className="skillperiod">
                    {skill.period || "not provided"}
                  </div>
                  <div className="skillcategory">{skill.category || "n/a"}</div>
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
