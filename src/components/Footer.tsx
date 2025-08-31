import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    {
      icon: <Mail size={20} />,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="font-bold text-2xl gradient-text hover:scale-105 transition-transform duration-300"
            >
              Portfolio
            </button>
            <p className="text-muted-foreground mt-2">
              Frontend Developer specializing in React & Next.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-muted-foreground">
            <p className="flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with{" "}
              <Heart size={16} className="text-red-500" /> by Your Name
            </p>
            <p className="text-sm mt-1">{t("footer.rights")}</p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            ↑ Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
