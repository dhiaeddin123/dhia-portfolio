
import {
  Briefcase,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    company: "Africawork",
    role: "Full-Stack Engineer",
    period: "May 2025 — Present",
    location: "Rabat, Morocco · Remote from Tunisia",
    category: "Professional Experience",
    technologies: [
      "PHP",
      "Laravel",
      "Symfony",
      "MySQL",
      "Doctrine",
      "Twig",
      "JavaScript",
      "jQuery",
      "Blade",
      "Git",
      "SVN",
    ],
    achievements: [
      "Contributed to the maintenance and improvement of an internal CRM platform, fixing frontend and backend issues across multiple modules.",
      "Designed database schemas and data models for migrating an existing Symfony CRM to Laravel, and implemented its core structure, migrations and backend components.",
      "Worked on Africatalents, developing and maintaining API integrations with partner companies to synchronize and persist recruitment-related data.",
      "Integrated external company orders into Africatalents, enabling administrators and moderators to manage them within the application.",
      "Fixed and refactored bugs across the AfricaTalents commercial website and legacy CRM invoice management module.",
      "Completed the migration of the legacy Symfony CRM to Laravel, delivering maintainable business modules and improved architecture.",
      "Supervised and mentored a software engineering intern working on the CRM's Sourcing management module.",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Engineer",
    period: "February 2025 — May 2025",
    location: "Sfax, Tunisia",
    category: "Freelance",
    technologies: [
      "Laravel",
      ".NET Core",
      "C#",
      "Docker",
      "Railway",
      "HTML",
      "CSS",
    ],
    achievements: [
      "Developed and deployed a leave request management API using .NET Core.",
      "Containerized the API with Docker and deployed it using Railway.",
      "Developed an e-commerce platform using Laravel, HTML and CSS.",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Engineer",
    period: "February 2024 — June 2024",
    location: "Paris, France · Remote from Tunisia",
    category: "Freelance",
    technologies: [
      "PHP",
      "Symfony",
      "Next.js",
      "TypeScript",
      "Docker",
      "Firebase",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    achievements: [
      "Overhauled the functionality and design of Cercalist's website, delivering a modernized interface and improved user experience.",
      "Optimized page rendering performance on Cercalist to improve loading times and responsiveness.",
      "Improved the user experience and design of Medinah's website for the Sirah client.",
      "Developed features for Fabrique de Verres using Symfony, Docker and Next.js.",
    ],
  },
  {
    company: "Masteur",
    role: "Full-Stack Engineer",
    period: "July 2023 — February 2025",
    location: "Paris, France · Remote from Tunisia",
    category: "Professional Experience",
    technologies: [
      "PHP",
      "Laravel",
      "React Native",
      "React.js",
      "Redux",
      "MySQL",
      "LiveKit",
      "Stripe API",
      "Laravel Cashier",
      "AWS S3",
      "Laravel Telescope",
      "PHPUnit",
    ],
    achievements: [
      "Developed and optimized a tutor application system for managing applications from personal coaches and student teachers.",
      "Integrated LiveKit to enhance real-time classroom experiences and student interactions.",
      "Contributed to the design and implementation of the back-office administration panel, covering backend and frontend functionality.",
      "Implemented subscription management functionality in the back office to handle student subscriptions, enrollment and payment workflows.",
      "Worked on the application's gaming system and student-facing live experience.",
      "Participated in the technical design and planning of complex features to support maintainable backend architecture.",
      "Developed automated tests for API endpoints to detect issues and improve application reliability.",
      "Optimized database queries using Laravel Telescope for monitoring and debugging.",
      "Contributed to code reviews, testing and documentation to improve code quality and maintainability.",
    ],
  },
  {
    company: "Masteur",
    role: "Full-Stack Engineer Intern",
    period: "February 2023 — July 2023",
    location: "Paris, France · Remote from Tunisia",
    category: "Internship",
    technologies: [
      "PHP",
      "Laravel",
      "React.js",
      "Redux",
      "MySQL",
      "Mailchimp",
      "Mailcatcher",
    ],
    achievements: [
      "Improved the user experience across different parts of the application, contributing to a reported 25% improvement in user satisfaction and engagement.",
      "Implemented a user management system in the administration panel to streamline administrative workflows.",
      "Designed and developed a quiz system for students.",
      "Defined and implemented a sponsorship system to support referrals and rewards.",
    ],
  },
  {
    company: "Infinity Solutions",
    role: "Data Scientist Intern",
    period: "July 2022 — October 2022",
    location: "Sfax, Tunisia",
    category: "Internship",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
    ],
    achievements: [
      "Programmed machine learning models to predict market price trends.",
      "Achieved 73% prediction accuracy in the developed forecasting models.",
    ],
  },
  {
    company: "Infinity Solutions",
    role: "Web Developer Intern",
    period: "July 2021 — September 2021",
    location: "Sfax, Tunisia",
    category: "Internship",
    technologies: [
      "PHP",
      "JavaScript",
      "Redis",
      "Memcached",
      "Stripe API",
    ],
    achievements: [
      "Improved web server performance by 50% through the implementation of Redis and Memcached.",
      "Integrated the Stripe API to support online subscription services.",
      "Developed candlestick charts using JavaScript and PHP for real-time data visualization.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-800/70 bg-[#0c0c0e] px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase
            tracking-[0.2em] text-emerald-400">
            Career journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Experience that builds
            <span className="text-emerald-400"> expertise.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            From backend engineering and full-stack development
            to mobile applications, cloud integrations and
            machine learning, my journey has been driven by
            building practical software solutions.
          </p>
        </div>

        <div className="relative space-y-8
          before:absolute before:bottom-8 before:left-[15px]
          before:top-5 before:w-px before:bg-zinc-800
          md:before:left-[19px]">

          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-0 top-1 flex
                h-8 w-8 items-center justify-center rounded-full
                border border-emerald-400/40 bg-[#0c0c0e]
                text-emerald-400 md:h-10 md:w-10">
                <Briefcase size={17} />
              </div>

              <div className="rounded-2xl border border-zinc-800
                bg-zinc-900/30 p-6 transition duration-300
                hover:border-emerald-400/30 md:p-8">

                <div className="flex flex-col gap-5
                  md:flex-row md:items-start md:justify-between">

                  <div>
                    <span className="mb-3 inline-flex rounded-full
                      border border-emerald-400/20
                      bg-emerald-400/5 px-3 py-1
                      text-xs font-medium text-emerald-400">
                      {experience.category}
                    </span>

                    <h3 className="text-2xl font-bold">
                      {experience.company}
                    </h3>

                    <p className="mt-2 text-lg text-zinc-300">
                      {experience.role}
                    </p>

                    <p className="mt-2 flex items-center gap-2
                      text-sm text-zinc-500">
                      <MapPin size={14} />
                      {experience.location}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2
                    self-start rounded-full border border-zinc-800
                    px-4 py-2 text-sm text-zinc-400">
                    <CalendarDays size={15} />
                    {experience.period}
                  </div>
                </div>

                <div className="my-7 h-px bg-zinc-800" />

                <h4 className="mb-5 font-semibold text-zinc-200">
                  Key contributions
                </h4>

                <ul className="space-y-4">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm
                        leading-7 text-zinc-400"
                    >
                      <span className="mt-3 h-1.5 w-1.5
                        shrink-0 rounded-full bg-emerald-400" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-zinc-800
                        bg-zinc-950 px-3 py-2 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;
