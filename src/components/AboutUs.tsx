import { useState } from "react";
import { Pause } from "lucide-react";
import { PlayIcon } from "./EdlioIcons";

const slides = [
  { src: "/images/gallery-1.jpg", alt: "Students at Avicena Christian School" },
  { src: "/images/gallery-2.jpg", alt: "Campus life at Avicena Christian School" },
  { src: "/images/gallery-3.jpg", alt: "School activities at Avicena Christian School" },
];

export default function AboutUs() {
  const [playing, setPlaying] = useState(true);
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[oklch(62.7%_.1098_82.164)] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-sm h-72 sm:h-80 rounded-t-full rounded-b-2xl overflow-hidden">
            <img
              src={slides[active].src}
              alt={slides[active].alt}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
              className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
            >
              {playing ? (
                <Pause className="w-4 h-4" />
              ) : (
                <PlayIcon className="w-3 h-3" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  active === i ? "bg-[#A9812E]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="h-max">
          <h2 className="text-white text-[32px] font-extrabold uppercase tracking-wide mt-0 mb-[8px]">
            About Us
          </h2>
          <p className="text-sm leading-relaxed mb-6 text-white">
            Welcome to our school! We believe that parent participation is key
            to student success; our new website is designed to provide parents
            with all the information they need to be active participants in
            their student&rsquo;s education. You will find that the site works
            just as well on mobile devices as it does on a desktop so you can
            find information on the go.
          </p>
          <button className="bg-[oklch(22.6%_.0495_264.23)] hover:bg-[#8B6A1F] text-xs font-bold uppercase tracking-wide px-6 py-2.5 rounded-lg transition-colors [color:oklch(0.627_0.1098_82.164)]">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
