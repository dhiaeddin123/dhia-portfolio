
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Fitness Management Platform",
    category: "Personal Project",
    status: "In Development",
    description:
      "A fitness platform designed to help users create workout programs, track training sessions and monitor their physical progress.",
    contributions: [
      "Designed and developed a REST API using Laravel.",
      "Implemented authentication and user profile management.",
      "Built workout programs, training sessions and exercise tracking.",
      "Implemented body measurements and progress photo management.",
      "Developed personal records and workout performance tracking.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React Native",
      "REST API",
      "MySQL",
    ],
    icon: Smartphone,
    featured: true,
  },
  {
    number: "02",
    title: "CRM & Recruitment Platform",
    category: "Professional Project",
    status: "Professional Experience",
    description:
      "Enterprise recruitment and CRM solutions involving legacy application modernization, recruitment workflows and external partner integrations.",
    contributions: [
      "Worked on migrating a Symfony CRM to Laravel.",
      "Designed database structures and application migrations.",
      "Developed recruitment-related API integrations.",
      "Implemented partner order synchronization and administration workflows.",
      "Maintained and improved existing business modules.",
    ],
    technologies: [
      "Laravel",
      "Symfony",
      "PHP",
      "MySQL",
      "JavaScript",
      "REST APIs",
    ],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Online Tutoring Platform",
    category: "Professional Project",
    status: "Professional Experience",
    description:
      "An educational platform connecting students and tutors through online learning experiences, subscription management and real-time communication.",
    contributions: [
      "Developed backend features using Laravel.",
      "Worked on tutor applications and student management.",
      "Integrated LiveKit for real-time classroom experiences.",
      "Implemented subscription and enrollment management features.",
      "Contributed to administration tools and API testing.",
    ],
    technologies: [
      "Laravel",
      "React Native",
      "React.js",
      "Redux",
      "MySQL",
      "LiveKit",
      "Stripe",
    ],
    icon: BriefcaseBusiness,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-800/70
        bg-[#09090b] px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 flex flex-col gap-6 md:flex-row
          md:items-end md:justify-between">

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase
              tracking-[0.2em] text-emerald-400">
              Selected work
            </p>

            <h2 className="text-3xl font-bold tracking-tight
              sm:text-5xl">
              Projects I've worked on
              <span className="text-emerald-400">.</span>
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              A selection of personal and professional
              projects showcasing my experience in backend
              engineering, mobile development and software
              architecture.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm
            text-zinc-500">
            <Code2 size={17} className="text-emerald-400" />
            Selected engineering work
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl
                  border border-zinc-800 bg-zinc-900/30
                  transition duration-300
                  hover:border-emerald-400/30"
              >
                <div className="grid md:grid-cols-[1fr_1.2fr]">

                  {/* Project visual */}
                  <div className="relative flex min-h-[260px]
                    flex-col justify-between overflow-hidden
                    bg-gradient-to-br from-emerald-950/50
                    via-zinc-900 to-zinc-950 p-8">

                    <div className="absolute -right-16 -top-16
                      h-64 w-64 rounded-full border
                      border-emerald-400/10" />

                    <div className="absolute -right-8 -top-8
                      h-48 w-48 rounded-full border
                      border-emerald-400/10" />

                    <div className="relative flex items-center
                      justify-between">
                      <span className="text-sm font-medium
                        text-emerald-400">
                        PROJECT {project.number}
                      </span>

                      <Icon size={24}
                        className="text-emerald-400" />
                    </div>

                    <div className="relative">
                      <div className="mb-5 flex h-16 w-16
                        items-center justify-center rounded-2xl
                        border border-emerald-400/20
                        bg-emerald-400/10 text-emerald-400">
                        <Icon size={32} />
                      </div>

                      <h3 className="text-2xl font-bold
                        text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-400">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Project information */}
                  <div className="p-7 md:p-9">

                    <div className="mb-5 flex flex-wrap
                      items-center gap-3">
                      <span className="rounded-full border
                        border-emerald-400/20 bg-emerald-400/5
                        px-3 py-1 text-xs text-emerald-400">
                        {project.status}
                      </span>
                    </div>

                    <p className="leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <h4 className="mb-4 mt-7 text-sm
                      font-semibold text-zinc-200">
                      Key contributions
                    </h4>

                    <ul className="space-y-3">
                      {project.contributions.map((item) => (
                        <li key={item}
                          className="flex gap-3 text-sm
                            leading-6 text-zinc-400">
                          <span className="mt-2 h-1.5 w-1.5
                            shrink-0 rounded-full
                            bg-emerald-400" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology}
                          className="rounded-lg border
                            border-zinc-800 bg-zinc-950
                            px-3 py-2 text-xs text-zinc-400">
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;
