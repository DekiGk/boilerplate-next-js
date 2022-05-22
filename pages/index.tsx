import Layout from "../components/layout";
import Link from "next/link";
import styled from "styled-components";

const StyledP = styled.p`
  color: blue;
`;

export default function Home() {
  return (
    <Layout home>
      <section>
        <p>
          <a href="https://nextjs.org/learn" target="_blank" rel="noreferrer">
            Docs
          </a>
        </p>
      </section>
      <h2>
        <Link href="/posts/first-post">First post</Link>
      </h2>
      <StyledP>Hello</StyledP>
    </Layout>
  );
}
