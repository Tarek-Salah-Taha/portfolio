import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("about.title")}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass border-primary/20 shadow-primary">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I specialize in building responsive web applications with
                    clean, modern designs. My passion lies in creating seamless
                    user experiences and optimizing performance.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">3+</div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">
                        Projects Completed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-hero-gradient rounded-full p-1">
                      <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                        <div className="w-56 h-56 bg-muted rounded-full flex items-center justify-center text-6xl">
                          👨‍💻
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
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
