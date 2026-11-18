
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Workflow,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Building robust backend systems and APIs.",
    skills: ["PHP", "Laravel", "Symfony", "REST APIs", "Laravel Sanctum"],
  },
  {
    icon: Smartphone,
    title: "Frontend & Mobile",
    description: "Developing application interfaces and mobile experiences.",
    skills: ["React Native", "JavaScript", "Expo"],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Data modeling, querying and performance optimization.",
    skills: ["MySQL", "Eloquent ORM", "Database Optimization"],
  },
  {
    icon: Workflow,
    title: "Integrations",
    description: "Connecting applications with external services.",
    skills: [
      "Stripe Cashier",
      "Vonage",
      "LiveKit",
      "Spatie Media Library",
      "Expo Push Notifications",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Managing application infrastructure and media storage.",
    skills: ["AWS S3", "Laravel Vapor", "Cloud Storage"],
  },
  {
    icon: Server,
    title: "Development Tools",
    description: "Debugging, monitoring and improving application quality.",
    skills: ["Git", "Laravel Telescope", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-800/70
      bg-[#09090b] px-6 py-28">

      <div className="mx-auto max-w-6xl">

        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase
            tracking-[0.2em] text-emerald-400">
            Technical expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight
            sm:text-4xl">
            Technologies I use to
            <span className="text-emerald-400">
              {" "}build solutions.
            </span>
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            My technical toolkit covers backend engineering,
            mobile development, databases and third-party
            integrations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-zinc-800
                  bg-zinc-900/30 p-6 transition duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400/40
                  hover:bg-zinc-900/70"
              >
                <div className="mb-6 flex h-11 w-11 items-center
                  justify-center rounded-xl bg-emerald-400/10
                  text-emerald-400 transition
                  group-hover:bg-emerald-400
                  group-hover:text-zinc-950">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-800
                        bg-zinc-950 px-3 py-2 text-xs
                        text-zinc-300 transition
                        hover:border-emerald-400/40
                        hover:text-emerald-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
