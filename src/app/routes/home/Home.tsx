import AnimatedBackground from "@/components/AnimatedBackground";
import CountdownTimer from "@/components/CountdownTimer";
import FancyText from "@/components/FancyText";
import VisagesHighlights from "@/components/VisagesHighlights";
import { motion } from "motion/react";
import VisagesLogo from "/visages-logo.png";
import { DJNightSection } from "@/components/DJNightSection";
import { events } from "@/constants/events";

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
        className="relative flex min-h-screen items-center py-20"
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
                February 21-22, 2025
              </p>
            </div>

            <CountdownTimer />
          </motion.div>
        </div>
      </motion.div>

      <VisagesHighlights />
      <DJNightSection events={events} index={0} />

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
          <p className="text-justify text-lg text-orange-700 sm:text-xl">
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
    </div>
  </div>
);

export default Home;
