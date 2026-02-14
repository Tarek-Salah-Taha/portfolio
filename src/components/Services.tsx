import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Server, Smartphone, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t("services.frontend.title"),
            description: t("services.frontend.desc"),
            icon: <Code2 className="w-10 h-10 text-primary" />,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: t("services.backend.title"),
            description: t("services.backend.desc"),
            icon: <Server className="w-10 h-10 text-primary" />,
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: t("services.responsive.title"),
            description: t("services.responsive.desc"),
            icon: <Smartphone className="w-10 h-10 text-primary" />,
            gradient: "from-orange-500 to-yellow-500",
        },
        {
            title: t("services.optimization.title"),
            description: t("services.optimization.desc"),
            icon: <Rocket className="w-10 h-10 text-primary" />,
            gradient: "from-green-500 to-emerald-500",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                        {t("services.title")}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("services.description")}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-full"
                        >
                            <Card className="h-full group relative overflow-hidden bg-card/40 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-primary/20 flex flex-col">
                                {/* Animated Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

                                {/* Top Decoration */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />

                                <CardHeader className="relative z-10 pt-10 pb-6 flex flex-col items-center text-center">
                                    <div className="relative mb-8">
                                        {/* Icon Container */}
                                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <div className="w-10 h-10 text-primary group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.8)] transition-all">
                                                {service.icon}
                                            </div>
                                        </div>
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-50 group-hover:scale-100 transition-all duration-700 -z-10" />
                                    </div>

                                    <CardTitle className="text-2xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-500">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="relative z-10 text-center pb-10 px-8 flex-1">
                                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </CardContent>

                                {/* Bottom Interactive Line */}
                                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-500 w-0 group-hover:w-full`} />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
