import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        {/* TODO: extract into a separate component */}
        {/* SEO */}
        <title>Gangafa | A first post</title>
        <meta name="description" content="Gangafa | A first post" />
        <meta name="keywords" content="Gangafa, NextJs Boilerplate" />
        {/* TODO: Add the URL */}
        <link rel="canonical" href="" />

        {/* OG */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:description" content="Gangafa | A first post" />
        <meta property="og:type" content="article" />
        {/* TODO: Add the image */}
        <meta property="og:image" content="" />
        {/* TODO: Add the URL */}
        <meta property="og:url" content="" />
        <meta property="og:title" content="Gangafa | A first post" />
      </Head>

      <h1>First Post</h1>

      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}
