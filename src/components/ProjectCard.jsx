function getVimeoEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (!match) return null;
  return `https://player.vimeo.com/video/${match[1]}?title=0&byline=0&portrait=0&dnt=1`;
}

export default function ProjectCard({ title, tags, vimeoUrl, image }) {
  const embedUrl = getVimeoEmbedUrl(vimeoUrl);

  if (embedUrl) {
    return (
      <div className="overflow-hidden rounded-2xl border border-[rgb(160,90,90)] bg-[rgb(25,15,15)] transition hover:border-[rgb(235,78,78)]">
        <div className="aspect-video">
          <iframe
            src={embedUrl}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[rgb(235,78,78)]/20 px-3 py-0.5 text-xs text-[rgb(255,180,180)]"
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative flex aspect-video items-end overflow-hidden rounded-2xl border border-[rgb(160,90,90)] bg-[rgb(25,15,15)] p-6 transition hover:border-[rgb(235,78,78)]"
      style={
        image
          ? {
              backgroundImage: `url('${import.meta.env.BASE_URL}${image.replace(/^\//, "")}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
      <div className="relative">
        <div className="mb-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[rgb(235,78,78)]/20 px-3 py-0.5 text-xs text-[rgb(255,180,180)]"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}
