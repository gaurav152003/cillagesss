import React, { useState } from "react";
import {
  Hotel,
  BedDouble,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Bell,
} from "lucide-react";
import heroImage from "../assets/hotel.jpg";
import { MonitorSmartphone, Cpu, Wifi, Lock } from "lucide-react";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const products = [
  {
    icon: <MonitorSmartphone size={34} />,
    title: "Smart Room Panels",
    desc: "Elegant touch panels providing guests with complete control over lighting, climate, curtains, and entertainment systems.",
  },
  {
    icon: <Cpu size={34} />,
    title: "Automation Controllers",
    desc: "Powerful controllers that seamlessly integrate and manage guest rooms, common areas, and hotel-wide automation.",
  },
  {
    icon: <Wifi size={34} />,
    title: "IoT Connectivity",
    desc: "Reliable communication infrastructure connecting every smart device across the property into one intelligent ecosystem.",
  },
  {
    icon: <Lock size={34} />,
    title: "Smart Access Systems",
    desc: "Digital locks, keyless entry, and secure access management for guests, staff, and restricted areas.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Guest Mobile Control",
    desc: "Allow guests to control room functions and hotel services directly from their smartphones for a seamless experience.",
  },
  {
    icon: <Bell size={34} />,
    title: "Hotel Service Integration",
    desc: "Connect housekeeping, maintenance, concierge, and room service into one intelligent digital platform.",
  },
];
const features = [
  {
    icon: <Hotel size={28} />,
    title: "Hotel Room Automation",
    desc: "Deliver personalized guest experiences through intelligent room controls.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Smart Lighting",
    desc: "Automated lighting scenes that enhance comfort while reducing energy consumption.",
  },
  {
    icon: <BedDouble size={28} />,
    title: "Comfort Control",
    desc: "Control curtains, climate, and room settings with a single touch.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Guest Safety",
    desc: "Integrated smart locks, CCTV, emergency alerts, and access management.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Integration",
    desc: "Guests can access hotel services directly through mobile devices.",
  },
  {
    icon: <Bell size={28} />,
    title: "Digital Concierge",
    desc: "Housekeeping, room service, and concierge requests from one interface.",
  },
];
function Hospitalityautomation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hospitality Automation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Left Content */}
              <div className="max-w-3xl">
                <h1 className="mt-20 text-4xl font-bold leading-tight text-white md:text-7xl">
                  Redefining
                  <br />
                  <span className="text-cyan-400">Smart Hospitality</span>
                </h1>

                <p className="mt-4 md:mt-8 max-w-2xl text-sm md:text-lg leading-8 text-gray-200 desc-font">
                  Deliver exceptional guest experiences with intelligent
                  hospitality automation. From smart guest rooms and digital
                  concierge services to centralized hotel management, Cillages
                  One helps hotels, resorts, and serviced apartments create
                  seamless, connected, and energy-efficient environments.
                </p>

                {/* Stats */}
                <div className="mt-2 md:mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      24/7
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Hotel Monitoring
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      Smart
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">Guest Rooms</p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      IoT
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Connected Systems
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      Energy
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Efficient Operations
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="mt-8 lg:mt-12 lg:ml-10">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border border-cyan-400/40 bg-cyan-400 backdrop-blur-xl px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-105"
                >
                  My Project
                </button>
                {open && (
                  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-center">
                        {/* <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl">
                          📁
                        </div> */}

                        <h2 className="mt-4 text-3xl font-bold text-white">
                          Project Portal
                        </h2>

                        <p className="mt-2 text-blue-100">
                          Access your live project updates
                        </p>
                      </div>

                      {/* Form */}
                      <form className="space-y-5 p-8">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Project ID
                          </label>

                          <input
                            type="text"
                            placeholder="Enter Project ID"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Project Password
                          </label>

                          <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                          Login
                        </button>
                      </form>

                      {/* Close */}
                      <button
                        onClick={() => setOpen(false)}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-cyan-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Smart Hospitality Solutions
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Intelligent Automation
              <br />
              For Modern Hospitality
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Cillages One transforms hotels, resorts, serviced apartments, and
              luxury residences into connected hospitality environments. Our
              intelligent automation solutions seamlessly integrate guest room
              controls, lighting, climate, security, and hotel services to
              deliver exceptional guest experiences while improving operational
              efficiency and reducing energy consumption.
            </p>
          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 desc-font">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex rounded-full bg-cyan-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Hospitality Technologies
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Intelligent Technologies
              <br />
              Powering Modern Hospitality
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Cillages One integrates advanced automation technologies to
              simplify hotel operations, enhance guest comfort, strengthen
              security, and deliver exceptional hospitality experiences.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-2 hover:border-cyan-500 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 desc-font">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-cyan-600 to-blue-600 py-24">
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Cillages One
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Elevate Every Guest Experience
            <br />
            With Smart Hospitality Automation
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100 desc-font">
            Empower your hotel, resort, serviced apartment, or hospitality
            business with intelligent automation solutions that enhance guest
            comfort, streamline operations, improve security, and reduce energy
            consumption—all managed through one connected platform.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:scale-105 hover:bg-gray-100"
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-cyan-700"
            >
              Request a Demo
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-white">24/7</h3>
              <p className="mt-2 text-cyan-100">Hotel Management</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Smart</h3>
              <p className="mt-2 text-cyan-100">Guest Rooms</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Secure</h3>
              <p className="mt-2 text-cyan-100">Access Control</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Energy</h3>
              <p className="mt-2 text-cyan-100">Efficient Operations</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Hospitalityautomation;
