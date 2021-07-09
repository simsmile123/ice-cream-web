import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ICECREAM</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  );
}
