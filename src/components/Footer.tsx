import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="relative bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold text-primary">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 text-secondary">
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
            <h3 className="mb-4 text-xl font-semibold text-primary">
              Hours
            </h3>
            <div className="flex flex-col gap-2 text-secondary">
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
            <h3 className="mb-4 text-xl font-semibold text-primary">
              About St. Joseph's University
            </h3>
            <p className="text-secondary">
              St. Joseph's University, Bengaluru, established in 1882, is a premier 
              educational institution recognized for academic excellence and holistic 
              development. Located in the heart of Bangalore, the university carries 
              forward a rich legacy of Jesuit education, fostering innovation, 
              critical thinking, and cultural diversity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-primary">
              Event Timings
            </h3>
            <div className="flex flex-col gap-2 text-secondary">
              <p>Registration: 8:00 AM - 9:30 AM</p>
              <p>Events: 10:00 AM - 5:00 PM</p>
              <p>Cultural Night: 6:00 PM onwards</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h3 className="mb-4 text-xl font-semibold text-primary">
              About Visages
            </h3>
            <p className="text-secondary">
              Visages is the annual cultural festival of St. Joseph's University, Bengaluru. 
              Join us for three days of cultural celebration as talented students from across 
              the country come together to compete and showcase their artistic abilities.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
