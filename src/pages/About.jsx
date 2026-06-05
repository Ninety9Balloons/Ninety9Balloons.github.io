import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2015",
    title: "B.S. Video Production — SUNY Fredonia",
    body: "Graduated and hit the ground running as a freelance video editor, taking on clients across advertising, narrative film, and digital media.",
  },
  {
    year: "2020",
    title: "IATSE Local 161 — Film & TV",
    body: "Joined the union as an Accounts Payable Specialist, hitting the analytical and data side of the Film Industry.",
  },
  {
    year: "2023",
    title: "Frontend Development",
    body: "Invested 600+ hours into Udemy frontend courses to complement a Minor in Web Programming from Fredonia.",
  },
];

const clients = [
  "Ava Women",
  "Carrot Fertility",
  "Adlanta Agency",
  "Sky Creature Productions",
  "Marko Rubel",
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Intro */}
      <section className="mb-20 grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-[rgb(40,15,15)] md:text-6xl">
            Hello, I'm
            <br />
            Troy Reuther.
          </h1>
          <div className="space-y-4 text-[rgb(110,60,60)] leading-relaxed">
            <p>
              I'm a freelance video editor that occasionally dabbles in VFX and
              Motion Graphics with a firm decade on and off the sets of the Film
              &amp; TV industry. Since graduating in 2015 I've worked with local
              producers, boutique marketing agencies, international clients, and
              fellow film industry workers on their own projects.
            </p>

            <p>
              Hopefully you've got some fun projects you'd like to do, I'm all
              game.
            </p>
          </div>
        </div>

        {/* Stats card */}
        <div className="rounded-2xl border border-[rgb(219,180,180)] bg-white/60 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[rgb(160,70,70)]">
            At a glance
          </h2>
          <dl className="space-y-5">
            {[
              { label: "Experience", value: "10+ years" },
              { label: "Degree", value: "B.S. Video Production" },
              { label: "School", value: "SUNY Fredonia" },
              { label: "Union", value: "IATSE Local 161" },
              { label: "Also does", value: "Frontend development" },
              { label: "Available for", value: "Freelance & collaboration" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-4 border-b border-[rgb(219,180,180)]/50 pb-4 last:border-0 last:pb-0"
              >
                <dt className="text-sm text-[rgb(160,100,100)]">{label}</dt>
                <dd className="text-right text-sm font-semibold text-[rgb(40,15,15)]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="mb-10 text-2xl font-semibold text-[rgb(40,15,15)]">
          Career
        </h2>
        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[rgb(219,180,180)] md:left-[calc(theme(spacing.28)+11px)]" />

          {timeline.map(({ year, title, body }) => (
            <div key={year} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Dot */}
              <div className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[rgb(235,78,78)] bg-white shadow-sm">
                <div className="h-2 w-2 rounded-full bg-[rgb(235,78,78)]" />
              </div>

              <div className="md:flex md:gap-8 md:items-start">
                <span className="mb-1 block w-20 shrink-0 text-sm font-bold text-[rgb(235,78,78)] md:text-right">
                  {year}
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-[rgb(40,15,15)]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[rgb(130,75,75)]">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients + CTA */}
      <section className="rounded-2xl border border-[rgb(219,180,180)] bg-white/60 p-8 backdrop-blur-sm md:flex md:items-center md:justify-between md:gap-12">
        <div className="mb-8 md:mb-0">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[rgb(160,70,70)]">
            Notable clients
          </h2>
          <div className="flex flex-wrap gap-2">
            {clients.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[rgb(219,180,180)] bg-white/80 px-4 py-1.5 text-sm font-medium text-[rgb(80,35,35)]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 text-center md:text-right">
          <p className="mb-3 text-sm text-[rgb(130,75,75)]">
            Ready to work together?
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-[rgb(235,78,78)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[rgb(210,55,55)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
