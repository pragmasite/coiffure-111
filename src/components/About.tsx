import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
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

  return (
    <section
      id="a-propos"
      ref={ref}
      className="py-24 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-primary"
          >
            {t.about.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl mt-4 mb-6"
          >
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.about.p2}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 md:gap-6"
            >
              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <div className="text-3xl font-serif text-primary mb-2">25+</div>
                <p className="text-sm text-muted-foreground">{t.about.stat1}</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <div className="text-3xl font-serif text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">{t.about.stat2}</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <div className="text-3xl font-serif text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">{t.about.stat3}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
