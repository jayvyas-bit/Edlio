import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, OpenBookIcon } from "./EdlioIcons";
import { newsItems } from "../data";

export default function NewsGrid() {
  const [page, setPage] = useState(0);

  return (
    <>
      <section className="bg-[#F5F1EA] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-6">News & Announcements<br /></h2>


          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setPage((p) => (p + newsItems.length - 1) % newsItems.length)
              }
              aria-label="Previous news"
              className="hidden sm:flex w-11 h-11 rounded-full items-center justify-center text-[#A9812E] hover:bg-black/5 active:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9812E] transition-colors shrink-0"
            >
              <ArrowLeftIcon className="w-3 h-3" />
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
                      <OpenBookIcon className="w-10 h-10 text-white/70" />
                    )}
                  </div>
                  <h3 className="font-bold text-[#101B33] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#000000] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPage((p) => (p + 1) % newsItems.length)}
              aria-label="Next news"
              className="hidden sm:flex w-11 h-11 rounded-full items-center justify-center text-[#A9812E] hover:bg-black/5 active:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9812E] transition-colors shrink-0"
            >
              <ArrowRightIcon className="w-3 h-3" />
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-[oklch(22.6%_.0495_264.23)] hover:bg-[#8B6A1F] active:bg-[#050c17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9812E] text-xs font-bold uppercase tracking-wide px-6 py-2.5 rounded-lg transition-colors [color:oklch(0.627_0.1098_82.164)]">
              More News
            </button>
          </div>
        </div>
      </section>
      <div className="bg-[oklch(62.7%_.1098_82.164)] text-center py-8 tracking-widest uppercase font-extrabold text-[32px] text-[#000000]">
        Educating Students for Success in a Changing World
      </div>
    </>
  );
}
