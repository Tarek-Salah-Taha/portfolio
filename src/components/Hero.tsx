import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaCircleArrowDown, FaWhatsapp } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[45%] bg-accent/20 rounded-full blur-[100px] animate-pulse transition-all duration-1000" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-purple-500/10 rounded-full blur-[80px]" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Interactive Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-12 h-12 border-2 border-primary/20 rounded-xl hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-[15%] w-16 h-16 border-2 border-accent/20 rounded-full hidden lg:block"
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative">
              <span className="inline-block py-2 px-6 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase border border-primary/10 backdrop-blur-md">
                {t("hero.greeting")}
              </span>
              <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full -z-10 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            <span className="block text-foreground drop-shadow-sm">{t("hero.name").split(' ')[0]}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
              {t("hero.name").split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-foreground/90 mb-10 max-w-3xl mx-auto">
            {t("hero.title")}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            {t("hero.subtitle")}
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16 px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden text-lg px-10 py-8 rounded-2xl bg-primary hover:bg-primary transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(var(--primary),0.5)] border-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("hero.cta.projects")}
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-10 py-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {t("hero.cta.contact")}
            </Button>
          </motion.div>

          {/* Social Links - Glass Morphism Style */}
          <motion.div variants={itemVariants} className="flex justify-center gap-8">
            {[
              { icon: LuGithub, href: "https://github.com/Tarek-Salah-Taha", color: "hover:text-foreground" },
              { icon: SlSocialLinkedin, href: "https://www.linkedin.com/in/tarek-salah-a8813b99/", color: "hover:text-[#0077B5]" },
              { icon: FaWhatsapp, href: "https://wa.me/2001003535586", color: "hover:text-[#25D366]" },
              { icon: CiMail, href: "mailto:tareksalah168@gmail.com", color: "hover:text-primary" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative p-4 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md transition-all duration-500 ${social.color} text-foreground/60`}
              >
                <social.icon size={28} className="relative z-10" />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block py-6"
            onClick={() => scrollToSection("about")}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-16 rounded-full border-2 border-primary/30 p-2 flex justify-center"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
