import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./EdlioIcons";
import { eventDates } from "../data";

export default function SchoolEvents() {
  const [active, setActive] = useState(2);
  const event = eventDates[active];

  const go = (dir: -1 | 1) => {
    setActive((a) => Math.min(eventDates.length - 1, Math.max(0, a + dir)));
  };

  return (
    <section className="bg-[#F5F1EA] py-16">
      <div className="max-w-7xl mx-auto px-[40px] flex-row block w-full">
        <h2 className="text-center text-[32px] font-extrabold uppercase tracking-wide text-[#101B33] mb-8">
          School Events
        </h2>

        <div className="flex-row justify-center items-center grid w-full">
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8">

            {eventDates.map((d, i) => (
              <button
                key={d.month + d.day}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-[8px] shrink-0 transition-colors ${
                  active === i
                    ? "bg-[#101B33] text-white"
                    : "bg-[#A9812E] text-white hover:bg-[#8B6A1F]"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wide text-white">
                  {d.month}
                </span>
                <span className="text-lg font-extrabold text-white">{d.day}</span>
              </button>
            ))}

          </div>
          <div className="flex flex-row gap-4 w-full">
            <div className="bg-[oklch(100%_0_90)] rounded-xl p-6 sm:p-8 text-center mb-8 grow basis-[0%] flex flex-col gap-2">
              <h3 className="font-bold [color:oklch(0.226_0.0495_264.23)] my-0 h-max">New Years Day</h3>
              <div className="w-full h-max">
                <p className="text-sm h-max text-[#000000]">Time: 9:00am-5:00pm</p>
                <p className="text-sm text-[#000000]">Location: Home</p>
              </div>
            </div>
            <div className="bg-[oklch(100%_0_90)] rounded-xl p-6 sm:p-8 text-center mb-8 flex-col grid grow basis-[0%] gap-y-2">
              <h3 className="font-bold [color:oklch(0.226_0.0495_264.23)] my-0 h-max">President's Day - No School<br /></h3>
              <div className="h-max">
                <p className="text-sm h-max text-[#000000]">Time: 8:30am-4:30pm</p>
                <p className="text-sm text-[#000000]">Location: Edlio Offices<br /></p>
              </div>
            </div>
            <div className="bg-[oklch(22.6%_.0495_264.23)] rounded-xl p-6 sm:p-8 text-center mb-8 flex-col grid grow basis-[0%]">
              <h3 className="font-bold mb-2 text-white">{event.title}</h3>
              <p className="text-sm text-white">Time: {event.time}</p>
              <p className="text-sm text-white">Location: {event.location}</p>
            </div>
            <div className="bg-[oklch(100%_0_90)] rounded-xl p-6 sm:p-8 text-center mb-8 grow basis-[0%] flex flex-col gap-[8px]">
              <h3 className="font-bold [color:oklch(0.226_0.0495_264.23)] my-0 h-max">Independence Day</h3>
              <div className="h-max">
                <p className="text-sm h-max text-[#000000]">Time: 10:30am-3:30pm</p>
                <p className="text-sm text-[#000000] h-max">Location: Spike's Pool</p>
              </div>
            </div>
            <div className="bg-[oklch(100%_0_90)] rounded-xl p-6 sm:p-8 text-center mb-8 grow basis-[0%] flex flex-col gap-[8px]">
              <h3 className="font-bold [color:oklch(0.226_0.0495_264.23)] h-max my-0">Columbus Day</h3>
              <div>
                <p className="text-sm h-max text-[#000000]">Time: 11:00am-5:30pm</p>
                <p className="text-sm text-[#000000]">Location: School Classrooms</p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous date"
            className="w-11 h-11 rounded-full flex items-center justify-center text-[#A9812E] hover:bg-black/5 transition-colors shrink-0 [color:oklch(0.226_0.0495_264.23)]"
          >
            <ArrowLeftIcon className="w-3 h-3" />
          </button>
          <button className="bg-[oklch(22.6%_.0495_264.23)] hover:bg-[#8B6A1F] text-xs font-bold uppercase tracking-wide px-6 py-2.5 rounded-lg transition-colors [color:oklch(0.627_0.1098_82.164)]">
            More Events
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next date"
            className="w-11 h-11 rounded-full flex items-center justify-center text-[#A9812E] hover:bg-black/5 transition-colors shrink-0 [color:oklch(0.226_0.0495_264.23)]"
          >
            <ArrowRightIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
