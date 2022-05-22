import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children, home = false }) {
  return (
    <div>
      <Head>
        <title>Hello Next.js</title>
        <meta name="description" content="Hello Next.js" />
        {/* <meta
          property="og:image"
          content=""
        /> */}
        {/* <meta name="og:title" content="" />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header>
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/profile.jpg"
              height={108}
              width={108}
              alt={"profile pic"}
            />
          </a>
        </Link>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
