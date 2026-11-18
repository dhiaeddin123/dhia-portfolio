
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
  MapPin,
  Download,
} from "lucide-react";

function Contact() {
  const email = "dhiaeddine993@gmail.com";

  return (
    <section
      id="contact"
      className="border-t border-zinc-800/70
        bg-[#0c0c0e] px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-zinc-800
          bg-gradient-to-br from-zinc-900
          via-zinc-900/80 to-emerald-950/20 p-8 md:p-14">

          <p className="mb-5 text-sm font-semibold uppercase
            tracking-[0.2em] text-emerald-400">
            Get in touch
          </p>

          <h2 className="max-w-3xl text-4xl font-bold
            leading-tight tracking-tight sm:text-6xl">
            Have a project in mind?
            <span className="text-emerald-400">
              {" "}Let's build it.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8
            text-zinc-400">
            I'm interested in software engineering
            opportunities, freelance projects and
            collaborations. Let's discuss how I can
            contribute to your next project.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-full
                bg-emerald-400 px-7 py-4 font-semibold
                text-zinc-950 transition hover:bg-emerald-300"
            >
              <Send size={18} />
              Send me an email
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="my-12 h-px bg-zinc-800" />

          <div className="grid gap-8 sm:grid-cols-2">

            <div>
              <p className="mb-4 text-sm text-zinc-500">
                EMAIL
              </p>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3
                  text-zinc-200 transition
                  hover:text-emerald-400"
              >
                <Mail size={19} />
                {email}
              </a>
            </div>

            <div>
              <p className="mb-4 text-sm text-zinc-500">
                LOCATION
              </p>

              <div className="flex items-center gap-3
                text-zinc-200">
                <MapPin size={19} />
                Tunisia · Open to remote opportunities
              </div>
            </div>

          </div>

          <div className="mt-10 flex gap-5">

            <a
              href="https://github.com/dhiaeddin123"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-zinc-700
                p-3 text-zinc-400 transition
                hover:border-emerald-400
                hover:text-emerald-400"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/dhiaeddine-boukthir"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-zinc-700
                p-3 text-zinc-400 transition
                hover:border-emerald-400
                hover:text-emerald-400"
            >
              <Linkedin size={20} />
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
      </div>
    </section>
  );
}

export default Contact;
