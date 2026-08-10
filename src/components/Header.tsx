import { ChevronDown } from "lucide-react";
import { SearchIcon } from "./EdlioIcons";

const navItems = [
  { label: "Parents", dropdown: true },
  { label: "About Us", dropdown: true },
  { label: "Academics", dropdown: true },
  { label: "Resources", dropdown: true },
  { label: "Contact Us", dropdown: false },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/avicena-logo.png"
            alt="Avicena Christian School"
            className="w-14 h-14 object-contain"
          />
          <div className="leading-tight">
            <div className="font-extrabold uppercase tracking-tight text-[#101B33] text-lg">
              Avicena
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#000000] -mt-1">
              Christian School
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] hover:text-[#A9812E] transition-colors"
            >
              {item.label}
              {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <button
            aria-label="Search"
            className="w-11 h-11 flex items-center justify-center text-[#1a1a1a] hover:text-[#A9812E] transition-colors"
          >
            <SearchIcon className="w-4 h-4" />
          </button>
          <button className="bg-[oklch(22.6%_.0495_264.23)] hover:bg-[#8B6A1F] text-sm font-bold uppercase tracking-wide px-6 py-2.5 rounded-lg transition-colors [color:oklch(0.627_0.1098_82.164)]">
            Donate
          </button>
        </div>
      </div>
    </header>
  );
}
