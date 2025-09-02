import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaStar } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "smartCart E-commerce",
      description:
        "A modern e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/smartcart.jpg",
      github: "https://github.com/Tarek-Salah-Taha/smartCart",
      live: "https://smartcart-final.netlify.app/",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Hotelya Booking App",
      description:
        "A property listing application with advanced search filters, virtual tours, and agent contact system.",
      technologies: ["React", "TypeScript", "Google Maps API", "Firebase"],
      image: "/hotelya.jpg",
      github: "https://github.com/Tarek-Salah-Taha/hotelya",
      live: "https://hotelya-eosin.vercel.app/",
      isFeatured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern web development practices with animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/hotelya.jpg",
      github: "https://github.com/Tarek-Salah-Taha/portfolio", // Update with actual URL
      live: "https://your-portfolio.com", // Update with actual URL
      isFeatured: false,
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
      image: "/hotelya.jpg",
      github: "https://github.com/Tarek-Salah-Taha/task-manager", // Update with actual URL
      live: "https://your-taskmanager.com", // Update with actual URL
      isFeatured: false,
    },
  ];

  // Enhanced function to handle button clicks with better error handling
  const handleButtonClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();

    if (url && url !== "#" && url !== "") {
      try {
        window.open(url, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Error opening URL:", error);
      }
    } else {
      console.log("Invalid or placeholder URL");
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="relative overflow-hidden group border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
                transform:
                  hoveredCard === project.id
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)",
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Featured badge */}
              {project.isFeatured && (
                <div className="absolute top-3 start-3 z-20">
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md">
                    <FaStar className="text-xs" />
                    <span>{t("projects.featured")}</span>
                  </div>
                </div>
              )}

              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

              {/* Glow effect on hover - Fixed z-index */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>

              <CardHeader className="relative p-0 overflow-hidden">
                <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg group">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

                  {/* Buttons overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-auto z-10">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 shadow-md hover:bg-background/90 transition-all duration-200"
                      onClick={(e) => handleButtonClick(project.github, e)}
                      disabled={!project.github || project.github === "#"}
                    >
                      <FaGithub size={16} />
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all duration-200"
                      onClick={(e) => handleButtonClick(project.live, e)}
                      disabled={!project.live || project.live === "#"}
                    >
                      <FiExternalLink size={16} />
                    </Button>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold pt-5 px-5 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 py-5 relative z-10">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 transition-all duration-300 hover:shadow-md relative z-10"
                    onClick={(e) => handleButtonClick(project.github, e)}
                    disabled={!project.github || project.github === "#"}
                  >
                    <FaGithub size={16} className="mr-2" />
                    {t("projects.viewCode")}
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 transition-all duration-300 hover:shadow-md relative z-10"
                    onClick={(e) => handleButtonClick(project.live, e)}
                    disabled={!project.live || project.live === "#"}
                  >
                    <FiExternalLink size={16} className="mr-2" />
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
