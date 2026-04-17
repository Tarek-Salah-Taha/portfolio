import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("projects.smartcart.title"),
      description: t("projects.smartcart.description"),
      technologies: ["React", "TypeScript", "Redux Toolkit", "React Query", "Supabase", "Tailwind CSS", "Framer Motion"],
      image: "/smartcart.png",
      github: "https://github.com/Tarek-Salah-Taha/smartCart",
      live: "https://smart-cart-nu.vercel.app/",
      tag: t("projects.tags.ecommerce"),
    },
    {
      id: 2,
      title: t("projects.hotelya.title"),
      description: t("projects.hotelya.description"),
      technologies: ["Next.js", "TypeScript", "Supabase", "Next Intl", "React Hook Form", "Framer Motion"],
      image: "/hotelya.png",
      github: "https://github.com/Tarek-Salah-Taha/hotelya",
      live: "https://hotelya-eosin.vercel.app/",
      tag: t("projects.tags.booking"),
    },
    {
      id: 3,
      title: t("projects.expensify.title"),
      description: t("projects.expensify.description"),
      technologies: ["React", "Tailwind CSS", "i18next", "Context API", "Supabase"],
      image: "/expensify.png",
      github: "https://github.com/Tarek-Salah-Taha/Expensify",
      live: "https://expensify-six-drab.vercel.app/",
      tag: t("projects.tags.finance"),
    },
    {
      id: 4,
      title: t("projects.luxestate.title"),
      description: t("projects.luxestate.description"),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router v6", "Vite"],
      image: "/luxestate.png",
      github: "https://github.com/Tarek-Salah-Taha/LuxEstate",
      live: "https://lux-estate-sable.vercel.app/",
      tag: t("projects.tags.realestate"),
    },
    {
      id: 5,
      title: t("projects.cairocare.title"),
      description: t("projects.cairocare.description"),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "React Context API"],
      image: "/cairocareclinic.png",
      github: "https://github.com/Tarek-Salah-Taha/CairoCareClinic",
      live: "https://cairo-care-clinic.vercel.app/",
      tag: t("projects.tags.healthcare"),
    },
    {
      id: 6,
      title: t("projects.homefix.title"),
      description: t("projects.homefix.description"),
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "React Hook Form"],
      image: "/homefix.png",
      github: "#",
      live: "#",
      tag: t("projects.tags.services"),
    },
  ];

  return (
    <section id="projects" className="py-32 bg-card/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 gap-6 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="gold-line" />
              <span className="section-label">{t("nav.projects")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("projects.title").split(" ")[0]} <span className="gradient-text">{t("projects.title").split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs font-light leading-relaxed sm:text-end">
            {t("projects.description")}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group border border-border/50 hover:border-primary/30 bg-background hover:bg-card/60 transition-all duration-500 overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-muted/20">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                  }} />
                {/* Fallback */}
                <div className=" absolute inset-0 flex items-center justify-center bg-muted/30">
                  <span className="text-4xl opacity-30">⬡</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs font-semibold tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      <FaGithub size={14} />
                      {t("projects.viewCode")}
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-primary/60 text-primary text-xs font-semibold tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      <FiExternalLink size={14} />
                      {t("projects.viewLive")}
                    </a>
                  )}
                </div>
                {/* Tag */}
                <div className="absolute top-4 start-4">
                  <span className="section-label bg-background/80 backdrop-blur-sm px-3 py-1 text-[10px]">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4 flex-1 line-clamp-2">
                  {project.description}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 border border-border/60 text-muted-foreground font-medium tracking-wide">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 text-primary/70 font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
