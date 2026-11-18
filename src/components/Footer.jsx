
function Footer() {
  return (
    <footer className="border-t border-zinc-800
      bg-[#09090b] px-6 py-8">

      <div className="mx-auto flex max-w-6xl
        flex-col items-center justify-between
        gap-4 sm:flex-row">

        <a href="#" className="text-xl font-bold">
          DE<span className="text-emerald-400">.</span>
        </a>

        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Dhia. All rights reserved.
        </p>

        <p className="text-sm text-zinc-500">
          Designed & built with React.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
