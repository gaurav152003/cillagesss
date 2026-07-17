import { useState } from "react";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import logo from "../assets/Cillages_Logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowSortedDown } from "react-icons/ti";
import cillagesOneLogo from "../assets/ucc.png";
import { Link } from "react-router-dom";
import cillageslogo from "../assets/cillages-one-navbar.png";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <motion.nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[95%] z-50">
      <div className="bg-white/70 backdrop-blur-xl border border-white/10 rounded px-2 py-2  flex items-center justify-between shadow-2xl">
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
      hover:text-blue-500
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
                  name: "Home Spaces",
                  link: "/home-automation",
                },
                {
                  name: "Office Spaces",
                  link: "/office-automation",
                },
                {
                  name: "Hospitality Spaces",
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
      hover:text-blue-500
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
            <Link to="/clients">Clients</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            {/* <Link
              to="/cillages-one"
              className="
      bg-white/70 backdrop-blur-xl border border-white/10 rounded px-2 py-2  flex items-center justify-between shadow-2xl
    "
            > */}
            {/* Shine Effect */}
            {/* <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" /> */}

            {/* NEW Badge */}
            {/* <span className="absolute -top-2 -right-2 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-lg">
                NEW
              </span> */}

            {/* <div className="relative z-10"> */}
            {/* Main Title */}
            {/* <h3 className="text-xl font-extrabold tracking-wide text-white drop-shadow-lg"> */}
            {/* Cillages One */}
            {/* </h3> */}

            {/* Tagline */}
            {/* <p className="mt-1 whitespace-nowrap text-[14px] font-medium text-blue-100"> */}
            {/* Unified System For Intelligent Spaces */}
            {/* </p> */}
            {/* </div> */}
            {/* <div className="flex flex-col items-center">
                {" "}
                <img
                  src={cillageslogo}
                  alt="logo"
                  className="h-12 object-contain"
                />
                <a href="/">
                  {" "}
                  <p className="text-black  text-xs text-center mt-1">
                    Unified System For Intelligent Spaces
                  </p>
                </a>
              </div>
            </Link> */}
            <Link
              to="/cillages-one"
              className="
    relative flex items-center justify-center
    rounded
    px-5 py-2
    bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400
    shadow-lg shadow-cyan-500/30
    border border-white/20
    transition-all duration-300
    hover:scale-105
    hover:shadow-xl hover:shadow-cyan-500/50
    hover:-translate-y-0.5
    overflow-hidden
  "
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent hover:translate-x-full transition-transform duration-1000" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <img
                  src={cillageslogo}
                  alt="Cillages One"
                  className="h-10 w-auto  rounded"
                />

                <p className="mt-1 text-[11px] font-semibold text-black leading-tight whitespace-nowrap">
                  Unified System For Intelligent Spaces
                </p>
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile Icon */}
        <button
          className="lg:hidden text-black"
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
            className="lg:hidden mt-4 overflow-hidden rounded border border-black/10 bg-white/80 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col py-3 text-black">
              <button
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-left hover:bg-white/5 transition"
              >
                <Link to="/">Home</Link>
              </button>

              <button
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-left hover:bg-white/5 transition"
              >
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
                      onClick={() => setMobileOpen(false)}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-white/5"
                    >
                      {[
                        {
                          name: "Home Spaces",
                          link: "/home-automation",
                        },
                        {
                          name: "Office Spaces",
                          link: "/office-automation",
                        },
                        {
                          name: "Hospitality Spaces",
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
              <button
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-left hover:bg-white/5 transition"
              >
                <Link to="/project">Projects</Link>
              </button>
              <button
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-left hover:bg-white/5 transition"
              >
                <Link to="/clients">Clients</Link>
              </button>
              <button
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 text-left hover:bg-white/5 transition"
              >
                <Link to="/contact">Contact</Link>
              </button>
              {/* <Link
                onClick={() => setMobileOpen(false)}
                to="/cillages-one"
                className="relative mx-4 mt-4 flex rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cillages One
                  </h3>

                  <p className="mt-1 text-xs text-blue-100 leading-5">
                    Unified System
                    <br />
                    For Intelligent Spaces
                  </p>
                </div>
              </Link> */}
              <Link
                to="/cillages-one"
                className="
    relative flex items-center justify-center
    rounded
    px-5 py-2
    bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500
    shadow-lg shadow-cyan-500/30
    border border-white/20
    transition-all duration-300
    hover:scale-105
    hover:shadow-xl hover:shadow-cyan-500/50
    hover:-translate-y-0.5
    overflow-hidden
    mr-2 
    ml-2
  "
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={cillageslogo}
                    alt="Cillages One"
                    className="h-10 w-auto  rounded"
                  />

                  <p className="mt-1 text-[11px] font-semibold text-black leading-tight whitespace-nowrap">
                    Unified System For Intelligent Spaces
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
