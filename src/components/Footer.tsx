import { FacebookIcon, YoutubeIcon, InstagramIcon } from "./SocialIcons";
import { footerLinks } from "../data";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook" },
  { image: "/images/linkedin-white.png", label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: InstagramIcon, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101B33] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/avicena-logo.png"
              alt="Avicena Christian School"
              className="w-12 h-12 object-contain"
            />
            <div className="leading-tight">
              <div className="font-extrabold uppercase tracking-tight text-white text-base">
                Avicena
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white -mt-1">
                Christian School
              </div>
            </div>
          </div>
          <p className="text-white text-sm leading-relaxed underline">
            12960 Culver Blvd, Suite 105
            <br />
            Los Angeles, CA 90066
          </p>
          <p className="text-white text-sm my-0">
            Phone: <span className="underline">(877) 623-7200</span>
          </p>
          <p className="text-white text-sm">Fax: (888) 682-4062</p>
        </div>

        <div>
          <div className="text-white text-xs uppercase tracking-widest font-semibold mb-4">
            Links
          </div>
          <ul className="space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white text-sm underline hover:text-[#F5F1EA] active:text-[#A9812E] rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white text-xs uppercase tracking-widest font-semibold mb-4">
            Follow Us
          </div>
          <div className="flex items-center gap-3 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 active:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                {social.image ? (
                  <img src={social.image} alt={social.label} className="w-11 h-11" />
                ) : (
                  <social.icon className="w-11 h-11" />
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Edlio Login"
              className="bg-white rounded-full px-4 py-1.5 flex items-center hover:bg-[#F5F1EA] active:bg-[#e9e2d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              <img src="/images/edlio-login.png" alt="Edlio Login" className="h-4 w-auto" />
            </a>
            <img
              src="/images/edlio-powered-by.png"
              alt="Powered by edlio"
              className="h-3.5 w-auto brightness-0 invert opacity-90"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
