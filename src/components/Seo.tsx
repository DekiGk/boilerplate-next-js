import Head from "next/head";
import profile from "../../public/images/profile.jpg";

export const Seo = ({
  title = "Be the change you want to see in the world",
  description = "Be the change you want to see in the world",
  keywords = "Dejan Kostevski, web developer, kodeskills",
  canonicalUrl = "https://kodeskills.com/",
  ogType = "website",
  ogImage = profile.src,
}) => {
  return (
    <Head>
      {/* SEO */}
      <title>{`Kode Skills | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {/* OG */}
      <meta property="og:locale" content="en_GB" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={`Kode Skills | ${title}`} />
    </Head>
  );
};
