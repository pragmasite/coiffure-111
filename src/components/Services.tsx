import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";
import { Scissors, Sparkles, Droplet, Wind } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const icons = [Scissors, Wind, Droplet, Sparkles];

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

  return (
    <section id="services" ref={ref} className="py-24 bg-background">
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
            {t.services.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl mt-4 mb-6"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            {t.services.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t.services.items.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-gradient-to-br from-white to-muted/30 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
