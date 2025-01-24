import { Mail, MapPin, Users, Instagram } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="relative bg-zinc-900">
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
                <MapPin className="h-5 w-5 shrink-0" />
                <span>
                  St Joseph's University, 36, Langford Rd, Langford Gardens, Bengaluru, Karnataka 560027
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span>studentcouncil@sju.edu.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 shrink-0 text-orange-400" />
                <a 
                  href="https://www.instagram.com/sju.studentcouncil/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 transition-colors"
                >
                  @sju.studentcouncil
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-primary">
              Student Coordinators
            </h3>
            <div className="flex flex-col gap-4 text-secondary">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 shrink-0 text-orange-400" />
                  <span className="font-medium">Anjali Anna</span>
                </div>
                <div className="ml-7 flex items-center gap-2">
                  <span className="text-sm text-orange-300/80">
                    Cultural Secretary
                  </span>
                  <span className="text-sm">•</span>
                  <a
                    href="tel:+919196566476"
                    className="text-sm hover:text-orange-300"
                  >
                    +91 96566 47656
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 shrink-0 text-orange-400" />
                  <span className="font-medium">Ajay Krishna</span>
                </div>
                <div className="ml-7 flex items-center gap-2">
                  <span className="text-sm text-orange-300/80">President</span>
                  <span className="text-sm">•</span>
                  <a
                    href="tel:+919480319848"
                    className="text-sm hover:text-orange-300"
                  >
                    +91 94803 19848
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 shrink-0 text-orange-400" />
                  <span className="font-medium">Manasa Prakash</span>
                </div>
                <div className="ml-7 flex items-center gap-2">
                  <span className="text-sm text-orange-300/80">
                    Vice-President
                  </span>
                  <span className="text-sm">•</span>
                  <a
                    href="tel:+917994960897"
                    className="text-sm hover:text-orange-300"
                  >
                    +91 79949 60897
                  </a>
                </div>
              </div>
            </div>
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
              <p>Registration: 8:00 AM - 9:00 AM</p>
              <p>Events: 09:00 AM - 5:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
