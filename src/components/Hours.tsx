import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const schedule = [
    { hours: t.hours.closed },       // Monday
    { hours: "08:00 - 18:30" },      // Tuesday
    { hours: "08:00 - 18:30" },      // Wednesday
    { hours: "08:00 - 18:30" },      // Thursday
    { hours: "08:00 - 18:30" },      // Friday
    { hours: "08:00 - 15:30" },      // Saturday
    { hours: t.hours.closed },       // Sunday
  ];

  const todayIndex = new Date().getDay();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="horaires"
      ref={ref}
      className="py-24 bg-muted"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-primary"
          >
            {t.hours.label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl mt-4"
          >
            {t.hours.title}
          </motion.h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border bg-background shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold text-foreground">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                      <div>
                        <span
                          className={`block font-medium ${
                            isToday ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full inline-block mt-1">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-right font-medium ${
                        isClosed ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
