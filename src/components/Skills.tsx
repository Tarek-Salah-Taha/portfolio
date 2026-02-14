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
  Code2,
  Cpu,
  Terminal,
  Smartphone,
  Cloud,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiSupabase, SiRedux } from "react-icons/si";

const Skills = () => {
  const { t } = useLanguage();

  const skills = {
    "skills.core": {
      icon: <Monitor className="w-full h-full" />,
      items: ["HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript"],
    },
    "skills.frameworks": {
      icon: <Layers className="w-full h-full" />,
      items: [
        "React",
        "Next.js",
        "Redux Toolkit",
        "TanStack React Query",
        "React Hook Form",
      ],
    },
    "skills.styling": {
      icon: <Paintbrush className="w-full h-full" />,
      items: ["Tailwind CSS", "CSS Animations & Transitions", "Framer Motion"],
    },
    "skills.toolsWorkflow": {
      icon: <Wrench className="w-full h-full" />,
      items: ["Git & GitHub", "VS Code", "npm / yarn / pnpm", "Vite"],
    },
    "skills.backend": {
      icon: <Database className="w-full h-full" />,
      items: ["Supabase", "SQL Basics"],
    },
    "skills.specialized": {
      icon: <Globe className="w-full h-full" />,
      items: [
        "Internationalization (i18n)",
        "Responsive Design",
        "Dark Mode",
        "SEO Optimization",
      ],
    },
    "skills.performance": {
      icon: <Rocket className="w-full h-full" />,
      items: ["Code Splitting", "Lazy Loading", "Image Optimization"],
    },
    "skills.data": {
      icon: <Box className="w-full h-full" />,
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const marqueeIcons = [
    { icon: FaReact, color: "text-blue-400" },
    { icon: SiNextdotjs, color: "text-white dark:text-white" },
    { icon: SiTypescript, color: "text-blue-600" },
    { icon: SiJavascript, color: "text-yellow-400" },
    { icon: SiTailwindcss, color: "text-cyan-400" },
    { icon: FaNodeJs, color: "text-green-500" },
    { icon: SiSupabase, color: "text-emerald-500" },
    { icon: SiRedux, color: "text-purple-500" },
    { icon: FaHtml5, color: "text-orange-500" },
    { icon: FaCss3Alt, color: "text-blue-500" },
    { icon: FaGithub, color: "text-gray-700 dark:text-white" },
  ];

  return (
    <section id="skills" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("skills.technologies")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
        >
          {Object.entries(skills).map(([title, { icon, items }]) => (
            <motion.div key={title} variants={itemVariants} className="h-full">
              <SkillCard title={title} icon={icon} items={items} />
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden py-10 bg-muted/20 -mx-4 lg:-mx-8">
          <div className="flex w-full absolute left-0 top-0 h-full items-center">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          </div>

          <motion.div
            className="flex gap-16 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30
            }}
          >
            {[...marqueeIcons, ...marqueeIcons, ...marqueeIcons].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                <item.icon className={`text-5xl ${item.color} drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
