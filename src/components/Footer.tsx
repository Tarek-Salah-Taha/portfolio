import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaCircleArrowUp, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LuGithub size={20} />,
      href: "https://github.com/Tarek-Salah-Taha",
      label: "GitHub",
    },
    {
      icon: <SlSocialLinkedin size={20} />,
      href: "https://www.linkedin.com/in/tarek-salah-a8813b99/",
      label: "LinkedIn",
    },
    {
      icon: <CiMail size={20} />,
      href: "mailto:tareksalah168@gmail.com",
      label: "Email",
    },
    {
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/2001003535586",
      label: "WhatsApp",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-primary/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[100px] bg-primary/5 blur-[80px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col items-center">
          {/* Brand/Logo Area */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-black bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              Tarek Salah
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full" />
          </div>

          {/* Social Links - Glass Morphism Style */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-4 rounded-2xl bg-muted/30 border border-white/5 shadow-lg backdrop-blur-md transition-all duration-300 hover:text-primary hover:border-primary/30"
                aria-label={link.label}
              >
                {link.icon}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.a>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="text-center space-y-3 mb-12">
            <p className="text-muted-foreground font-medium text-lg">
              {t("footer.me").split(' – ')[0]}
            </p>
            <p className="text-sm text-muted-foreground/60 max-w-md mx-auto leading-relaxed">
              {t("footer.me").split(' – ')[1] || ""}
            </p>
            <p className="text-xs text-muted-foreground/40 font-mono mt-6">
              © {currentYear} • {t("footer.rights")}
            </p>
          </div>

          {/* Back to Top - Seamless Integration */}
          <motion.div
            whileHover={{ y: -5 }}
            className="pt-8 border-t border-primary/10 w-full flex justify-center"
          >
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="group text-muted-foreground hover:text-primary transition-all duration-300 gap-3 font-bold text-sm tracking-widest uppercase px-8 py-6 rounded-2xl"
            >
              <FaCircleArrowUp className="text-primary group-hover:animate-bounce" size={20} />
              {t("footer.backToTop")}
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
