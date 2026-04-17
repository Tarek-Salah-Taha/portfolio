import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Globe } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = ["about", "services", "skills", "projects", "resume", "contact"];
      const current = sections.find(s => {
        const el = document.getElementById(s);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "resume", href: "#resume" },
    { key: "contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      isScrolled ? "glass border-b border-white/5" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-['Playfair_Display'] text-lg font-bold text-foreground/90 hover:text-primary transition-colors duration-300 tracking-tight">
            TS<span className="text-primary">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => scrollTo(item.href)}
                className={`relative text-sm font-medium transition-colors duration-300 group
                  ${activeSection === item.key ? "text-primary" : "text-foreground/60 hover:text-foreground"}`}>
                {t(`nav.${item.key}`)}
                <span className={`absolute -bottom-1 start-0 h-px bg-primary transition-all duration-300
                  ${activeSection === item.key ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme}
              className="p-2 rounded-full text-foreground/50 hover:text-foreground hover:bg-white/5 transition-all duration-300">
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="p-2 rounded-full text-foreground/50 hover:text-foreground hover:bg-white/5 transition-all duration-300">
              <Globe size={16} />
            </button>
            {/* Mobile burger */}
            <button onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 ms-1">
              <span className={`block h-px w-5 bg-foreground/70 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px w-5 bg-foreground/70 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-foreground/70 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass border border-white/5 rounded-xl mt-2 mb-4 overflow-hidden">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => scrollTo(item.href)}
                className={`block w-full px-6 py-3.5 text-sm font-medium text-start transition-colors duration-200 border-b border-white/5 last:border-0
                  ${activeSection === item.key ? "text-primary bg-primary/5" : "text-foreground/60 hover:text-foreground hover:bg-white/3"}`}>
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
