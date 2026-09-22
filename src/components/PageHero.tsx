import type { ReactNode } from "react";

interface PageHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  // CSS object-position, tuned per photo so its subject stays in frame
  imagePosition?: string;
  // About: feature cards overlap the bottom edge
  overlap?: boolean;
  // Search results hold a user-typed query, so that title has to stay wrappable
  wrapTitle?: boolean;
  // Two-line titles read heavy at the full size, so they step down a notch
  smallTitle?: boolean;
}

// Every inner page shares this banner so height, type sizes and text alignment stay identical.
export default function PageHero({ title, subtitle, image, imagePosition = "center", overlap = false, wrapTitle = false, smallTitle = false }: PageHeroProps) {
  return (
    <section className={`page-hero ${overlap ? "page-hero--overlap" : ""} relative overflow-hidden bg-bg-inverse text-white`}>
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            data-parallax="0.12"
            className="absolute inset-0 w-full h-full object-cover scale-[1.15]"
            style={{ objectPosition: imagePosition }}
          />
          {/* Navy fades in from the text side so the heading reads on any photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-bg-inverse/92 from-20% via-bg-inverse/62 via-52% to-transparent to-78% max-lg:via-bg-inverse/72 max-lg:to-bg-inverse/20 max-lg:to-90%"
          />
        </>
      )}
      <div className="container-x relative">
        {/* From xl the floating header pill is wider than the container's content; this inset lines the text up with its logo */}
        <div className="page-hero-text xl:ps-[clamp(20px,calc((100vw-1280px)/2),32px)]">
          {/* Titles stay on one line from lg up; below that they wrap as normal */}
          <h1
            className={`ty-hero ${smallTitle ? "text-3xl md:text-[42px]" : "text-4xl md:text-5xl"} leading-tight ${wrapTitle ? "" : "lg:whitespace-nowrap"}`}
            style={image ? { textShadow: "0 2px 16px rgba(8, 18, 45, 0.55)" } : undefined}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-4 max-w-[640px] text-lg md:text-xl leading-relaxed text-white/90"
              style={image ? { textShadow: "0 2px 14px rgba(8, 18, 45, 0.5)" } : undefined}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
