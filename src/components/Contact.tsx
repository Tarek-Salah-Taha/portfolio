import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/hooks/usetoast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_qeoo5z9", "template_ybe735t", form, "Wk7LJue9Px793N7qM");
      toast({ title: t("contact.sent"), description: t("contact.thankYou") });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: t("contact.error"), description: t("contact.errorMessage") });
    } finally {
      setSending(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: t("contact.emailAddress"), value: "tareksalah168@gmail.com", href: "mailto:tareksalah168@gmail.com" },
    { icon: Phone, label: t("contact.phone"), value: "+20 0100 35 35 586", href: "tel:+2001003535586" },
    { icon: MapPin, label: t("contact.location"), value: t("contact.city"), href: null },
  ];

  return (
    <section id="contact" className="py-32 bg-card/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <span className="gold-line" />
            <span className="section-label">{t("nav.contact")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-lg">
            {t("contact.build1")} <span className="gradient-text">{t("contact.build2")}</span> {t("contact.build3")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8">
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              {t("contact.workDescription")}
            </p>

            <div className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-border/60 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors duration-300">
                    <Icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/60 mb-0.5 uppercase tracking-widest font-medium">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground/80 font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-xs text-muted-foreground/60 uppercase tracking-widest mb-2 font-medium">
                    {t("contact.name")}
                  </label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    className="w-full bg-transparent border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    placeholder="John Doe" />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-xs text-muted-foreground/60 uppercase tracking-widest mb-2 font-medium">
                    {t("contact.email")}
                  </label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-transparent border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    placeholder="john@example.com" />
                </div>
              </div>
              {/* Message */}
              <div>
                <label className="block text-xs text-muted-foreground/60 uppercase tracking-widest mb-2 font-medium">
                  {t("contact.message")}
                </label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                  className="w-full bg-transparent border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..." />
              </div>
              {/* Submit */}
              <button type="submit" disabled={sending}
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 disabled:opacity-60">
                <span>{sending ? t("contact.sending") : t("contact.send")}</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
