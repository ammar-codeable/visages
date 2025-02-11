import { Code2, Github, Instagram, Mail, MapPin, Users } from "lucide-react";
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
              <a
                href="https://maps.google.com/?q=St+Joseph's+University+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-orange-300"
              >
                <MapPin className="h-5 w-5 shrink-0" />
                <span>
                  St Joseph's University, 36, Langford Rd, Langford Gardens,
                  Bengaluru, Karnataka 560027
                </span>
              </a>
              <a
                href="mailto:studentcouncil@sju.edu.in"
                className="flex items-center gap-2 transition-colors hover:text-orange-300"
              >
                <Mail className="h-5 w-5 shrink-0" />
                <span>studentcouncil@sju.edu.in</span>
              </a>
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 shrink-0 text-orange-400" />
                <a
                  href="https://www.instagram.com/sju.studentcouncil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange-300"
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
            transition={{ delay: 0.4 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-primary">
              Development Credits
            </h3>
            <div className="flex flex-col gap-4 text-secondary">
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <div className="flex items-center gap-2 text-sm text-orange-300">
                  <Code2 className="h-4 w-4" />
                  <span className="font-medium">Shift-3 Project</span>
                  <span className="text-zinc-600">•</span>
                  <a
                    href="https://github.com/ammar-codeable/visages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors hover:text-orange-200"
                  >
                    <Github className="h-4 w-4" />
                    View Source
                  </a>
                </div>

                <div className="mt-4 grid gap-3 text-sm">
                  <a
                    href="https://github.com/ammar-codeable"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md p-2 transition-all hover:bg-zinc-700"
                  >
                    <Github className="h-4 w-4 text-orange-400/80" />
                    <span>Labbey Ammar Ahmed</span>
                  </a>

                  <a
                    href="https://github.com/mohammedmadni2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md p-2 transition-all hover:bg-zinc-700"
                  >
                    <Github className="h-4 w-4 text-orange-400/80" />
                    <span>Mohammed Madni</span>
                  </a>

                  <div className="flex items-center gap-2 rounded-md p-2 transition-all hover:bg-zinc-700">
                    <Github className="h-4 w-4 text-orange-400/80" />
                    <a
                      href="https://github.com/animeshog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-orange-300"
                    >
                      Animesh Shaw
                    </a>
                    <a
                      href="https://instagram.com/animesh.wav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400/80 transition-colors hover:text-orange-300"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>

                  <a
                    href="https://github.com/iamnithishraja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md p-2 transition-all hover:bg-zinc-700"
                  >
                    <Github className="h-4 w-4 text-orange-400/80" />
                    <span>R Nithish</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} St Joseph's University. All rights reserved.
            <span className="mx-2">|</span>
            Made with ❤️ for Visages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
