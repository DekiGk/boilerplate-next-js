import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/images/profile.jpg";

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
            src={profile}
            height={100}
            width={100}
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
