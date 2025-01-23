import CountdownTimer from "@/components/CountdownTimer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "motion/react";
import { Link } from "react-router";
import Visages from "@/components/Visages";
import FancyText from "@/components/FancyText";

const Home = () => (
  <div className="relative min-h-screen">
    {/* Background */}
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50">
      <AnimatedBackground />
    </div>

    {/* Content */}
    <div className="relative z-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex h-screen items-center"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <p className="mt-4 font-serif text-3xl text-orange-700 sm:text-5xl">
                St. Joseph's University
              </p>
              <h1 className="h-16 sm:h-20 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl ">
                Visages 2025
              </h1>
              <div>
                <FancyText />
              </div>
              <p className="mt-4 text-base text-orange-700 sm:text-2xl">
                February 20-21, 2025
              </p>
            </div>

            <CountdownTimer />
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-orange-900 sm:text-5xl">
            About VISAGES
          </h2>
          <p className="text-center text-lg text-orange-700 sm:text-xl">
            Visages is an annual cultural festival that celebrates the diversity and it is an annual level fest for
            students to showcase their talents and skills in various fields. The fest is a two-day event that includes
            various competitions, workshops, and performances. The event is organized by the students and faculty of
            St. Joseph's University, Bengaluru.
          </p>
        </div>
      </motion.div>

      {/* Cultural Zones */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-orange-50 to-orange-200 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-orange-900 sm:text-5xl">
            Major Events or We Can explain about 5 or 4 or any star events
          </h2>
      
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {["Dance", "Music", "Art", "Food"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2,type:"spring",stiffness:80 }}
                className="rounded-xl bg-white p-6 text-orange-800 shadow-lg"
              >
                <h4 className="mb-2 text-xl font-semibold">{category}</h4>
                <p>International {category.toLowerCase()} showcase</p>
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div> */}
         <Visages />

      {/* About the College */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-orange-900 sm:text-5xl">
            About St. Joseph's University
          </h2>
          <p className="text-center text-lg text-orange-700 sm:text-xl">
            St. Joseph's University, Bengaluru, established in 1882, is a premier 
            educational institution recognized for academic excellence and holistic 
            development. Located in the heart of Bangalore, the university carries 
            forward a rich legacy of Jesuit education, fostering innovation, 
            critical thinking, and cultural diversity.
          </p>
        </div>
      </motion.div>

      {/* Cultural Zones */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-orange-50 to-orange-200 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-orange-900 sm:text-5xl">
            Explore Our Vibrant Campus
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Academic Excellence",
                description:
                  "A hub of innovation and learning, where students excel in academics and beyond.",
                icon: "📚",
              },
              {
                title: "Cultural Diversity",
                description:
                  "Experience a melting pot of cultures with events, clubs, and vibrant traditions.",
                icon: "🌏",
              },
              {
                title: "State-of-the-Art Facilities",
                description:
                  "From modern classrooms to advanced labs, our campus has it all.",
                icon: "🏛️",
              },
              {
                title: "Sports & Recreation",
                description:
                  "A thriving sports culture with facilities for all major sports.",
                icon: "⚽",
              },
              {
                title: "Research Opportunities",
                description:
                  "Engage in groundbreaking research with our expert faculty.",
                icon: "🔬",
              },
              {
                title: "Community Engagement",
                description:
                  "Make a difference through various outreach programs and initiatives.",
                icon: "🤝",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 80 }}
                className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <div className="flex items-center mb-4 text-4xl">
                  <span>{feature.icon}</span>
                  <h3 className="ml-4 text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-orange-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Festival Highlights */}


      {/* Explore Events Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          to="/events"
          className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 font-bold text-white shadow-lg transition-all hover:brightness-110"
        >
          Explore Events
        </Link>
      </motion.div>
    </div>
  </div>
);

export default Home;
