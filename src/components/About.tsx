import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useLanguage();

  const facts = [
    { num: "3+", label: t("stats.years") },
    { num: "20+", label: t("stats.projects") },
    { num: "100%", label: t("stats.clients") },
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 end-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Visual */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="relative">
              {/* Main card */}
              <div className="aspect-square max-w-sm bg-muted/30 border border-border/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative z-10 text-center p-8">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <span className="section-label">{t("hero.title")}</span>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-0 start-0 w-8 h-8 border-t border-s border-primary/40" />
                <div className="absolute top-0 end-0 w-8 h-8 border-t border-e border-primary/40" />
                <div className="absolute bottom-0 start-0 w-8 h-8 border-b border-s border-primary/40" />
                <div className="absolute bottom-0 end-0 w-8 h-8 border-b border-e border-primary/40" />
              </div>
              {/* Floating stat card */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -end-6 glass border border-primary/20 p-5 min-w-[140px]">
                <div className="text-3xl font-black gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>20+</div>
                <div className="text-xs text-muted-foreground mt-1">{t("about.projectsBuilt")}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="section-label">{t("about.title")}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t("about.crafting").split(" ")[0]} {t("about.crafting").split(" ")[1]}<br />
              <span className="gradient-text">{t("about.crafting").split(" ").slice(2).join(" ")}</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light">
              {t("about.description")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg font-light">
              {t("about.description2")}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {facts.map(({ num, label }) => (
                <div key={label}>
                  <div className="text-3xl font-black gradient-text mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{num}</div>
                  <div className="text-xs text-muted-foreground font-medium">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
