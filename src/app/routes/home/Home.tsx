import CountdownTimer from "@/components/hometimer";
import { motion } from "motion/react";
import { Link } from "react-router";

const Home = () => (
  <div className="min-h-screen bg-slate-950">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex h-screen items-center overflow-hidden bg-slate-950"
    >
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('/world-map-dots.png')] opacity-10"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-7xl font-bold text-transparent">
            Visages 2025
          </h1>
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl text-white/90"
            >
              Around the World in Three Days
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-white/70"
            >
              February 15-17, 2025• St. Joseph's University
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-slate-950 to-slate-900 py-32"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Cultural Zones
        </h2>
        <div className="flex snap-x snap-mandatory space-x-8 overflow-x-auto pb-8">
          {["Americas", "Europe", "Asia", "Africa", "Oceania"].map(
            (region, index) => (
              <motion.div
                key={region}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="min-w-[300px] snap-center"
              >
                <div className="rounded-2xl bg-white/10 p-8 text-white backdrop-blur-lg">
                  <h3 className="mb-4 text-2xl font-bold">{region}</h3>
                  <p className="text-white/70">
                    Discover the rich heritage of {region}
                  </p>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-32"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Festival Highlights
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {["Dance", "Music", "Art", "Food"].map((category, index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-lg"
            >
              <h4 className="mb-2 text-xl font-semibold">{category}</h4>
              <p className="text-white/70">
                International {category.toLowerCase()} showcase
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    <CountdownTimer />

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
);

export default Home;
