import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
        <meta name="description" content="First Post" />
      </Head>

      <h1>First Post</h1>

      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}
