import { motion } from "framer-motion";

import logo1 from "../assets/company logo/Ashray_logo.png";
import logo2 from "../assets/company logo/Ideawings.png";
import logo3 from "../assets/company logo/Integrow.png";
import logo4 from "../assets/company logo/Neptune_Logo.png";
import logo5 from "../assets/company logo/Ninaniya_Logo.jpg";
import logo6 from "../assets/company logo/rustomjee_logo.png";
import logo7 from "../assets/company logo/Shruti_Structures_Logo.png";
import logo8 from "../assets/company logo/transindia.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="h-[2px] w-10 bg-blue-600"></div>

          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            People Who{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
        </motion.div>

        {/* Box */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50 opacity-60" />

          {/* Fade Left */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <div className="relative overflow-hidden py-10">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="group mx-8 flex h-24 w-52 items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="client"
                    className="max-h-16 object-contain grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-gray-600"
        >
          Trusted by developers, architects, builders, and businesses to create
          smarter spaces with project management, engineering excellence, and
          intelligent automation.
        </motion.p>
      </div>
    </section>
  );
}
