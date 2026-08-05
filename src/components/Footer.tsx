import { BookOpen } from "lucide-react";
import {
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./SocialIcons";
import { footerLinks } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#101B33] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold uppercase tracking-tight text-white text-base">
                Antares
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 -mt-1">
                High School
              </div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            12960 Culver Blvd, Suite 105
            <br />
            Los Angeles, CA 90066
          </p>
          <p className="text-white/60 text-sm mt-3">Phone: (877) 623-7200</p>
          <p className="text-white/60 text-sm">Fax: (888) 682-4062</p>
        </div>

        <div>
          <div className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
            Links
          </div>
          <ul className="space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/70 text-sm underline hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
            Follow Us
          </div>
          <div className="flex items-center gap-3 mb-6">
            {[FacebookIcon, LinkedinIcon, YoutubeIcon, InstagramIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/70 text-xs border border-white/30 rounded-full px-4 py-1.5">
              e Login
            </span>
            <span className="text-white/50 text-xs">Powered by edlio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
