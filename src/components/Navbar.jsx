
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b
      border-zinc-800/70 bg-[#09090b]/90
      backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl
        items-center justify-between px-6 py-5">

        <a href="#" className="text-2xl font-bold">
          DE<span className="text-emerald-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400
                transition hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full
            border border-zinc-700 px-6 py-3 text-sm
            transition hover:border-emerald-400
            hover:text-emerald-400 md:flex"
        >
          Let's talk <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-zinc-700
            p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-zinc-800
          bg-[#09090b] px-6 py-6 md:hidden">

          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-zinc-300
                  transition hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center
                gap-2 rounded-full bg-emerald-400
                px-5 py-3 font-semibold text-black"
            >
              Let's talk <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;