import React, { useState } from "react";
import heroImage from "../assets/officeautomation.jpg";
import {
  Lightbulb,
  DoorOpen,
  Thermometer,
  Video,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  Cpu,
  MonitorSmartphone,
  Smartphone,
  Wifi,
  ScanFace,
  Network,
} from "lucide-react";

const products = [
  {
    icon: <Cpu size={34} />,
    title: "Smart Controllers",
    desc: "Intelligent automation controllers that seamlessly manage lighting, HVAC, security, and office devices from a centralized platform.",
  },
  {
    icon: <MonitorSmartphone size={34} />,
    title: "Touch Control Panels",
    desc: "Elegant wall-mounted touch panels providing one-touch control of office automation systems and connected devices.",
  },
  {
    icon: <Wifi size={34} />,
    title: "IoT Gateways",
    desc: "Reliable communication gateways connecting all smart office devices into a secure and intelligent ecosystem.",
  },
  {
    icon: <Network size={34} />,
    title: "Occupancy Sensors",
    desc: "Automatically optimize lighting and climate based on occupancy, improving energy efficiency and employee comfort.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Mobile App Control",
    desc: "Monitor and control office automation systems remotely through intuitive Android and iOS applications.",
  },
  {
    icon: <ScanFace size={34} />,
    title: "AI & Voice Integration",
    desc: "Compatible with Alexa, Google Assistant, Siri, and enterprise automation platforms for hands-free control.",
  },
];
const features = [
  {
    icon: <Lightbulb size={28} />,
    title: "Smart Lighting",
    desc: "Automated lighting systems that improve comfort while reducing energy consumption.",
  },
  {
    icon: <DoorOpen size={28} />,
    title: "Access Control",
    desc: "Secure employee and visitor access with intelligent authentication and monitoring.",
  },
  {
    icon: <Thermometer size={28} />,
    title: "HVAC Automation",
    desc: "Optimize indoor climate through intelligent temperature and ventilation control.",
  },
  {
    icon: <Video size={28} />,
    title: "Meeting Room Automation",
    desc: "Control displays, conferencing systems, lighting, and room scheduling from a single interface.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Energy Management",
    desc: "Monitor power consumption and optimize energy usage across the workplace.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Integrated Security",
    desc: "Connect CCTV, alarms, sensors, and monitoring systems into one centralized platform.",
  },
];
function Officeautomation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Office Automation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Left Content */}
              <div className="max-w-3xl">
                <h1 className="mt-20 text-4xl font-bold leading-tight text-white md:text-6xl">
                  Smarter Workplaces.
                  <br />
                  <span className="text-cyan-400">Connected Experiences.</span>
                </h1>

                <p className="mt-4 sm:mt-8 max-w-2xl text-sm sm:text-lg leading-8 text-gray-200 desc-font">
                  Transform your workplace with intelligent office automation
                  solutions that seamlessly integrate lighting, climate control,
                  meeting rooms, security, access control, and energy
                  management. Cillages One creates connected workspaces that
                  improve efficiency, productivity, security, and employee
                  experience.
                </p>

                {/* Stats */}
                <div className="mt-2 sm:mt-16 grid grid-cols-2 gap-2 md:gap-8 sm:grid-cols-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      24/7
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Remote Monitoring
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      AI
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">Smart Control</p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      IoT
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Connected Devices
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                      100%
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Centralized Management
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="mt-3 lg:mt-10 lg:ml-10">
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
          t
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
              {" "}
              Smart Office Solutions{" "}
            </span>{" "}
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              {" "}
              Intelligent Workspaces <br /> Built for Productivity{" "}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Cillages One transforms traditional offices into intelligent,
              connected workspaces by integrating automation, security,
              communication, and energy management into one seamless ecosystem.
              Our office automation solutions improve operational efficiency,
              enhance workplace experiences, and reduce long-term operational
              costs.
            </p>
          </div>

          {/* Feature Cards */}

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
            {/* <span className="inline-flex rounded-full bg-cyan-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Automation Technologies
            </span> */}

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Smart Technologies
              <br />
              For Modern Workspaces
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Cillages One combines intelligent automation hardware and software
              to create connected office environments that improve efficiency,
              collaboration, security, and operational performance.
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
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Cillages One
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            Create Smarter,
            <br />
            More Productive Workspaces
          </h2>

          <p className="mt-8 text-lg leading-8 text-cyan-100 max-w-3xl mx-auto desc-font">
            Empower your workplace with intelligent automation solutions that
            enhance productivity, strengthen security, optimize energy
            consumption, and deliver seamless control through one connected
            platform.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 hover:bg-gray-100 transition"
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-cyan-700 transition"
            >
              Request a Demo
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-white">24/7</h3>
              <p className="text-cyan-100 mt-2">Central Monitoring</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">AI</h3>
              <p className="text-cyan-100 mt-2">Smart Automation</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Secure</h3>
              <p className="text-cyan-100 mt-2">Access Control</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Energy</h3>
              <p className="text-cyan-100 mt-2">Efficient Office</p>
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

export default Officeautomation;
