import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children, home = false }) {
  return (
    <div>
      <Head>
        <title>Hello Next.js</title>
        <meta name="description" content="Hello Next.js" />
      </Head>
      <header>
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpg"
            height={108}
            width={108}
            alt={"profile pic"}
          />
        </Link>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
