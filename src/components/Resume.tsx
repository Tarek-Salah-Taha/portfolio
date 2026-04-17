import { useLanguage } from "@/hooks/useLanguage";
import { Download, Eye, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Resume = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tarek-Salah.pdf";
    link.download = "Tarek-Salah.pdf";
    link.click();
  };

  const highlights = [
    { label: "React & Next.js", desc: t("resume.highlights.react") },
    { label: "TypeScript", desc: t("resume.highlights.typescript") },
    { label: "Supabase / SQL", desc: t("resume.highlights.supabase") },
    { label: "i18n / RTL", desc: t("resume.highlights.i18n") },
  ];

  return (
    <section id="resume" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute start-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="section-label">{t("nav.resume")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("resume.subtitle")}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
              {t("resume.experience")}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map(({ label, desc }) => (
                <div key={label} className="border border-border/50 p-4 hover:border-primary/30 transition-colors duration-300">
                  <div className="text-sm font-semibold text-foreground mb-1">{label}</div>
                  <div className="text-xs text-muted-foreground font-light">{desc}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button onClick={handleDownload}
                className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-colors duration-300">
                <Download size={16} />
                {t("resume.download")}
              </button>
              <button onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-7 py-3.5 border border-foreground/20 text-foreground/70 text-sm font-semibold tracking-wide uppercase hover:border-primary/50 hover:text-primary transition-all duration-300">
                <Eye size={16} />
                {t("resume.viewOnline")}
              </button>
            </div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center">
            <div className="relative">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-60 h-76 border border-border/60 bg-card/40 p-8 relative">
                {/* Corner accents */}
                <div className="absolute top-0 start-0 w-5 h-5 border-t border-s border-primary/60" />
                <div className="absolute top-0 end-0 w-5 h-5 border-t border-e border-primary/60" />
                <div className="absolute bottom-0 start-0 w-5 h-5 border-b border-s border-primary/60" />
                <div className="absolute bottom-0 end-0 w-5 h-5 border-b border-e border-primary/60" />

                <FileText size={36} className="text-primary/60 mb-6" />
                <div className="text-sm font-semibold text-foreground mb-1">{t("hero.name")}</div>
                <div className="text-xs text-primary mb-6 section-label" style={{ letterSpacing: "0.15em" }}>{t("hero.title")}</div>

                {/* Skeleton lines */}
                <div className="space-y-2.5">
                  {[80, 60, 75, 50, 65, 45, 70].map((w, i) => (
                    <div key={i} className="h-px bg-border/50" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -end-4 glass border border-primary/20 px-4 py-3 whitespace-nowrap">
                <div className="text-xs text-primary font-semibold">{t("resume.available")}</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground">{t("resume.openTo")}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{t("resume.preview")}</DialogTitle>
          </DialogHeader>
          <iframe src="/Tarek-Salah.pdf" className="w-full h-full" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Resume;
