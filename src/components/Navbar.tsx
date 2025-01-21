import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

const DecorativeBorder = () => (
  <div className="absolute bottom-0 left-0 right-0 translate-y-full">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="h-6 w-full fill-orange-200/80"
    >
      <motion.path
        d="M0,0 C150,60 350,0 500,30 C650,60 750,0 900,40 C1050,80 1150,20 1200,0 V0 H0"
        animate={{
          d: [
            "M0,0 C150,60 350,0 500,30 C650,60 750,0 900,40 C1050,80 1150,20 1200,0 V0 H0",
            "M0,0 C150,40 350,20 500,50 C650,40 750,20 900,20 C1050,60 1150,40 1200,0 V0 H0",
            "M0,0 C150,60 350,0 500,30 C650,60 750,0 900,40 C1050,80 1150,20 1200,0 V0 H0",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </svg>
  </div>
);

const Navbar = () => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 z-50 w-full"
  >
    <DecorativeBorder />

    <nav className="bg-gradient-to-r from-orange-100/95 via-orange-200/95 to-orange-100/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          to="/"
          className="text-2xl font-bold text-orange-950 transition-all hover:text-orange-700"
        >
          Visages
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-8">
          {["Home", "Events"].map((item) => (
            <Link
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className="relative font-medium text-sm sm:text-base text-orange-950 transition-all hover:text-orange-700"
            >
              <span className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-400 transition-all group-hover:w-full" />
              </span>
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-300 opacity-30 blur transition duration-200 group-hover:opacity-100"></div>
            <Button
              variant="outline"
              className="relative flex items-center gap-1 sm:gap-2 border-2 border-orange-400 font-medium text-orange-950 hover:bg-orange-100 text-sm sm:text-base px-2 sm:px-4"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              Cheer Squad
              <span className="absolute inset-0 rounded-lg ring-2 ring-orange-400/50 group-hover:ring-orange-400"></span>
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  </motion.div>
);

export default Navbar;
