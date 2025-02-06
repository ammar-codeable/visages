import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { GeneralGuidelinesDialog } from "@/components/GeneralGuidelinesDialog";
import { ScrollText } from "lucide-react";
import { motion } from "motion/react";
import { Outlet } from "react-router";

const Layout = () => {
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <motion.button
        onClick={() => setGuidelinesOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-orange-500/25 hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <ScrollText className="h-5 w-5" />
        General Guidelines
      </motion.button>

      <GeneralGuidelinesDialog
        open={guidelinesOpen}
        onClose={() => setGuidelinesOpen(false)}
      />
    </div>
  );
};

export default Layout;
