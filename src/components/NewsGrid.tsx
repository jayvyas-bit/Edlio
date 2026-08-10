import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { newsItems } from "../data";

export default function NewsGrid() {
  const [page, setPage] = useState(0);

  return (
    <section className="bg-[#F5F1EA] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-6">News & Announcements<br /></h2>


        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setPage((p) => (p + newsItems.length - 1) % newsItems.length)
            }
            aria-label="Previous news"
            className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-[#C0392B] hover:bg-black/5 transition-colors shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid sm:grid-cols-3 gap-6 flex-1">
            {newsItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="rounded-2xl overflow-hidden h-44 mb-4 bg-[#101B33] flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <BookOpen className="w-10 h-10 text-white/70" />
                  )}
                </div>
                <h3 className="font-bold text-[#101B33] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4a453d] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage((p) => (p + 1) % newsItems.length)}
            aria-label="Next news"
            className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-[#C0392B] hover:bg-black/5 transition-colors shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#C0392B] hover:bg-[#a5301f] text-white text-xs font-bold uppercase tracking-wide px-6 py-2.5 rounded-full transition-colors">
            More News
          </button>
        </div>
      </div>
    </section>
  );
}
