import React from "react";
import heroImage from "../assets/homeautomation.jpg";
import {
  Lightbulb,
  Blinds,
  Thermometer,
  ShieldCheck,
  Smartphone,
  Mic,
} from "lucide-react";
import {
  Cpu,
  MonitorSmartphone,
  ToggleLeft,
  Wifi,
  ScanFace,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const products = [
  {
    icon: <ToggleLeft size={34} />,
    title: "Escult Smart Switches",
    desc: "Premium touch switches supporting KNX, Zigbee, Z-Wave, and customizable scene control.",
  },
  {
    icon: <Cpu size={34} />,
    title: "Lumi Home Pro Controller",
    desc: "Powerful intelligent controller that manages lighting, climate, security, entertainment, and automation routines.",
  },
  {
    icon: <MonitorSmartphone size={34} />,
    title: "Smart Touch Panels",
    desc: "Elegant wall-mounted touch panels providing centralized control of every connected smart device.",
  },
  {
    icon: <Wifi size={34} />,
    title: "Smart Sensors",
    desc: "Motion, occupancy, door, window, temperature, and environmental sensors for intelligent automation.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Mobile App Control",
    desc: "Control your complete smart home remotely using intuitive Android and iOS applications.",
  },
  {
    icon: <ScanFace size={34} />,
    title: "Voice & AI Integration",
    desc: "Compatible with Amazon Alexa, Google Assistant, Apple Siri, Samsung SmartThings, and Tuya ecosystems.",
  },
];
const features = [
  {
    icon: <Lightbulb size={28} />,
    title: "Smart Lighting",
    desc: "Create the perfect ambiance with intelligent lighting scenes and automated scheduling.",
  },
  {
    icon: <Blinds size={28} />,
    title: "Curtain Control",
    desc: "Control curtains and blinds automatically based on time, weather, or your preferences.",
  },
  {
    icon: <Thermometer size={28} />,
    title: "Climate Control",
    desc: "Maintain ideal indoor comfort with automated air conditioning and temperature control.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Advanced Security",
    desc: "Integrate smart locks, CCTV, sensors, and alarms for complete peace of mind.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Control",
    desc: "Monitor and manage every connected device from anywhere using a single mobile app.",
  },
  {
    icon: <Mic size={28} />,
    title: "Voice Assistance",
    desc: "Operate your home effortlessly using Alexa, Google Assistant, or Apple Siri.",
  },
];
function Homeautomation() {
  return (
    <div>
      <section className="relative h-[100vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Home Automation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-3 mt-16 max-w-7xl px-6">
            <div className="max-w-3xl">
              {/* <span className="inline-flex rounded border border-blue-400/30 bg-blue-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-300">
                Cillages One • Home Automation
              </span> */}

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-7xl">
                Experience the
                <br />
                <span className="text-cyan-400">Future of Smart Spaces</span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm sm:text-lg leading-8 text-gray-200">
                Transform your home into an intelligent living space with
                Cillages One. Our integrated home automation solutions give you
                complete control over lighting, climate, security,
                entertainment, curtains, and appliances—all from a single touch
                panel, mobile app, or voice assistant.
              </p>

              {/* Stats */}

              <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">100+</h3>
                  <p className="mt-2 text-sm text-gray-300">Smart Devices</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
                  <p className="mt-2 text-sm text-gray-300">Remote Access</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">AI</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Intelligent Automation
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">Voice</h3>
                  <p className="mt-2 text-sm text-gray-300">Assistant Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Intelligent Automation
              <br />
              For Modern Living
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cillages One transforms everyday living through intelligent home
              automation solutions that seamlessly integrate lighting, climate,
              entertainment, security, and smart appliances into one connected
              ecosystem. Designed for villas, apartments, and luxury residences,
              our solutions deliver greater comfort, convenience, security, and
              energy efficiency.
            </p>
          </div>

          {/* Features */}

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

                <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Intelligent Products
              <br />
              Built for Smart Living
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powered by Cillages One and our technology partners, our
              intelligent product portfolio delivers reliable automation,
              seamless connectivity, and premium user experiences for modern
              homes.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-2 hover:border-cyan-500 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              Why Choose Home Automation?
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Experience Smarter, Safer & More Comfortable Living
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Home automation transforms the way you live by bringing
              convenience, security, energy efficiency, and complete control
              into one intelligent ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Complete Convenience",
                description:
                  "Control lights, curtains, appliances, and entertainment systems effortlessly from anywhere.",
                icon: "🏠",
              },
              {
                title: "Enhanced Security",
                description:
                  "Monitor your home with smart cameras, video door phones, sensors, and instant alerts.",
                icon: "🛡️",
              },
              {
                title: "Energy Efficiency",
                description:
                  "Reduce electricity consumption with intelligent scheduling, automation, and occupancy-based controls.",
                icon: "⚡",
              },
              {
                title: "Personalized Comfort",
                description:
                  "Create customized scenes for movie nights, bedtime, work, or entertaining guests with one touch.",
                icon: "✨",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
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
            Experience Smarter Living
            <br />
            With Intelligent Home Automation
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100">
            Whether you're building a new home or upgrading an existing one,
            Cillages One delivers intelligent automation solutions that enhance
            comfort, security, convenience, and energy efficiency—all controlled
            from a single touch panel, mobile app, or voice assistant.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:scale-105 hover:bg-gray-100"
            >
              Book a Free Consultation
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
              <p className="mt-2 text-cyan-100">Remote Access</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Voice</h3>
              <p className="mt-2 text-cyan-100">Assistant Ready</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Secure</h3>
              <p className="mt-2 text-cyan-100">Smart Living</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Energy</h3>
              <p className="mt-2 text-cyan-100">Efficient Solutions</p>
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

export default Homeautomation;
