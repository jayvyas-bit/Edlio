import { ArrowRight } from "lucide-react";
import { quickLinks } from "../data";

export default function QuickLinks() {
  return (
    <section className="bg-[#F5F1EA]">
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=800&auto=format&fit=crop"
            alt="Teacher and student"
            className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover"
          />
        </div>

        <ul>
          {quickLinks.map((item, i) => (
            <li
              key={item.num}
              className={i !== 0 ? "border-t border-black/10" : ""}
            >
              <button className="w-full flex items-center justify-between py-4 group text-left">
                <span className="flex items-center gap-4">
                  <span className="text-[#C0392B] font-extrabold text-sm">
                    {item.num}
                  </span>
                  <span className="font-extrabold uppercase tracking-wide text-[#101B33] text-sm sm:text-base group-hover:text-[#C0392B] transition-colors">
                    {item.label}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-[#C0392B] group-hover:translate-x-1 transition-transform" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
