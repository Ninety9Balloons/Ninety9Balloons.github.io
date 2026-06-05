import VideoGallery from "../components/VideoGallery";

const projects = [
  {
    title: "Polandball 17",
    tags: ["Animation", "YouTube"],
    vimeoUrl: "https://vimeo.com/819309924?fl=pl&fe=cm",
    image: "/images/polans-flag-tn.png",
  },
  {
    title: "History of Europe",
    tags: ["Animation", "YouTube"],
    vimeoUrl: "https://vimeo.com/815361161?fl=pl&fe=cm",
    image: "/images/history-tn.png",
  },
  {
    title: "End of the End",
    tags: ["Animation", "YouTube"],
    vimeoUrl: "https://vimeo.com/815361127?fl=pl&fe=cm",
    image: "/images/end-of-the-end-tn.png",
  },
  {
    title: "The Legend of Stev Ep. 1",
    tags: ["Animation", "Comedy"],
    vimeoUrl: "https://vimeo.com/815361752?fl=pl&fe=cm",
    image: "/images/stev-ep1-tn.png",
  },
  {
    title: "The Legend of Stev Ep. 3",
    tags: ["Animation", "Comedy"],
    vimeoUrl: "https://vimeo.com/815361574?fl=pl&fe=cm",
    image: "/images/stev-tn.png",
  },
  {
    title: "Saturday Down South",
    tags: ["Motion Graphics", "Sports"],
    vimeoUrl: "https://vimeo.com/815361692?fl=pl&fe=cm",
    image: "/images/sds-tn.png",
  },
];

export default function MotionGFX() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-16">
        <h1 className="mb-4 text-4xl font-bold text-[rgb(40,15,15)] md:text-6xl">
          Motion GFX
        </h1>
        <p className="max-w-lg text-[rgb(130,75,75)]">
          Take a shape. Make it move. Sometimes with motion blur.
        </p>
      </header>
      <VideoGallery projects={projects} />
    </div>
  );
}
