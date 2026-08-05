import { Search, ChevronDown, BookOpen } from "lucide-react";

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
          <div className="w-10 h-10 rounded-md bg-[#101B33] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold uppercase tracking-tight text-[#101B33] text-lg">
              Antares
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#6b6355] -mt-1">
              High School
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] hover:text-[#C0392B] transition-colors"
            >
              {item.label}
              {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <button
            aria-label="Search"
            className="text-[#1a1a1a] hover:text-[#C0392B] transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button className="bg-[#C0392B] hover:bg-[#a5301f] text-white text-sm font-bold uppercase tracking-wide px-6 py-2.5 rounded-full transition-colors">
            Donate
          </button>
        </div>
      </div>
    </header>
  );
}
