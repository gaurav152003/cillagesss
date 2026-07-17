import React from "react";

import dashboard from "../assets/ucc.png";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Home, Building2, Hotel } from "lucide-react";
import { CheckCircle2, Presentation } from "lucide-react";

const solutions = [
  {
    icon: <Home size={38} />,
    title: "Home Automation",
    description:
      "Create intelligent living spaces with smart lighting, climate control, security, entertainment, and voice-enabled automation.",
    link: "/home-automation",
  },
  {
    icon: <Building2 size={38} />,
    title: "Office Automation",
    description:
      "Build connected workplaces with intelligent lighting, HVAC, access control, meeting room automation, and energy management.",
    link: "/office-automation",
  },
  {
    icon: <Hotel size={38} />,
    title: "Hospitality Automation",
    description:
      "Deliver exceptional guest experiences through smart room automation, centralized management, digital concierge, and hotel automation.",
    link: "/hospitality-automation",
  },
];
function Cillaegesone() {
  return (
    <>
      <section className="bg-gray-100 py-34">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}

            <div>
              <span className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
                Cillages One
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
                Intelligent
                <br />
                <span className="text-cyan-600">
                  Township Management System
                </span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600 desc-font">
                Cillages One combines an intelligent digital platform with smart
                automation solutions to simplify operations, improve efficiency,
                and create connected digital experiences across residential,
                commercial, and hospitality environments.
              </p>

              {/* Highlights */}

              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  "Digital Platform",
                  "Smart Automation",
                  "Real-Time Monitoring",
                  "Facility Management",
                  "Security Monitoring",
                  "Workflow Automation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-cyan-600" />

                    <span className="font-medium text-gray-700 desc-font">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-cyan-600 px-8 py-4 font-semibold text-cyan-600 transition hover:bg-cyan-600 hover:text-white"
                >
                  Request Demo
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Dashboard */}

            <div className="relative">
              <img
                src={dashboard}
                alt="Community & Facility Management Platform"
                className="rounded-3xl border border-gray-200 shadow-2xl"
              />

              {/* Badge */}

              {/* <div className="absolute left-6 top-6 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Featured SaaS
                </p>

                <h3 className="mt-1 text-lg font-bold text-cyan-600">
                  Community & Facility Management
                </h3>
              </div> */}

              {/* View Presentation */}

              <a
                href="/pdf/cillages.profile.2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-cyan-700"
              >
                <Presentation size={18} />
                View Presentation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-cyan-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-600">
              Automation Solutions
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Smart Automation
              <br />
              For Every Environment
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              From modern homes to corporate offices and hospitality spaces,
              Cillages One delivers intelligent automation solutions designed to
              improve comfort, efficiency, security, and operational excellence.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600 desc-font">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 hover:gap-3 transition-all"
                >
                  Explore Solution
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-cyan-600 to-blue-600 py-24">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Cillages One
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Ready to Build
            <br />
            Smarter Digital Experiences?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100 desc-font">
            Whether you're looking for an intelligent SaaS platform or smart
            automation solutions, Cillages One helps transform the way you
            manage, monitor, and automate your spaces with innovative
            technology.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:bg-gray-100"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <a
              href="/pdf/cillages.profile.2026.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-cyan-700"
            >
              Download Presentation
            </a>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Cillaegesone;
