/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex gap-2 justify-center items-center w-full p-6 font-sans text-sm text-zinc-300 md:w-2/3 md:p-4 lg:w-1/2">
      <p>
        Made with {`<3`} by{" "}
        <a
          className="text-pink-200 hover:underline"
          href="https://github.com/AceAkira1017"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit AceAkira1017's GitHub profile"
        >
          AceAkira1017
        </a>
        {" // "}
        <a
          className="text-pink-200 hover:underline"
          href="https://github.com/AceAkira1017/lyrist"
          target="_blank"
          rel="noreferrer"
          aria-label="View the source code for Lyrist"
        >
          Source
        </a>
      </p>
      <p className="text-zinc-400">© {currentYear}</p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://vercel.com/?utm_source=aceakira1017&utm_campaign=oss"
        aria-label="Powered by Vercel"
      >
        <img
          height="34px"
          src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
          alt="Powered by Vercel"
        />
      </a>
    </footer>
  );
}