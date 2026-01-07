import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactMethods = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 32 466 77 78",
      href: "tel:+41324667778",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "coiffure.centonze@gmail.com",
      href: "mailto:coiffure.centonze@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rue de la Chaumont 13, 2900 Porrentruy, CH",
      href: "https://maps.google.com/?q=Rue+de+la+Chaumont+13,+2900+Porrentruy",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-primary"
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl mt-4 mb-6"
          >
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            {t.contact.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  className="flex gap-4 p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground mt-1">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div variants={itemVariants} className="pt-6">
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41324667778">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-2xl overflow-hidden shadow-medium"
          >
            <div className="relative w-full h-96 md:h-full md:min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.7899932487373!2d7.072733!3d47.416930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ed8c8c8c8c8cb%3A0x8c8c8c8c8c8c8c8c!2sRue%20de%20la%20Chaumont%2013%2C%202900%20Porrentruy!5e0!3m2!1sfr!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>

        {/* Business Hours Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10"
        >
          <motion.h3
            variants={itemVariants}
            className="font-serif text-2xl mb-4 text-foreground"
          >
            {t.contact.mapTitle}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-4"
          >
            Rue de la Chaumont 13, 2900 Porrentruy, Suisse
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div>
              <p className="font-medium text-foreground mb-2">Accès</p>
              <p className="text-sm text-muted-foreground">
                Places de parking à proximité du salon
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Localisation</p>
              <p className="text-sm text-muted-foreground">
                Situé dans la vieille ville, idéalement accessible
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
