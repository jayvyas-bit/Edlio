import { useState } from "react";
import { Pause } from "lucide-react";
import { PlayIcon } from "./EdlioIcons";

export default function Hero() {
  const [playing, setPlaying] = useState(true);

  return (
    <section className="relative">
      <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden">
        <img
          src="/images/hero-background.jpg"
          alt="School building exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 flex flex-row items-end px-10">
          <div className="max-w-sm bg-[#F5F1EA] shadow-xl p-6 sm:p-7 h-max rounded-tr-2xl rounded-tl-[16px] flex flex-col justify-center items-start">
            <h2 className="text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-3">
              Who We Are
            </h2>
            <p className="text-sm text-[#000000] leading-relaxed mb-5">
              We are a K-12 school specializing in educating the whole student,
              focusing on the academic and life-skills necessary for success.
            </p>
            <button className="bg-[oklch(22.6%_.0495_264.23)] hover:bg-[#8B6A1F] active:bg-[#050c17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9812E] text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-colors h-max [color:oklch(0.627_0.1098_82.164)]">
              Learn More
            </button>
          </div>
        </div>

        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause" : "Play"}
          className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 active:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center justify-center text-white transition-colors"
        >
          {playing ? (
            <Pause className="w-4 h-4" />
          ) : (
            <PlayIcon className="w-3 h-3" />
          )}
        </button>

      </div>
    </section>
  );
}
