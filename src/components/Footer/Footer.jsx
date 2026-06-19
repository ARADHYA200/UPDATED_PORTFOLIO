import { Link } from "react-scroll";
import { Download } from "lucide-react";
import { profile } from "../../data/profile";
import { socialLinks, footerLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text">
              {profile.name}
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
              {profile.role} passionate about Full Stack Development, Backend Engineering, and AI.
            </p>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition text-sm font-medium"
              aria-label="Download resume"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href.replace("#", "")}
                  smooth
                  duration={500}
                  offset={-70}
                  className="text-gray-400 hover:text-white transition text-sm cursor-pointer w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, url, icon: Icon, ariaLabel }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-500/50 transition-all hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href={`mailto:${profile.email}`}
                className="block hover:text-white transition"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="block hover:text-white transition"
              >
                {profile.phone}
              </a>
              <p>{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
