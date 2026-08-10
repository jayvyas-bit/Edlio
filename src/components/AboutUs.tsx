import { useState } from "react";
import { Play, Pause } from "lucide-react";

export default function AboutUs() {
  const [playing, setPlaying] = useState(true);
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#101B33] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-white text-[32px] font-extrabold uppercase tracking-wide mb-4">
            About Us
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Welcome to our school! We believe that parent participation is key
            to student success; our new website is designed to provide parents
            with all the information they need to be active participants in
            their student&rsquo;s education. You will find that the site works
            just as well on mobile devices as it does on a desktop so you can
            find information on the go.
          </p>
          <button className="bg-[#C0392B] hover:bg-[#a5301f] text-white text-xs font-bold uppercase tracking-wide px-6 py-2.5 rounded-full transition-colors">
            Learn More
          </button>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-sm h-72 sm:h-80 rounded-t-full rounded-b-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop"
              alt="School gymnasium"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
              className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
            >
              {playing ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
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
                  active === i ? "bg-[#C0392B]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
