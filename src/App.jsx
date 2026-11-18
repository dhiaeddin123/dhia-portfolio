
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
} from "lucide-react";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const skills = [
    "Laravel",
    "PHP",
    "Symfony",
    "React Native",
    "MySQL",
    "REST APIs",
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[75vh]
        max-w-6xl flex-col justify-center px-6 py-20">

        <div className="absolute right-10 top-24 h-72 w-72
          rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full
              bg-emerald-400" />
            <span className="text-sm text-zinc-400">
              Software Engineer · Tunisia
            </span>
          </div>

          <p className="mb-5 text-lg text-zinc-400">
            Hello, I'm Dhia.
          </p>

          <h1 className="text-5xl font-bold leading-tight
            tracking-tight sm:text-6xl md:text-7xl">
            Building digital products
            <span className="text-emerald-400">
              {" "}that make an impact.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8
            text-zinc-400">
            Full-Stack Software Engineer specializing in
            Laravel, PHP, Symfony and React Native.
            I build scalable backend systems, APIs and
            mobile applications.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full
                bg-emerald-400 px-6 py-3 font-semibold
                text-zinc-950 transition hover:bg-emerald-300"
            >
              Explore my work <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full
                border border-zinc-700 px-6 py-3
                transition hover:border-zinc-400"
            >
              <Mail size={17} /> Contact me
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-800
                  bg-zinc-900/70 px-4 py-2 text-sm
                  text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12 flex gap-6 text-zinc-500">
            <a href="https://github.com/dhiaeddin123"
              target="_blank" rel="noreferrer"
              className="transition hover:text-emerald-400">
              <Github size={22} />
            </a>

            <a href="https://linkedin.com/in/dhiaeddine-boukthir"
              target="_blank" rel="noreferrer"
              className="transition hover:text-emerald-400">
              <Linkedin size={22} />
            </a>
            <a
              href="/Dhiaeddine-Boukthir-CV.pdf"
              download="Dhiaeddine-Boukthir-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

      <Footer />

    </main>
  );
}

export default App;
