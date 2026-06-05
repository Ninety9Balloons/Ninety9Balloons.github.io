import VideoGallery from "../components/VideoGallery";

const projects = [
  {
    title: "Lonely Universe",
    tags: ["Trailer", "Documentary"],
    vimeoUrl: "https://vimeo.com/815365896?fl=pl&fe=cm",
    image: "/images/lonely universe tn.png",
  },
  {
    title: "Circles",
    tags: ["Drama", "Short Film"],
    vimeoUrl: "https://vimeo.com/815362381?fl=pl&fe=cm",
    image: "/images/circles tn.png",
    incomplete: true,
  },
  {
    title: "Adlanta Agency",
    tags: ["Reel", "Advertising"],
    vimeoUrl: "https://vimeo.com/815361905?fl=pl&fe=cm",
    image: "/images/aa tn.png",
  },
  {
    title: "Ava Women",
    tags: ["Social Media", "Advertising"],
    vimeoUrl: "https://vimeo.com/815362025?fl=pl&fe=cm",
    image: "/images/ava tn.png",
  },
  {
    title: "Rapture",
    tags: ["Short", "VFX"],
    vimeoUrl: "https://vimeo.com/815361875?fl=pl&fe=cm",
    image: "/images/rapture tn.png",
  },
  {
    title: "Carrot Fertility",
    tags: ["Social Media", "Advertising"],
    vimeoUrl: "https://vimeo.com/815362150?fl=pl&fe=cm",
    image: "/images/carrot tn.png",
  },
  {
    title: "Eternal Love",
    tags: ["48hour", "Short Film"],
    vimeoUrl: "https://vimeo.com/815365675?fl=pl&fe=cm",
    image: "/images/eternal love tn.png",
  },
];

export default function Editing() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-16">
        <h1 className="mb-4 text-4xl font-bold text-[rgb(40,15,15)] md:text-6xl">
          Editing
        </h1>
        <p className="max-w-lg text-[rgb(130,75,75)]">
          Cuts good. Looks better.
        </p>
      </header>
      <VideoGallery projects={projects} />
    </div>
  );
}
