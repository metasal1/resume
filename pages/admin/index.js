import Head from "next/head";
import React from "react";
import clientPromise from "../../lib/mongodb";
import moment from "moment";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  const { password } = router.query;

  const connected = props.isConnected ? "🟢" : "🔴";
  console.log(connected);

  if (props.visitors){
  var visitors = JSON.parse(props.visitors);
  }
  return (
    <>
      <Head>
        <title>Full Stack Developer Melbourne</title>
      </Head>

      <div>{connected}</div>
      <div>{password}</div>
      <div className="grid grid-cols-3 bg-white">
        {visitors?.map((e) => (
          <React.Fragment key={e._id}>
            <div>{moment(e.date).fromNow()}</div>
            <div>{e.ip}</div>
            <div>{e.location}</div>
          </React.Fragment>
        ))}
      </div>
      <div>{props.perf}</div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  var perf = performance.now();

  const pwd = query.password;
  console.log(pwd);

  if (pwd === "salim") {
    try {
      const client = await clientPromise;
      const results = await client
        .db("salimsresume")
        .collection("visitors")
        .find({})
        .sort({ _id: -1 })
        .limit(20);

      const visitors = await results.toArray();

      return {
        props: {
          isConnected: true,
          visitors: JSON.stringify(visitors),
          perf: Math.round(performance.now() - perf) + "ms",
        },
      };
    } catch (e) {
      console.error(e);
      return {
        props: { isConnected: false },
      };
    }
  } else {
    return {
      props: { isConnected: false },
    };
  }
}
