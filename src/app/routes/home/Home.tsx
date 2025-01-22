import CountdownTimer from "@/components/CountdownTimer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "motion/react";
import { Link } from "react-router";

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
            <h1 className="mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-7xl font-bold text-transparent">
              Visages 2025
            </h1>
            <p className="text-4xl text-orange-800">
              Around the World in Three Days
            </p>
            <p className="mt-4 text-lg text-orange-700">
              February 15-17, 2025 • St. Joseph's University
            </p>
            <CountdownTimer />
          </motion.div>
        </div>
      </motion.div>

      {/* Cultural Zones */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-orange-900">
            Cultural Zones
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["Americas", "Europe", "Asia", "Africa", "Oceania"].map(
              (region, index) => (
                <motion.div
                  key={region}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-xl bg-orange-100 p-6 text-orange-800 shadow-lg"
                >
                  <h3 className="mb-2 text-2xl font-bold">{region}</h3>
                  <p>Discover the rich heritage of {region}</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </motion.div>

      {/* Festival Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-orange-50 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-orange-900">
            Festival Highlights
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {["Dance", "Music", "Art", "Food"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 text-orange-800 shadow-lg"
              >
                <h4 className="mb-2 text-xl font-semibold">{category}</h4>
                <p>International {category.toLowerCase()} showcase</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

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
