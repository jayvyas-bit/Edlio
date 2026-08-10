import { ArrowRight } from "lucide-react";
import {
  DocumentIcon,
  FamilyIcon,
  LunchIcon,
  DirectoryIcon,
  GuidanceIcon,
} from "./EdlioIcons";
import { quickLinks } from "../data";

const icons: Record<string, typeof DocumentIcon> = {
  document: DocumentIcon,
  family: FamilyIcon,
  lunch: LunchIcon,
  directory: DirectoryIcon,
  guidance: GuidanceIcon,
};

export default function QuickLinks() {
  return (
    <section className="bg-[#F5F1EA]">
      <div className="max-w-6xl px-0 grid md:grid-cols-2 gap-10 items-center py-0 mx-[40px] w-full mb-[64px] mt-0">
        <div className="flex justify-center md:justify-start w-[384px] h-full rounded-bl-[16px] rounded-br-[16px]">
          <img
            src="/images/quicklinks.jpg"
            alt="Teacher and student"
            className="h-full object-cover grow basis-[0%] rounded-bl-[16px] rounded-br-[16px]"
          />
        </div>

        <ul className="p-20 space-y-3">
          {quickLinks.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.label}>
                <button className="w-full flex items-center justify-between gap-4 py-4 px-5 bg-white border border-[#101B33]/15 rounded-md group text-left hover:border-[#A9812E] transition-colors">
                  <span className="flex items-center gap-4 min-w-0">
                    <Icon className="w-5 h-5 text-[#A9812E] shrink-0" />
                    <span className="font-extrabold uppercase tracking-wide text-[#101B33] text-sm sm:text-base whitespace-nowrap group-hover:text-[#A9812E] transition-colors">
                      {item.label}
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#A9812E] shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
