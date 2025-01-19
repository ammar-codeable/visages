import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold text-orange-900">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 text-orange-700">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@visages.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Photography Lane, Art District</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-orange-900">
              Hours
            </h3>
            <div className="flex flex-col gap-2 text-orange-700">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h3 className="mb-4 text-xl font-semibold text-orange-900">
              About Us
            </h3>
            <p className="text-orange-700">
              Visages Photography Studio specializes in capturing life's
              precious moments through the art of photography. With years of
              experience and a passion for excellence, we bring your vision to
              life.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
