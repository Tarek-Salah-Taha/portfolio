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
    <Card className="glass border-primary/20 shadow-primary hover:scale-105 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          {icon} {t(title)}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillCard;
