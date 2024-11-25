import Link from "next/link";
import { Seo } from "../../src/components/Seo";

export default function FirstPost() {
  return (
    <>
      <Seo
        title="First Post"
        description="First Post"
        keywords="First Post"
        canonicalUrl="https://kodeskills.com/posts/first-post"
        ogType="article"
      />

      <h1>First Post</h1>

      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}
