import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

const StyledP = styled.p`
  color: blue;
`;

export async function getServerSideProps() {
  const DATA_LAKE = "https://dog.ceo/api/breed/spaniel/brittany/images/random";
  let ssrProps: {
    message: string;
    status: string;
  };

  try {
    const result = await fetch(DATA_LAKE);
    ssrProps = await result.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }

  return { props: { ssrProps } };
}

export default function Home({ ssrProps }) {
  return (
    <>
      <Head>
        <title>Hello Next.js</title>
        <meta name="description" content="Hello Next.js" />
      </Head>

      <section>
        <p>
          <a href="https://nextjs.org/learn" target="_blank" rel="noreferrer">
            Docs
          </a>
        </p>

        <Image
          width={300}
          height={300}
          alt="a dog"
          src={ssrProps.message}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkUPlfDwAC8wGkZidegwAAAABJRU5ErkJggg=="
        />

        <p>{ssrProps.status}</p>
      </section>

      <h2>
        <Link href="/posts/first-post">First post</Link>
      </h2>

      <StyledP>Hello</StyledP>
    </>
  );
}
