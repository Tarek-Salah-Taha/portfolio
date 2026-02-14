import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaStar } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  const { t, language } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const projects = [
    {
      id: 1,
      title: t("projects.smartcart.title"),
      description: t("projects.smartcart.description"),
      features: t("projects.smartcart.features"),
      technologies: [
        "React",
        "TypeScript",
        "React Router",
        "Redux Toolkit",
        "React Query",
        "Supabase",
        "Tailwind CSS",
        "Framer Motion",
        "React Icons",
        "React Hot Toast",
      ],
      image: "/smartcart.png",
      github: "https://github.com/Tarek-Salah-Taha/smartCart",
      live: "https://smart-cart-nu.vercel.app/",
      isFeatured: true,
    },
    {
      id: 2,
      title: t("projects.hotelya.title"),
      description: t("projects.hotelya.description"),
      features: t("projects.hotelya.features"),
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Supabase",
        "Next Intl",
        "React Hook Form",
        "React Hot Toast",
        "React Icons",
        "React Datepicker",
        "Framer Motion",
      ],
      image: "/hotelya.png",
      github: "https://github.com/Tarek-Salah-Taha/hotelya",
      live: "https://hotelya-eosin.vercel.app/",
      isFeatured: true,
    },
    {
      id: 3,
      title: t("projects.expensify.title"),
      description: t("projects.expensify.description"),
      features: t("projects.expensify.features"),
      technologies: [
        "React",
        "Tailwind CSS",
        "i18next",
        "Context API",
        "Supabase",
        "React Icons",
      ],
      image: "/expensify.png",
      github: "https://github.com/Tarek-Salah-Taha/Expensify",
      live: "https://expensify-six-drab.vercel.app/",
      isFeatured: false,
    },
  ];

  // Track carousel state
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const handleButtonClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    if (url && url !== "#" && url !== "") {
      try {
        window.open(url, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Error opening URL:", error);
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              direction: language === "ar" ? "rtl" : "ltr",
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card
                      className="relative h-full flex flex-col overflow-hidden group border-2 border-primary/10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)] hover:border-primary/30 transition-all duration-500 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm"
                      onMouseEnter={() => setHoveredCard(project.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Featured badge */}
                      {project.isFeatured && (
                        <div className="absolute top-4 start-4 z-30">
                          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <FaStar className="text-sm animate-pulse" />
                            <span>{t("projects.featured")}</span>
                          </div>
                        </div>
                      )}

                      {/* Gradient accent bar */}
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

                      <CardHeader className="relative p-0 overflow-hidden">
                        <div className="relative h-80 md:h-96 w-full overflow-hidden group">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                          {/* Hover Overlay with Buttons */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-pink-900/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                            <Button
                              variant="secondary"
                              size="lg"
                              className="rounded-full bg-white/95 text-gray-900 hover:bg-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-xl hover:shadow-2xl hover:scale-110 flex items-center justify-center p-3 sm:px-6"
                              onClick={(e) => handleButtonClick(project.github, e)}
                              disabled={!project.github || project.github === "#"}
                            >
                              <FaGithub className="h-6 w-6 sm:mr-2" />
                              <span className="hidden sm:inline">{t("projects.viewCode")}</span>
                            </Button>
                            <Button
                              variant="default"
                              size="lg"
                              className="rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 shadow-xl hover:shadow-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 border-none hover:scale-110 flex items-center justify-center p-3 sm:px-6"
                              onClick={(e) => handleButtonClick(project.live, e)}
                              disabled={!project.live || project.live === "#"}
                            >
                              <FiExternalLink className="h-6 w-6 sm:mr-2" />
                              <span className="hidden sm:inline">{t("projects.viewLive")}</span>
                            </Button>
                          </div>
                        </div>

                        <CardTitle className="text-2xl md:text-3xl font-bold pt-6 px-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-5 p-6 flex-1 flex flex-col relative z-20">
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.slice(0, 6).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20 transition-all duration-300 group-hover:from-primary/20 group-hover:to-purple-500/20 group-hover:border-primary/40 group-hover:shadow-md"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 6 && (
                              <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-muted to-muted-foreground/10 text-muted-foreground border border-muted-foreground/20">
                                +{project.technologies.length - 6}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-16 h-16 w-16 border-2 border-primary/40 bg-gradient-to-br from-background to-primary/5 backdrop-blur-md hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-primary-foreground hover:border-primary shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-16 h-16 w-16 border-2 border-primary/40 bg-gradient-to-br from-background to-primary/5 backdrop-blur-md hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-primary-foreground hover:border-primary shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]" />
          </Carousel>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-500 rounded-full ${index === current
                  ? "w-12 h-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                  : "w-3 h-3 bg-muted-foreground/30 hover:bg-gradient-to-r hover:from-primary/50 hover:to-purple-500/50 hover:scale-125"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
