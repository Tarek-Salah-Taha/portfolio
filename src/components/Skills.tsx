import { useLanguage } from "@/hooks/useLanguage";
import SkillCard from "./SkillCard";
import {
  Monitor,
  Layers,
  Paintbrush,
  Wrench,
  Database,
  Globe,
  Rocket,
  Box,
} from "lucide-react";

const Skills = () => {
  const { t } = useLanguage();

  const skills = {
    "skills.core": {
      icon: <Monitor className="w-5 h-5 text-primary" />,
      items: ["HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript"],
    },
    "skills.frameworks": {
      icon: <Layers className="w-5 h-5 text-primary" />,
      items: [
        "React",
        "Next.js",
        "Redux Toolkit",
        "TanStack React Query",
        "React Hook Form",
      ],
    },
    "skills.styling": {
      icon: <Paintbrush className="w-5 h-5 text-primary" />,
      items: ["Tailwind CSS", "CSS Animations & Transitions", "Framer Motion"],
    },
    "skills.toolsWorkflow": {
      icon: <Wrench className="w-5 h-5 text-primary" />,
      items: ["Git & GitHub", "VS Code", "npm / yarn / pnpm", "Vite"],
    },
    "skills.backend": {
      icon: <Database className="w-5 h-5 text-primary" />,
      items: ["Supabase", "SQL Basics"],
    },
    "skills.specialized": {
      icon: <Globe className="w-5 h-5 text-primary" />,
      items: [
        "Internationalization (i18n)",
        "Responsive Design",
        "Dark Mode",
        "SEO Optimization",
      ],
    },
    "skills.performance": {
      icon: <Rocket className="w-5 h-5 text-primary" />,
      items: ["Code Splitting", "Lazy Loading", "Image Optimization"],
    },
    "skills.data": {
      icon: <Box className="w-5 h-5 text-primary" />,
      items: [
        "LocalStorage",
        "API Integration",
        "Pagination & Infinite Scroll",
        "Filtering & Sorting",
        "Reusable Hooks",
        "Reusable Modals",
      ],
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("skills.technologies")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([title, { icon, items }]) => (
            <SkillCard key={title} title={title} icon={icon} items={items} />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
          {["⚛️", "📦", "🎨", "⚡", "🔧", "💻", "🚀", "📱"].map(
            (icon, index) => (
              <div
                key={index}
                className="text-4xl animate-float"
                style={{ animationDelay: `${index * 500}ms` }}
              >
                {icon}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
