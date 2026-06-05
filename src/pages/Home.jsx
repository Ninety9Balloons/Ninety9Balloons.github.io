import { Link } from "react-router-dom";

const categories = [
  {
    to: "/editing",
    image: "video editing img0.png",
    gif: "video editing.gif",
  },
  {
    to: "/vfx",
    image: "vfx text0.png",
    gif: "vfx.gif",
  },
  {
    to: "/motion-gfx",
    image: "motion graphics text1.png",
    gif: "motion graphics.gif",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Hero */}
      <section className="mb-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[rgb(160,70,70)]">
          Troy Reuther
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-[rgb(40,15,15)] md:text-7xl">
          Video Editing
          <span className="mt-2 block text-2xl font-medium text-[rgb(140,70,70)]">
            and the occasional Motion Graphics and VFX
          </span>
        </h1>

        <Link
          to="/contact"
          className="inline-block rounded-full bg-[rgb(235,78,78)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[rgb(210,55,55)]"
        >
          Get in touch
        </Link>
      </section>

      {/* Category cards */}
      <section>
        <h2 className="mb-8 text-2xl font-semibold text-[rgb(40,15,15)]">
          What would you like to see?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map(({ to, image, gif }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-2xl p-2 backdrop-blur-sm transition  hover:bg-white/10"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden rounded-md">
                {/* The Static PNG (Visible by default, hidden on group hover) */}
                <img
                  src={`${import.meta.env.BASE_URL}${image}`}
                  alt="Card display static"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 block group-hover:hidden"
                />

                {/* The Animated GIF (Hidden by default, block on group hover) */}
                <img
                  src={gif}
                  alt="Card display animated"
                  className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
                />
              </div>

              {/* <h3 className="mb-2 text-xl font-semibold text-[rgb(40,15,15)]">
                {label}
              </h3>
              <p className="text-sm text-[rgb(130,75,75)]">{desc}</p>
              <span className="mt-4 inline-block text-xs font-medium text-[rgb(160,80,80)] transition group-hover:text-[rgb(235,78,78)]">
                View work →
              </span> */}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
