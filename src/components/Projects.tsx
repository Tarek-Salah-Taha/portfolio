import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "🛒",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
      image: "📋",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern web development practices with animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "💼",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      image: "🌤️",
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A full-stack blog platform with content management, user authentication, and SEO optimization.",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      image: "📝",
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Real Estate App",
      description:
        "A property listing application with advanced search filters, virtual tours, and agent contact system.",
      technologies: ["React", "TypeScript", "Google Maps API", "Firebase"],
      image: "🏠",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            creating exceptional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass border-primary/20 shadow-primary hover:scale-105 transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative">
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <CardTitle className="text-lg font-semibold">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    {t("projects.viewCode")}
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    {t("projects.viewLive")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
