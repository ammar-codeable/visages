import SparkleIcon from "@/components/SparkleIcon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home, Menu, Store, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import SearchDialog from "@/components/SearchDialog";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/events", icon: Store, label: "Events" },
];

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

const MobileDropdown = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="border-t border-orange-200 sm:hidden"
      >
        <div className="p-4">
          <div className="mb-4 rounded-lg bg-orange-100 p-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-orange-950">
                Only contingent registrations are eligible for the overall prize
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {/* Add search button at the top of mobile menu */}
            <SearchDialog />
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={onClose} // Add this onClick handler
                className="flex items-center gap-2 text-base font-bold text-orange-950 hover:text-orange-700"
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 border-2 border-orange-400 font-bold text-orange-600 hover:bg-orange-200/60"
              asChild
              onClick={onClose} // Add this onClick handler
            >
              <a href="https://forms.gle/DoHTWrgqXAM2szLQA" target="_blank" rel="noopener noreferrer">
                <SparkleIcon />
                Cheer Squad
              </a> 
            </Button>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => setIsOpen(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full"
    >
      <DecorativeBorder />

      <nav className="bg-gradient-to-r from-orange-100/95 via-orange-200/95 to-orange-100/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img
              src="/university-logo.png"
              alt="University Logo"
              className="h-12 w-auto object-contain"
            />
            <a
              href="https://sju.edu.in"
              className="text-2xl font-bold text-orange-950 transition-all hover:text-orange-700"
            >
              SJU
            </a>
            <Separator
              orientation="vertical"
              className="h-8 bg-orange-300/80"
            />
            <Link
              to="/"
              className="text-2xl font-bold text-orange-950 transition-all hover:text-orange-700"
            >
              Visages
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-950 sm:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <SearchDialog />
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="relative flex items-center gap-2 text-base font-bold text-orange-950 transition-all hover:text-orange-700 sm:text-lg"
              >
                <Icon className="h-5 w-5" />
                <span className="relative">
                  {label}
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
                className="relative flex items-center gap-1 border-2 border-orange-400 px-2 text-sm font-medium text-orange-600 hover:border-orange-500 hover:bg-orange-200/60 sm:gap-2 sm:px-4 sm:text-base"
                asChild
              >
                <a href="https://forms.gle/DoHTWrgqXAM2szLQA" target="_blank" rel="noopener noreferrer">
                  <SparkleIcon />
                  <span className="hidden sm:block">Cheer Squad</span>
                  <span className="absolute inset-0 rounded-lg ring-2 ring-orange-400/50 group-hover:ring-orange-500/60"></span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        <MobileDropdown isOpen={isOpen} onClose={handleClose} />
      </nav>
    </motion.div>
  );
};

export default Navbar;
