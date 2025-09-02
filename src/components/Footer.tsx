import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaCircleArrowUp } from "react-icons/fa6";

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
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Social Links */}
        <div className="flex justify-center gap-4  mb-6">
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
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1 text-sm">
            © {currentYear} {t("footer.me")}
          </p>
          <p className="text-xs mt-1">{t("footer.rights")}</p>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <FaCircleArrowUp />
            {t("footer.backToTop")}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
