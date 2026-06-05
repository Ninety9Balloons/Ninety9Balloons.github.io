import { useState } from "react";

function getVimeoEmbedUrl(url, autoplay = false) {
  if (!url) return null;
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (!match) return null;
  return `https://player.vimeo.com/video/${match[1]}?title=0&byline=0&portrait=0&dnt=1${autoplay ? "&autoplay=1" : ""}`;
}

export default function VideoGallery({ projects }) {
  const [selected, setSelected] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const current = projects[selected];
  const embedUrl = getVimeoEmbedUrl(current?.vimeoUrl, autoplay);

  function handleSelect(i) {
    setAutoplay(true);
    setSelected(i);
  }

  return (
    <div>
      {/* Featured player */}
      <div className="mb-4 aspect-video w-full overflow-hidden rounded-2xl border border-[rgb(160,90,90)] bg-[rgb(25,15,15)]">
        {embedUrl ? (
          <iframe
            key={`${selected}-${autoplay}`}
            src={embedUrl}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={current.title}
          />
        ) : (
          <div
            className="flex h-full items-center justify-center bg-cover bg-center"
            style={
              current.image
                ? { backgroundImage: `url("${import.meta.env.BASE_URL}${current.image.replace(/^\//, '')}")` }
                : undefined
            }
          >
            {current.image && (
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            )}
            <span className="relative text-sm text-[rgb(200,150,150)]">
              No video linked yet
            </span>
          </div>
        )}
      </div>

      {/* Current video info */}
      <div className="mb-8 px-1">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-semibold text-[rgb(40,15,15)]">
            {current.title}
          </h2>
          {current.incomplete && (
            <span className="rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-900">
              Incomplete
            </span>
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {current.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[rgb(235,78,78)]/15 px-3 py-0.5 text-xs text-[rgb(160,70,70)]"
            >
              {t}
            </span>
          ))}
          {current.year && (
            <span className="rounded-full bg-black/10 px-3 py-0.5 text-xs text-[rgb(160,100,100)]">
              {current.year}
            </span>
          )}
        </div>
      </div>

      {/* Playlist cards */}
      <div className="flex flex-wrap justify-center gap-3">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`group relative h-28 w-[calc(50%-6px)] shrink-0 md:w-56 cursor-pointer overflow-hidden rounded-xl border text-left transition ${
              i === selected
                ? "border-[rgb(235,78,78)]"
                : "border-[rgb(160,90,90)] hover:border-[rgb(235,78,78)]/70"
            }`}
            style={
              p.image
                ? {
                    backgroundImage: `url("${import.meta.env.BASE_URL}${p.image.replace(/^\//, '')}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          >
            {/* Fallback bg when no image */}
            {!p.image && (
              <div className="absolute inset-0 bg-[rgb(25,15,15)]" />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

            {/* Selected highlight */}
            {i === selected && (
              <div className="absolute inset-0 ring-2 ring-inset ring-[rgb(235,78,78)] rounded-xl" />
            )}

            {/* Incomplete badge */}
            {p.incomplete && (
              <div className="absolute right-2 top-2">
                <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-900">
                  Incomplete
                </span>
              </div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-xs font-semibold leading-snug text-white">
                {p.title}
              </p>
              <div className="mt-1 flex flex-wrap gap-1">
                {p.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[rgb(235,78,78)]/30 px-2 py-0.5 text-[10px] text-[rgb(255,200,200)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
