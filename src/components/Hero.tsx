import { useLanguage } from "@/hooks/useLanguage";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item: Variants = {
    hidden: { y: 32, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const socials = [
    { icon: LuGithub, href: "https://github.com/Tarek-Salah-Taha", label: "GitHub" },
    { icon: SlSocialLinkedin, href: "https://www.linkedin.com/in/tarek-salah-a8813b99/", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "https://wa.me/2001003535586", label: "WhatsApp" },
    { icon: CiMail, href: "mailto:tareksalah168@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 start-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 end-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      {/* Floating geometric accents */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[12%] w-10 h-10 border border-primary/20 rotate-45 hidden lg:block" />
      <motion.div animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[10%] w-5 h-5 rounded-full bg-primary/20 hidden lg:block" />
      <motion.div animate={{ y: [0, -14, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 left-[18%] w-6 h-6 border border-primary/15 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 pt-20">
        <motion.div variants={container} initial="hidden" animate="visible"
          className="max-w-5xl mx-auto">

          {/* Label */}
          <motion.div variants={item} className="flex items-center gap-4 mb-10">
            <span className="gold-line" />
            <span className="section-label">{t("hero.greeting")}</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.88] tracking-tight mb-8">
            <span className="block text-foreground/90">{t("hero.name").split(" ")[0]}</span>
            <span className="block gradient-text">{t("hero.name").split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={item}
            className="text-xl md:text-2xl text-foreground/50 font-light italic mb-6 max-w-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("hero.title")}
          </motion.p>

          {/* Subtitle */}
          <motion.p variants={item}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-14 max-w-xl font-light">
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <button onClick={() => scrollTo("projects")}
              className="group relative px-8 py-4 rounded-none bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
              <span className="relative z-10">{t("hero.cta.projects")}</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-none border border-foreground/20 text-foreground/70 text-sm font-semibold tracking-wide uppercase hover:border-primary/50 hover:text-primary transition-all duration-300">
              {t("hero.cta.contact")}
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground/50 tracking-widest uppercase font-medium hidden sm:block">{t("hero.findMe")}</span>
            <span className="gold-line hidden sm:block" />
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/40 hover:text-primary transition-colors duration-300">
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-10 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer md:flex"
        onClick={() => scrollTo("about")}>
        <span className="section-label">{t("hero.scroll")}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
