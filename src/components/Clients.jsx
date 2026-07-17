import { motion } from "framer-motion";

import logo1 from "../assets/company logo/Ashray_logo.png";
import logo2 from "../assets/company logo/Ideawings.png";
import logo3 from "../assets/company logo/Integrow.png";
import logo4 from "../assets/company logo/Neptune_Logo.png";
import logo5 from "../assets/company logo/Ninaniya_Logo.jpg";
import logo6 from "../assets/company logo/rustomjee_logo.png";
import logo8 from "../assets/company logo/transindia.webp";
import logo32 from "../assets/company logo/ufo.avif";
import logo33 from "../assets/company logo/Infoblox.jpg";
import logo34 from "../assets/company logo/Aruba.png";
import logo35 from "../assets/company logo/jindal.jpg";
import logo36 from "../assets/company logo/csscorp.jpg";
import logo37 from "../assets/company logo/avm.jpg";
import logo39 from "../assets/company logo/vbj.png";
import logo40 from "../assets/company logo/rajas.png";
import logo41 from "../assets/company logo/kauvery.jpg";
import logo42 from "../assets/company logo/apollo.png";
import logo43 from "../assets/company logo/Pumalift.jpg";
import logo44 from "../assets/company logo/caravel.png";
import logo45 from "../assets/company logo/Vakrangee_Limited_Logo.png";
import logo46 from "../assets/company logo/white.jpg";
import logo47 from "../assets/company logo/aster.png";
import logo48 from "../assets/company logo/poorvika.jpg";
import logo49 from "../assets/company logo/kotak.png";
import logo52 from "../assets/company logo/qube.jpg";
import logo53 from "../assets/company logo/megh.jpg";
import logo54 from "../assets/company logo/sbrander.jpg";
import logo55 from "../assets/company logo/gem.jpg";
import logo56 from "../assets/company logo/srm.svg";
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo8,
  logo32,
  logo33,
  logo34,
  logo35,
  logo36,
  logo37,
  logo39,
  logo40,
  logo41,
  logo42,
  logo43,
  logo44,
  logo45,
  logo46,
  logo47,
  logo48,
  logo49,
  logo52,
  logo53,
  logo54,
  logo55,
  logo56,
];

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
                duration: 55,
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
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-gray-600 desc-font"
        >
          Trusted by developers, architects, builders, and businesses to create
          smarter spaces with project management, engineering excellence, and
          intelligent automation.
        </motion.p>
      </div>
    </section>
  );
}
