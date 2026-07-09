import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import logo from "../assets/Cillages_Logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowSortedDown } from "react-icons/ti";
import cillagesOneLogo from "../assets/ucc.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <motion.nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[95%] z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded px-2 py-2  flex items-center justify-between shadow-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className="h-10 object-contain" />
          </Link>

          <a href="/">
            {" "}
            <p className="text-black  text-xs text-center mt-1">
              Confluence of Design, Culture & Technology
            </p>
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-black">
          <li className="cursor-pointer hover:text-blue-400 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            <Link to="/about">About Us</Link>
          </li>
          {/* Services */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-400">
              Services
              <TiArrowSortedDown size={16} className="mt-1" />
            </button>

            {/* Dropdown */}
            <div
              className="
      absolute
      left-1/2
      top-full
      -translate-x-1/2
      mt-2
      w-72
      rounded-2xl
      bg-white/70
      backdrop-blur-2xl
      border
      border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      p-3

      opacity-0
      invisible
      translate-y-2

      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0

      transition-all
      duration-300
      ease-out
      z-50
    "
            >
              {[
                {
                  name: "Client Representation",
                  link: "/client",
                },
                {
                  name: "Development Solution",
                  link: "/development-solution",
                },
                {
                  name: "Project Management",
                  link: "/project-management",
                },
                {
                  name: "Cost Consultancy & QA",
                  link: "/cost-consultancy",
                },
                {
                  name: "Allied Services",
                  link: "/allied-services",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="
      block
      w-full
      text-left
      px-4
      py-3
      rounded-xl
      text-black
      hover:bg-blue-500/10
      hover:text-blue-400
      transition-all
      duration-200
    "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>
          {/* automation */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-400">
              Automation Intelligence
              <TiArrowSortedDown size={16} className="mt-1" />
            </button>

            {/* Dropdown */}
            <div
              className="
      absolute
      left-1/2
      top-full
      -translate-x-1/2
      mt-2
      w-72
      rounded-2xl
      bg-white/70
      backdrop-blur-2xl
      border
      border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      p-3

      opacity-0
      invisible
      translate-y-2

      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0

      transition-all
      duration-300
      ease-out
      z-50
    "
            >
              {[
                {
                  name: "Home Automation",
                  link: "/home-automation",
                },
                {
                  name: "Office Automation",
                  link: "/office-automation",
                },
                {
                  name: "Hospitality Automation",
                  link: "/hospitality-automation",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="
      block
      w-full
      text-left
      px-4
      py-3
      rounded-xl
      text-black
      hover:bg-blue-500/10
      hover:text-blue-400
      transition-all
      duration-200
    "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>

          {/* Clients */}
          <li className="cursor-pointer hover:text-blue-400 transition">
            <Link to="/project">Projects</Link>
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link
              to="/cillages-one"
              className="group relative flex items-center rounded-full border border-blue-500/30 bg-black px-5 py-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* NEW Badge */}
              <span className="absolute -top-2 -right-2 rounded-full bg-black px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                NEW
              </span>

              <div>
                <p className="text-sm font-semibold text-[#FFD700]   ">
                  Cillages One
                </p>

                <p className="text-[10px] text-gray-200 leading-none mt-1">
                  Connecting Every Process
                  <span className="text-[10px] text-gray-200 leading-none">
                    {" "}
                    Automating Every Workflow
                  </span>
                </p>
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 overflow-hidden rounded border border-black/10 bg-white/10 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col py-3 text-black">
              <button className="px-6 py-4 text-left hover:bg-white/5 transition">
                <Link to="/">Home</Link>
              </button>

              <button className="px-6 py-4 text-left hover:bg-white/5 transition">
                <Link to="/about"> About Us</Link>
              </button>
              {/* Services */}
              <div>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "services" ? null : "services",
                    )
                  }
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition"
                >
                  <span>Services</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      onClick={() => setMobileOpen(!mobileOpen)}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-white/5"
                    >
                      {[
                        {
                          name: "Client Representation",
                          link: "/client",
                        },
                        {
                          name: "Development Solution",
                          link: "/development-solution",
                        },
                        {
                          name: "Project Management",
                          link: "/project-management",
                        },
                        {
                          name: "Cost Consultancy & QA",
                          link: "/cost-consultancy",
                        },
                        {
                          name: "Allied Services",
                          link: "/allied-services",
                        },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className="
      block
      w-full
      text-left
      px-4
      py-3
      rounded-xl
      text-black
      hover:bg-blue-500/10
      hover:text-blue-400
      transition-all
      duration-200
    "
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* automation */}
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "automation" ? null : "automation",
                    )
                  }
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition"
                >
                  <span>Automation Intelligence</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      openDropdown === "automation" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === "automation" && (
                    <motion.div
                      onClick={() => setMobileOpen(!mobileOpen)}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-white/5"
                    >
                      {[
                        {
                          name: "Home Automation",
                          link: "/home-automation",
                        },
                        {
                          name: "Office Automation",
                          link: "/office-automation",
                        },
                        {
                          name: "Hospitality Automation",
                          link: "/hospitality-automation",
                        },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className="
      block
      w-full
      text-left
      px-4
      py-3
      rounded-xl
      text-black
      hover:bg-blue-500/10
      hover:text-blue-400
      transition-all
      duration-200
    "
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Clients & Consultants */}
              <button className="px-6 py-4 text-left hover:bg-white/5 transition">
                <Link to="/project">Projects</Link>
              </button>

              <button className="px-6 py-4 text-left hover:bg-white/5 transition">
                <Link to="/contact">Contact</Link>
              </button>
              <Link
                to="/cillages-one"
                className="relative mx-4 mt-4 flex rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="absolute -top-2 -right-2 rounded-full bg-white px-2 py-1 text-[10px] font-bold text-blue-600">
                  NEW
                </span>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cillages One
                  </h3>

                  <p className="mt-1 text-xs text-blue-100 leading-5">
                    Connecting Every Process.
                    <br />
                    Automating Every Workflow.
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
