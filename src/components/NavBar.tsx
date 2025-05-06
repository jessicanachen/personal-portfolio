import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      aria-labelledby="mainmenulabel"
      className={`fixed top-0 w-full bg-background pt-20 transition-transform duration-300 z-50 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h2 id="mainmenulabel" className="visuallyhidden">
        Main Menu
      </h2>
      <ul className="flex flex-row space-x-8 font-heading text-2xl">
        <li>
          <Link href="/" aria-current={currentPath === "/" ? "page" : undefined}>
            home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            aria-current={currentPath === "/projects" ? "page" : undefined}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="/interactions"
            aria-current={currentPath === "/interactions" ? "page" : undefined}
          >
            interactions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
