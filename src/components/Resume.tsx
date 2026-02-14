import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, FileText, Eye } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tarek-Salah.pdf"; // must be inside /public
    link.download = "Tarek-Salah.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {t("resume.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("resume.description")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass border-primary/20 shadow-primary">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="text-center md:text-start">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-hero-gradient rounded-full mb-6 animate-pulse">
                        <FileText size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        {t("resume.subtitle")}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {t("resume.experience")}
                      </p>
                    </div>
                  </motion.div>

                  {/* Animated card preview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center"
                  >
                    <div className="relative">
                      <div className="w-64 h-80 bg-card border-2 border-primary/20 rounded-lg shadow-primary overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105">
                        <div className="h-full bg-hero-gradient-subtle flex flex-col items-center justify-center text-center p-6">
                          <FileText size={48} className="text-primary mb-4" />
                          <div className="space-y-2 text-sm">
                            <div className="h-2 bg-primary/30 rounded w-32"></div>
                            <div className="h-2 bg-primary/20 rounded w-24"></div>
                            <div className="h-2 bg-primary/30 rounded w-28"></div>
                            <div className="h-2 bg-primary/20 rounded w-20"></div>
                            <div className="h-2 bg-primary/30 rounded w-32"></div>
                            <div className="h-2 bg-primary/20 rounded w-16"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-float"></div>
                      <div
                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-float"
                        style={{ animationDelay: "2s" }}
                      ></div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
      >
        <Button
          variant="hero"
          size="lg"
          onClick={handleDownload}
          className="text-base px-8 py-3"
        >
          <Download size={20} className="mr-2" />
          {t("resume.download")}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setOpen(true)}
          className="text-base px-8 py-3"
        >
          <Eye size={20} className="mr-2" />
          {t("resume.viewOnline")}
        </Button>
      </motion.div>

      {/* Resume Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
          </DialogHeader>
          <iframe src="/Tarek-Salah.pdf" className="w-full h-full rounded-lg" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Resume;
