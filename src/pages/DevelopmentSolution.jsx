import React from "react";
import heroImage from "../assets/developmentsolution.jpg";
import aboutImage from "../assets/devsol.jpg";
import {
  BarChart3,
  Building2,
  SearchCheck,
  PencilRuler,
  FileCheck2,
  Wallet,
  HardHat,
  Megaphone,
  Scale,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ClipboardList, CheckCircle2 } from "lucide-react";

const process = [
  {
    icon: <SearchCheck size={28} />,
    title: "01. Feasibility",
    desc: "Analyzing technical, commercial, financial, and legal feasibility to ensure the project starts on a strong foundation.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "02. Planning",
    desc: "Defining project scope, timelines, budgets, stakeholder responsibilities, and execution strategies.",
  },
  {
    icon: <PencilRuler size={28} />,
    title: "03. Design & Approvals",
    desc: "Managing architects, consultants, design coordination, statutory approvals, and regulatory compliance.",
  },
  {
    icon: <FileCheck2 size={28} />,
    title: "04. Execution",
    desc: "Supervising construction quality, contracts, procurement, safety, cost control, and project schedules.",
  },
  {
    icon: <HardHat size={28} />,
    title: "05. Monitoring",
    desc: "Continuous project monitoring, progress reporting, stakeholder coordination, and risk management.",
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "06. Successful Delivery",
    desc: "Project completion, documentation, contract closure, and seamless handover to ensure long-term success.",
  },
];

const services = [
  {
    icon: <BarChart3 size={34} />,
    title: "Feasibility Analysis",
    desc: "Comprehensive technical, financial, and commercial feasibility studies to evaluate project viability before development begins.",
  },
  {
    icon: <Building2 size={34} />,
    title: "Real Estate Advisory",
    desc: "Strategic advisory services for land utilization, project planning, redevelopment, and long-term real estate value creation.",
  },
  {
    icon: <SearchCheck size={34} />,
    title: "Techno-Commercial Due Diligence",
    desc: "Detailed technical, commercial, legal, and financial evaluation to minimize risks and support informed decisions.",
  },
  {
    icon: <PencilRuler size={34} />,
    title: "Design Management",
    desc: "Coordinating architects, consultants, and engineering teams to ensure efficient design development and execution.",
  },
  {
    icon: <FileCheck2 size={34} />,
    title: "Permission Management",
    desc: "Managing statutory approvals, government permissions, documentation, and regulatory compliance throughout the project.",
  },
  {
    icon: <Wallet size={34} />,
    title: "Funds Management",
    desc: "Budget planning, financial monitoring, cash flow management, and coordination of project funding requirements.",
  },
  {
    icon: <HardHat size={34} />,
    title: "Construction Management",
    desc: "Complete supervision of quality, safety, timelines, contractors, and execution to ensure successful project delivery.",
  },
  {
    icon: <Megaphone size={34} />,
    title: "Marketing & Sales Management",
    desc: "Supporting branding, marketing strategies, customer engagement, and sales management for successful project commercialization.",
  },
  {
    icon: <Scale size={34} />,
    title: "Legal & Documentation",
    desc: "Contract management, legal documentation, compliance, stakeholder coordination, and seamless project closure.",
  },
];
function DevelopmentSolution() {
  return (
    <div>
      <section className="relative h-[100vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Development Solutions"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/10" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-3 max-w-7xl px-6">
            <div className="max-w-3xl">
              <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
                End-to-End
                <br />
                <span className="text-blue-400">Development Solutions</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-200 max-w-xl">
                From feasibility studies and project planning to construction,
                legal documentation, marketing, and successful delivery,
                Cillages manages every stage of the development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <img
              src={aboutImage}
              alt=""
              className="rounded-3xl h-[600px] object-cover shadow-xl"
            />

            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                About Development Solutions
              </span>

              <h2 className="mt-6 text-5xl font-bold text-gray-900">
                Complete Development.
                <br />
                <span className="text-blue-600">One Trusted Partner.</span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Whether it's self-redevelopment, residential projects,
                commercial developments, or corporate real estate, Cillages
                provides complete development management from concept to
                completion.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our multidisciplinary team coordinates engineering, finance,
                legal, approvals, design, construction, and sales to ensure
                projects are delivered efficiently, transparently, and
                successfully.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              End-to-End Development Services
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide complete development management solutions for
              self-redevelopment, residential, commercial, infrastructure, and
              corporate projects—covering every stage from planning to
              successful project delivery.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              From Vision to Successful Delivery
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our structured development methodology ensures every project is
              executed with precision, transparency, and complete accountability
              from concept to completion.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {step.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Let's Build Together
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white leading-tight">
            Transform Your Development
            <br />
            Vision Into Reality
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            Whether you're planning a self-redevelopment project, a commercial
            development, a township, or a large-scale infrastructure project,
            Cillages delivers end-to-end development solutions backed by over
            three decades of expertise.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105 hover:bg-gray-100"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>

            <a
              href="/project"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600"
            >
              View Our Projects
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-white">30+</h3>
              <p className="mt-2 text-blue-100">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">1200+</h3>
              <p className="mt-2 text-blue-100">Projects Managed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">42+</h3>
              <p className="mt-2 text-blue-100">Redevelopment Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="mt-2 text-blue-100">Client Focus</p>
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

export default DevelopmentSolution;
