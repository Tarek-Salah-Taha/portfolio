import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiSupabase, SiRedux } from "react-icons/si";

const Skills = () => {
  const { t } = useLanguage();

  const categories = [
    {
      label: t("skills.core"),
      items: ["HTML5 & CSS3", "JavaScript ES6+", "TypeScript"],
    },
    {
      label: t("skills.frameworks"),
      items: ["React", "Next.js", "Redux Toolkit", "TanStack Query", "React Hook Form"],
    },
    {
      label: t("skills.styling"),
      items: ["Tailwind CSS", "Framer Motion", "CSS Animations"],
    },
    {
      label: t("skills.toolsWorkflow"),
      items: ["Git & GitHub", "Vite", "npm / yarn", "VS Code"],
    },
    {
      label: t("skills.backend"),
      items: ["Supabase", "SQL Basics", "REST APIs"],
    },
    {
      label: t("skills.specialized"),
      items: ["i18n / RTL", "Responsive Design", "SEO", "Dark Mode"],
    },
  ];

  const icons = [
    { icon: FaReact, color: "#61DAFB", label: "React" },
    { icon: SiNextdotjs, color: "#fff", label: "Next.js" },
    { icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
    { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
    { icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
    { icon: FaNodeJs, color: "#68A063", label: "Node.js" },
    { icon: SiSupabase, color: "#3ECF8E", label: "Supabase" },
    { icon: SiRedux, color: "#764ABC", label: "Redux" },
    { icon: FaHtml5, color: "#E34F26", label: "HTML5" },
    { icon: FaCss3Alt, color: "#264DE4", label: "CSS3" },
    { icon: FaGithub, color: "#aaa", label: "GitHub" },
  ];

  const doubled = [...icons, ...icons];

  return (
    <section id="skills" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-5">
            <span className="gold-line" />
            <span className="section-label">{t("nav.skills")}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("skills.title").split(" ")[0]} <span className="gradient-text">{t("skills.title").split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs font-light leading-relaxed sm:text-end">
              {t("skills.technologies")}
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {categories.map(({ label, items }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 border border-border/50 hover:border-primary/30 transition-all duration-400 bg-card/20 hover:bg-card/40">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border/50 group-hover:bg-primary/20 transition-colors duration-300" />
                <span className="text-sm font-semibold text-foreground/80">{label}</span>
              </div>
              <ul className="space-y-2">
                {items.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Icon marquee */}
        <div className="relative overflow-hidden py-6">
          <div className="absolute start-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute end-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="marquee-track gap-14">
            {doubled.map(({ icon: Icon, color, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <Icon style={{ color, fontSize: 36 }} />
                <span className="text-xs text-muted-foreground font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
