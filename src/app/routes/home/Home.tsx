import AnimatedBackground from "@/components/AnimatedBackground";
import CountdownTimer from "@/components/CountdownTimer";
import FancyText from "@/components/FancyText";
import VisagesHighlights from "@/components/VisagesHighlights";
import { motion } from "motion/react";
import { Link } from "react-router";
import VisagesLogo from "/visages-logo.png";

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
              <img src={VisagesLogo} alt="Visages" height={52} />
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

      <VisagesHighlights />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-orange-900 sm:text-5xl">
            About St Joseph's University
          </h2>
          <p className="text-center text-lg text-orange-700 sm:text-xl">
            St Joseph’s University is a Jesuit university at the heart of
            Bengaluru, the silicon city of India. Established in 1882 by Paris
            Foreign Mission Fathers, the management of the college was handed
            over to the Jesuit order (Society of Jesus) in 1937. The college was
            first affiliated with the University of Madras and later with the
            Mysore and Bangalore universities. In 1986, St Joseph’s College
            became the first affiliated college in Karnataka to offer
            postgraduate programmes. In 1988, it became the first college in
            Karnataka to get a Research Centre, and in 2005, it was one of five
            colleges in Karnataka that was awarded academic autonomy. In
            February 2021, St Joseph's University Bill was presented in the
            Karnataka Legislative Assembly and was subsequently passed by the
            Legislative Assembly and Karnataka Legislative Councill. The college
            received its University status on 2 July 2022 and was inaugurated as
            India’s first Public-Private-Partnership University by the
            Honourable President of India, Smt. Droupadi Murmu on 27 September
            2022.
          </p>
        </div>
      </motion.div>

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
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                }}
                className="transform rounded-xl bg-white p-6 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center text-4xl">
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
