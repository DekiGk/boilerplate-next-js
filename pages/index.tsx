import Layout from "../components/layout";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const StyledP = styled.p`
  color: blue;
`;

export async function getServerSideProps() {
  const DATA_LAKE = "https://dog.ceo/api/breeds/image/random";
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
    <Layout home>
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
          layout="intrinsic"
        />

        <p>{ssrProps.status}</p>
      </section>
      <h2>
        <Link href="/posts/first-post">First post</Link>
      </h2>
      <StyledP>Hello</StyledP>
    </Layout>
  );
}
