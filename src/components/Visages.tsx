import { motion } from "motion/react";

const Visages = () => {
  const festivalHighlights = [
    {
      title: "Cultural Mosaic",
      description: "A vibrant tapestry of global cultures, traditions, and creative expressions",
      icon: "🌍",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Creative Playground",
      description: "Unleash your imagination through interdisciplinary challenges and performances",
      icon: "🎨",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Global Connections",
      description: "Bridge cultural divides through shared experiences and collaborative creativity",
      icon: "🤝",
      gradient: "from-teal-400 to-blue-500"
    },
    {
      title: "Talent Showcase",
      description: "A platform to shine, compete, and celebrate individual and collective talents",
      icon: "✨",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-orange-50 to-orange-200 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-orange-900 sm:text-5xl">
          VISAGES: Beyond a Festival
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {festivalHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ 
                scale: 0.9, 
                opacity: 0,
                y: 50
              }}
              whileInView={{ 
                scale: 1, 
                opacity: 1,
                y: 0
              }}
              transition={{ 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2
              }}
              className={`
                relative overflow-hidden rounded-2xl 
                bg-gradient-to-br ${highlight.gradient} 
                p-6 text-white shadow-xl
                transform transition-all duration-300
              `}
            >
              <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                {highlight.icon}
              </div>
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold tracking-wider">
                  {highlight.title}
                </h3>
                <p className="text-sm opacity-90">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Visages;