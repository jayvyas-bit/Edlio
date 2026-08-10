import { useState } from "react";
import { Play, Pause } from "lucide-react";

export default function Hero() {
  const [playing, setPlaying] = useState(true);

  return (
    <section className="relative">
      <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1800&auto=format&fit=crop"
          alt="School building exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause" : "Play"}
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
        >
          {playing ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>

        <div className="absolute left-6 sm:left-10 bottom-0 translate-y-1/3 max-w-sm bg-[#F5F1EA] rounded-2xl shadow-xl p-6 sm:p-7">
          <h2 className="text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-3">
            Who We Are
          </h2>
          <p className="text-sm text-[#4a453d] leading-relaxed mb-5">
            We are a K-12 school specializing in educating the whole student,
            focusing on the academic and life-skills necessary for success.
          </p>
          <button className="bg-[#A9812E] hover:bg-[#8B6A1F] text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="h-16 sm:h-20 bg-[#F5F1EA]" />
    </section>
  );
}
