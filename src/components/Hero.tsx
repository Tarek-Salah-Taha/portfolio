import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaCircleArrowDown } from "react-icons/fa6";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground mb-4 mt-6">
              {t("hero.greeting")}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">{t("hero.name")}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-6">
              {t("hero.title")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="text-base px-8 py-3"
            >
              {t("hero.cta.projects")}
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-base px-8 py-3"
            >
              {t("hero.cta.contact")}
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up flex justify-center gap-6 mb-12">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 text-foreground hover:text-primary"
            >
              <a
                href="https://github.com/Tarek-Salah-Taha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuGithub size={20} />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 text-foreground hover:text-primary"
            >
              <a
                href="https://www.linkedin.com/in/tarek-salah-a8813b99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin size={20} />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 text-foreground hover:text-primary"
            >
              <a href="mailto:tareksalah168@gmail.com">
                <CiMail size={20} />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full hover:bg-primary/10 text-foreground hover:text-primary"
            >
              <FaCircleArrowDown size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-glow rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default Hero;
