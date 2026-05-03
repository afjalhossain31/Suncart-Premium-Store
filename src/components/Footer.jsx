import Image from "next/image";
import {
  IoSunny,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";

import logoDark from "../../public/solis-logo-white.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-stone-900 text-amber-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <IoSunny />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold font-serif text-amber-50 tracking-tight">
                Suncart <span className="text-orange-500 text-4xl">.</span>
              </span>
            </div>
            <p className="text-amber-50/70 mb-6 leading-relaxed">
              Your tropical paradise for summer essentials. Curated collections
              that bring the warmth of endless summer days to your doorstep.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-amber-50/60">
                <IoMailOutline className="text-lg text-orange-500" />
                <span className="text-sm">hello@Suncart.com</span>
              </div>
              <div className="flex items-center gap-3 text-amber-50/60">
                <IoCallOutline className="text-lg text-orange-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-amber-50/60">
                <IoLocationOutline className="text-lg text-orange-500" />
                <span className="text-sm">Miami Beach, FL 33139</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium text-amber-50 mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                {["Home", "Products", "About Us", "Contact"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-amber-50/70 hover:text-orange-500 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                {["Shop", "My Account", "Track Order", "FAQ"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-amber-50/70 hover:text-orange-500 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium text-amber-50 mb-6">
              Follow Us
            </h4>
            <p className="text-amber-50/70 mb-6">
              Stay connected for the latest summer trends and tropical vibes.
            </p>

            <div className="flex items-center gap-4 mb-8">
              {[
                { icon: IoLogoFacebook, label: "Facebook" },
                { icon: IoLogoTwitter, label: "Twitter" },
                { icon: IoLogoInstagram, label: "Instagram" },
                { icon: IoLogoYoutube, label: "Youtube" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group w-11 h-11 rounded-full bg-amber-50/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-linear-to-br from-amber-500 to-orange-500 hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
                >
                  <social.icon className="text-xl text-amber-50 group-hover:text-stone-900 transition-colors" />
                </a>
              ))}
            </div>

            <div>
              <h5 className="text-sm font-semibold text-amber-50 mb-3 uppercase tracking-wider">
                Newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-amber-50/10 border border-amber-50/20 rounded-full text-amber-50 placeholder:text-amber-50/40 focus:border-amber-500 focus:outline-none transition-colors"
                />
                <button className="px-5 py-2.5 rounded-full border-2 border-orange-500 bg-orange-500 text-stone-50 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)] transition-all active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-50/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-amber-50/60 text-center md:text-left">
              © {currentYear} Suncart Premium Store. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-amber-50/60 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
