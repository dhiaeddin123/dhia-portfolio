
import { Code2, Server, Smartphone, Database } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable APIs and backend architectures using Laravel and Symfony.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating mobile experiences using React Native and modern API integrations.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description: "Designing efficient database structures and optimizing application performance.",
  },
  {
    icon: Code2,
    title: "System Integrations",
    description: "Connecting applications with payment gateways, notifications and third-party services.",
  },
];

function About() {
  return (
    <section id="about" className="border-t border-zinc-800/70
      bg-[#0c0c0e] px-6 py-28">

      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm font-semibold uppercase
          tracking-[0.2em] text-emerald-400">
          About me
        </p>

        <div className="grid gap-14 md:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold leading-tight
              tracking-tight sm:text-4xl">
              Turning ideas into
              <span className="text-emerald-400">
                {" "}reliable software.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-zinc-400">
              I'm a Software Engineer passionate about
              building useful digital products and solving
              complex technical problems.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              My experience focuses on PHP development,
              Laravel, Symfony and REST API architecture.
              I also work with React Native to bring
              backend solutions to mobile platforms.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              I enjoy working across the entire development
              lifecycle, from database design and backend
              architecture to integrations and deployment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-800
                    bg-zinc-900/40 p-6 transition duration-300
                    hover:-translate-y-1 hover:border-emerald-400/40"
                >
                  <Icon
                    size={25}
                    className="mb-5 text-emerald-400"
                  />

                  <h3 className="mb-3 font-semibold text-zinc-100">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
