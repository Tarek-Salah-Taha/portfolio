import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  items: string[];
};

const SkillCard = ({ title, icon, items }: SkillCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group relative overflow-hidden glass border-primary/20 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

      <CardHeader className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-start pt-10 pb-4">
        <div className="relative mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 ease-out">
          {/* Main icon container with glass effect */}
          <div className="relative z-10 p-6 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="w-12 h-12 md:w-14 md:h-14 text-primary group-hover:text-accent group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.8)] transition-all duration-500">
              {icon}
            </div>
          </div>
          {/* Animated glow background */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-125 group-hover:bg-primary/40 transition-all duration-700 -z-10 animate-pulse" />
        </div>
        <CardTitle className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent mb-3">
          {t(title)}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 flex flex-wrap justify-center sm:justify-start gap-3 pb-10">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2.5 rounded-2xl text-sm font-bold bg-muted/30 text-foreground/70 border border-white/5 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_10px_20px_-5px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all duration-500"
          >
            {skill}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillCard;
