import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Meta({
  title = "lyrist",
  description = "Simple yet powerful RESTful lyrics API",
  image = "https://user-images.githubusercontent.com/68690233/211316118-3adf4ec2-4082-46c2-979e-7d2127290532.png",
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#fce7f3" />
      <meta property="og:site_name" content="lyrist" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@itzmeac3_" />
    </Head>
  );
}