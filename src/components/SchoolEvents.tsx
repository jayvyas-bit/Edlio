import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { eventDates } from "../data";

export default function SchoolEvents() {
  const [active, setActive] = useState(2);
  const event = eventDates[active];

  const go = (dir: -1 | 1) => {
    setActive((a) => Math.min(eventDates.length - 1, Math.max(0, a + dir)));
  };

  return (
    <section className="bg-[#F5F1EA] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-lg font-extrabold uppercase tracking-wide text-[#101B33] mb-8">
          School Events
        </h2>

        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8">
          <button
            onClick={() => go(-1)}
            aria-label="Previous date"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#C0392B] hover:bg-black/5 transition-colors shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {eventDates.map((d, i) => (
            <button
              key={d.month + d.day}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0 transition-colors ${
                active === i
                  ? "bg-[#101B33] text-white"
                  : "bg-white text-[#101B33] hover:bg-white/70"
              }`}
            >
              <span className="text-[10px] uppercase tracking-wide">
                {d.month}
              </span>
              <span className="text-lg font-extrabold">{d.day}</span>
            </button>
          ))}

          <button
            onClick={() => go(1)}
            aria-label="Next date"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#C0392B] hover:bg-black/5 transition-colors shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#101B33] rounded-xl p-6 sm:p-8 text-center mb-8">
          <h3 className="text-white font-bold mb-2">{event.title}</h3>
          <p className="text-white/60 text-sm">Time: {event.time}</p>
          <p className="text-white/60 text-sm">Location: {event.location}</p>
        </div>

        <div className="flex justify-center">
          <button className="bg-[#C0392B] hover:bg-[#a5301f] text-white text-xs font-bold uppercase tracking-wide px-6 py-2.5 rounded-full transition-colors">
            More Events
          </button>
        </div>
      </div>
    </section>
  );
}
