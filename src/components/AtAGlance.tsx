import {
  GradCapIcon,
  TrophyIcon,
  ExtracurricularIcon,
  CalendarIcon,
  GroupIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "./EdlioIcons";
import { stats } from "../data";

const icons = [
  GradCapIcon,
  TrophyIcon,
  ExtracurricularIcon,
  CalendarIcon,
  GroupIcon,
];

export default function AtAGlance() {
  return (
    <section className="bg-[#F5F1EA] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-6">
          At a Glance
        </h2>


        <div className="flex items-center gap-4">
          <button
            aria-label="Previous stats"
            className="hidden sm:flex w-11 h-11 rounded-full items-center justify-center text-[#A9812E] hover:bg-black/5 active:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9812E] transition-colors shrink-0 [color:oklch(0.226_0.0495_264.23)]"
          >
            <ArrowLeftIcon className="w-3 h-3" />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 flex-1">
            {stats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-16 h-16 rounded-lg bg-[#101B33] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-extrabold text-[#101B33]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#000000] uppercase tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            aria-label="Next stats"
            className="hidden sm:flex w-11 h-11 rounded-full items-center justify-center text-[#A9812E] hover:bg-black/5 active:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9812E] transition-colors shrink-0 [color:oklch(0.226_0.0495_264.23)]"
          >
            <ArrowRightIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
