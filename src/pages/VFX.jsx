import VideoGallery from "../components/VideoGallery";

const projects = [
  {
    title: "Portals Breakdown",
    tags: ["Compositing", "Tracking"],
    vimeoUrl: "https://vimeo.com/815360165?fl=pl&fe=cm",
    image: "/images/portals-breakdown-tn.png",
  },
  {
    title: "Blood//Water",
    tags: ["Stock Effects", "Color"],
    vimeoUrl: "https://vimeo.com/815359897?fl=pl&fe=cm",
    image: "/images/blood-water-tn.png",
  },
  {
    title: "Animation",
    tags: ["Compositing", "Color"],
    vimeoUrl: "https://vimeo.com/815359672?fl=pl&fe=cm",
    image: "/images/dead-poet-tn.png",
  },
  {
    title: "Live from Hell",
    tags: ["Compositing", "Color"],
    vimeoUrl: "https://vimeo.com/815359787?fl=pl&fe=cm",
    image: "/images/glowbug-tn.png",
  },
  {
    title: "Awe at all Angles",
    tags: ["Compositing", "Color"],
    vimeoUrl: "https://vimeo.com/815359960?fl=pl&fe=cm",
    image: "/images/moon-tooth-tn.png",
  },
  {
    title: "Post Party Depression",
    tags: ["Compositing", "Color"],
    vimeoUrl: "https://vimeo.com/815360066?fl=pl&fe=cm",
    image: "/images/night-gaunts-tn.png",
  },
  {
    title: "Pumpkin Breakdown",
    tags: ["Compositing", "Stock Effects"],
    vimeoUrl: "https://vimeo.com/815360273?fl=pl&fe=cm",
    image: "/images/pumpkin-breakdown-tn.png",
  },
];

export default function VFX() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-16">
        <h1 className="mb-4 text-4xl font-bold text-[rgb(40,15,15)] md:text-6xl">
          VFX
        </h1>
        <p className="max-w-lg text-[rgb(130,75,75)]">
          If it exists, it can be blown up.
        </p>
      </header>
      <VideoGallery projects={projects} />
    </div>
  );
}
