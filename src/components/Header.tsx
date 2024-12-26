import { useRouter } from "next/router";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Guide",
    path: "/guide",
  },
];

export default function Header() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <nav className="absolute top-0 w-full p-6 font-sans text-sm text-zinc-300 md:w-2/3 md:p-4 lg:w-1/2 flex gap-2">
      {navLinks.map((link, index) => {
        const isActive = link.path === path;

        return (
          <a
            key={index}
            href={link.path}
            className={`duration-200 rounded-md p-2 ${
              isActive
                ? "font-semibold text-pink-200 bg-zinc-800/60 border border-zinc-600"
                : "hover:bg-zinc-800/60"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}