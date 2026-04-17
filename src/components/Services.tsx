import { useLanguage } from "@/hooks/useLanguage";
import { Code2, Server, Smartphone, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { title: t("services.frontend.title"), desc: t("services.frontend.desc"), icon: Code2, num: "01" },
    { title: t("services.backend.title"), desc: t("services.backend.desc"), icon: Server, num: "02" },
    { title: t("services.responsive.title"), desc: t("services.responsive.desc"), icon: Smartphone, num: "03" },
    { title: t("services.optimization.title"), desc: t("services.optimization.desc"), icon: Rocket, num: "04" },
  ];

  return (
    <section id="services" className="py-32 bg-card/30 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 gap-6 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="gold-line" />
              <span className="section-label">{t("services.whatIDo")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {t("services.title").split(" ")[0]} <span className="gradient-text">{t("services.title").split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed font-light sm:text-end">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border/30 max-w-6xl mx-auto">
          {services.map(({ title, desc, icon: Icon, num }, i) => (
            <motion.div key={num}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-background p-10 relative overflow-hidden hover:bg-card/50 transition-colors duration-500 cursor-default">
              {/* Number watermark */}
              <span className="absolute top-6 end-8 text-5xl font-black text-border/40 group-hover:text-primary/10 transition-colors duration-500 select-none"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {num}
              </span>
              {/* Hover line */}
              <div className="absolute bottom-0 start-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 border border-border group-hover:border-primary/40 flex items-center justify-center mb-8 transition-colors duration-300">
                  <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
