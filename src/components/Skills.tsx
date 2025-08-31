import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const { t } = useLanguage();

  const frontendSkills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5 & CSS3", level: 98 },
  ];

  const tools = [
    { name: "Git & GitHub", level: 90 },
    { name: "Figma", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Vite", level: 88 },
    { name: "npm/yarn", level: 90 },
    { name: "Responsive Design", level: 95 },
  ];

  const SkillCard = ({
    title,
    skills,
  }: {
    title: string;
    skills: typeof frontendSkills;
  }) => (
    <Card className="glass border-primary/20 shadow-primary hover:scale-105 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl gradient-text">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-hero-gradient rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.level}%`,
                  animationDelay: `${index * 200}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillCard title={t("skills.frontend")} skills={frontendSkills} />
          <SkillCard title={t("skills.tools")} skills={tools} />
        </div>

        {/* Technology Icons */}
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
