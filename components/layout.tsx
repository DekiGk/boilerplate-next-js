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
