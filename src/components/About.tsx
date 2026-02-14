import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const { t } = useLanguage();



  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass border-primary/20 shadow-primary overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description2")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <div className="w-64 h-64 bg-hero-gradient rounded-full p-1 animate-spin-slow-reverse">
                      <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                        <div className="w-56 h-56 bg-muted rounded-full flex items-center justify-center text-6xl overflow-hidden relative">
                          {/* Replace emoji with an abstract gradient or keep as placeholder if no image */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            👨‍💻
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float"
                      style={{ animationDelay: "3s" }}
                    ></div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

const StatCard = ({ stat, delay }: { stat: { label: string; value: number; suffix: string }; delay: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasAnimated, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <Card className="glass border-primary/10 hover:border-primary/30 transition-all duration-300 text-center group">
        <CardContent className="p-6">
          <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
            {count}{stat.suffix}
          </div>
          <div className="text-sm md:text-base text-muted-foreground font-medium">
            {stat.label}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default About;
