import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Trophy,
  Palette,
  CalendarCheck,
  Users,
} from "lucide-react";
import { stats } from "../data";

const icons = [GraduationCap, Trophy, Palette, CalendarCheck, Users];

export default function AtAGlance() {
  return (
    <section className="bg-[#F5F1EA] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-lg font-extrabold uppercase tracking-wide text-[#101B33] mb-6">
          At a Glance
        </h2>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Previous stats"
            className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-[#C0392B] hover:bg-black/5 transition-colors shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 flex-1">
            {stats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-16 h-16 rounded-full bg-[#101B33] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-extrabold text-[#101B33]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#6b6355] uppercase tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            aria-label="Next stats"
            className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-[#C0392B] hover:bg-black/5 transition-colors shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
