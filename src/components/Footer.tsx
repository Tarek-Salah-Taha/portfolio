import { useLanguage } from "@/hooks/useLanguage";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { icon: LuGithub, href: "https://github.com/Tarek-Salah-Taha", label: "GitHub" },
    { icon: SlSocialLinkedin, href: "https://www.linkedin.com/in/tarek-salah-a8813b99/", label: "LinkedIn" },
    { icon: CiMail, href: "mailto:tareksalah168@gmail.com", label: "Email" },
    { icon: FaWhatsapp, href: "https://wa.me/2001003535586", label: "WhatsApp" },
  ];

  const navLinks = ["about", "services", "skills", "projects", "resume", "contact"];

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-['Playfair_Display'] text-2xl font-bold text-foreground/90 mb-3">
              TS<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
              {t("footer.desc")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="section-label mb-5">{t("footer.navigation")}</div>
            <ul className="space-y-2.5">
              {navLinks.map(key => (
                <li key={key}>
                  <button onClick={() => document.getElementById(key)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-light capitalize">
                    {t(`nav.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="section-label mb-5">{t("footer.connect")}</div>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <Icon size={15} className="flex-shrink-0" />
                  <span className="font-light">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50 font-light">
            © {year} Tarek Salah. {t("footer.rights")}
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-muted-foreground/50 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-widest">
            {t("footer.backToTop")} ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
