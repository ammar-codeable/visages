import { motion } from "motion/react";

const VisagesHighlights = () => {
  const festivalHighlights = [
    {
      title: "Cultural Mosaic",
      description:
        "A vibrant tapestry of global cultures, traditions, and creative expressions",
      icon: "🌍",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Creative Playground",
      description:
        "Unleash your imagination through interdisciplinary challenges and performances",
      icon: "🎨",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Global Connections",
      description:
        "Bridge cultural divides through shared experiences and collaborative creativity",
      icon: "🤝",
      gradient: "from-teal-400 to-blue-500",
    },
    {
      title: "Talent Showcase",
      description:
        "A platform to shine, compete, and celebrate individual and collective talents",
      icon: "✨",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-orange-50 to-orange-200 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-fullxl space-y-8 text-center"> {/* Adjusted max-width */}
          <h2 className="text-4xl font-extrabold text-orange-900 sm:text-5xl">
            VISAGES: Beyond a Festival
          </h2>
          <p className="text-justify text-lg text-orange-700 sm:text-xl">
            Visages, the flagship inter-collegiate fest of St. Joseph's
            University, is a grand celebration where culture and academia unite
            in a spectacular showcase of talent, creativity, and camaraderie.
            Featuring around 30 vibrant events and activities, Visages is more
            than a competition—it’s a transformative journey of self-expression,
            discovery, and growth. It is a stage where students from diverse
            institutions come together to inspire, excel, and leave their mark.
            At Visages, we believe in the power of creating opportunities and
            breaking boundaries.
          </p>
          <p className="text-justify text-lg text-orange-700 sm:text-xl">
            This year, Visages invites you to stamp your passports and embark on
            an exhilarating journey "Around the World”, transforming our campus
            into a global carnival of cultures. From the bustling streets of
            Tokyo to the vibrant carnivals of Rio, experience a whirlwind of
            traditions, music, and flavours from every corner of the globe—all
            without leaving campus. Groove to international beats, savour the
            tastes of faraway lands and embrace the diversity that unites us.
            It’s not just an event; it’s a cultural celebration and a
            transformative experience. Every step is a new destination, every
            event a story waiting to unfold, and every laugh a universal
            language. So, pack your sense of adventure, unleash your inner
            globetrotter, and join us as we turn dreams into reality, talent
            into triumph, and our campus into a stage where the world comes to
            life!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {festivalHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${highlight.gradient} transform p-6 text-white shadow-xl transition-all duration-300`}
            >
              <div className="absolute right-0 top-0 rotate-12 transform text-6xl opacity-20">
                {highlight.icon}
              </div>
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold tracking-wider">
                  {highlight.title}
                </h3>
                <p className="text-sm opacity-90">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VisagesHighlights;
