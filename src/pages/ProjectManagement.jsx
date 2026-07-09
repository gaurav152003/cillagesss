import React from "react";
import heroImage from "../assets/proj.jpg";
import aboutImage from "../assets/clientrep.jpg";
import {
  Users,
  ClipboardCheck,
  SearchCheck,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
} from "lucide-react";
import {
  Search,
  FileText,
  PencilRuler,
  HardHat,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { Leaf, Recycle, Globe2, Trees, Factory } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const esg = [
  {
    icon: <Leaf size={30} />,
    title: "Green Project Development",
    desc: "Delivering environmentally responsible projects aligned with modern sustainability standards and green building principles.",
  },
  {
    icon: <Recycle size={30} />,
    title: "ESG Compliance",
    desc: "Integrating Environmental, Social, and Governance (ESG) principles into planning, execution, and long-term project performance.",
  },
  {
    icon: <Globe2 size={30} />,
    title: "Carbon Footprint Monitoring",
    desc: "Monitoring embedded carbon, operational carbon, and emissions across all three carbon accounting scopes.",
  },
  {
    icon: <Trees size={30} />,
    title: "Sustainable Infrastructure",
    desc: "Creating efficient, resilient, and environmentally responsible developments that support long-term growth.",
  },
  {
    icon: <Factory size={30} />,
    title: "Resource Optimization",
    desc: "Optimizing material usage, energy efficiency, and construction methodologies to reduce environmental impact.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Future Ready Projects",
    desc: "Building projects that meet evolving sustainability regulations while maximizing long-term value for stakeholders.",
  },
];
const process = [
  {
    icon: <Search size={30} />,
    title: "Stakeholder Analysis",
    desc: "Understanding stakeholder expectations, project objectives, and business priorities before planning begins.",
  },
  {
    icon: <FileText size={30} />,
    title: "Project Charter",
    desc: "Defining project scope, deliverables, responsibilities, timelines, and governance through a structured project charter.",
  },
  {
    icon: <PencilRuler size={30} />,
    title: "Planning & Design",
    desc: "Coordinating design development, engineering validation, budgeting, scheduling, and procurement planning.",
  },
  {
    icon: <HardHat size={30} />,
    title: "Execution",
    desc: "Managing contractors, consultants, construction activities, quality control, safety, and statutory compliance.",
  },
  {
    icon: <LineChart size={30} />,
    title: "Monitoring & Control",
    desc: "Tracking project progress, budgets, timelines, risks, and stakeholder communication to ensure successful execution.",
  },
  {
    icon: <CheckCircle2 size={30} />,
    title: "Project Delivery",
    desc: "Successful completion, documentation, testing, handover, contract closure, and post-project support.",
  },
];
const capabilities = [
  {
    icon: <Users size={34} />,
    title: "Stakeholder Analysis",
    desc: "Every project begins with a comprehensive stakeholder analysis to understand client expectations, identify key decision-makers, and align project objectives with business goals.",
  },
  {
    icon: <ClipboardCheck size={34} />,
    title: "Project Planning",
    desc: "Developing structured project plans covering scope, timelines, budgets, procurement strategies, and execution roadmaps for efficient delivery.",
  },
  {
    icon: <SearchCheck size={34} />,
    title: "Design Validation",
    desc: "Reviewing and validating engineering designs to ensure technical feasibility, compliance, constructability, and long-term operational efficiency.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Risk Management",
    desc: "Identifying project risks proactively and implementing mitigation strategies to minimize delays, cost overruns, and operational disruptions.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Cost & Schedule Control",
    desc: "Monitoring project budgets, schedules, resource allocation, and progress to maintain transparency and achieve timely project completion.",
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Quality Assurance",
    desc: "Maintaining stringent quality standards through continuous inspections, performance monitoring, and compliance with industry best practices.",
  },
];

function ProjectManagement() {
  return (
    <div>
      <section className="relative h-[100vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Project Management"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-3 max-w-7xl px-6">
            <div className="max-w-3xl">
              <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white">
                Delivering Projects
                <br />
                <span className="text-blue-400">
                  With Precision & Confidence
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200">
                Combining international project management practices, Agile
                methodologies, engineering expertise, and digital innovation to
                successfully deliver complex developments across India.
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
              className="rounded-3xl h-[650px] w-full object-cover shadow-xl"
            />

            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                About Project Management
              </span>

              <h2 className="mt-6 text-5xl font-bold text-gray-900">
                Managing Every Project
                <br />
                <span className="text-blue-600">Beyond Expectations</span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Cillages has an established history of professionally managing
                projects with minimal deviations while ensuring transparency,
                efficiency, and complete stakeholder satisfaction throughout the
                project lifecycle.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Every engagement begins with a detailed stakeholder analysis,
                allowing us to understand business objectives, identify project
                priorities, and deliver customized project management solutions
                tailored to each client's specific requirements.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                By integrating engineering expertise, Agile project management,
                digital capabilities, and sustainable practices, Cillages
                consistently delivers successful residential, commercial,
                industrial, infrastructure, and redevelopment projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Project Management Capabilities
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Combining technical expertise, structured methodologies, and
              stakeholder-focused execution, we ensure projects are delivered on
              time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
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
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Our Project Management Process
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every project follows a structured methodology that combines
              engineering excellence, stakeholder collaboration, and continuous
              monitoring to ensure predictable and successful outcomes.
            </p>
          </div>

          <div className="mt-20 relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded bg-blue-100 lg:block"></div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-5/12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-xl">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      {step.icon}
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">{step.desc}</p>
                  </div>

                  <div className="hidden lg:flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-lg"></div>

                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-6 text-5xl font-bold text-white">
              ESG Driven
              <br />
              Sustainable Project Management
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Cillages integrates sustainability into every project by combining
              engineering excellence with ESG compliance, carbon footprint
              monitoring, and environmentally responsible construction
              practices.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {esg.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-400 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-600 py-24">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Let's Build Together
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white leading-tight">
            Delivering Projects
            <br />
            With Excellence Since 1993
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            Whether you're developing residential communities, commercial
            buildings, industrial facilities, infrastructure, or redevelopment
            projects, Cillages delivers complete project management solutions
            tailored to your business objectives.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105 hover:bg-gray-100"
            >
              Contact Our Experts
              <ArrowRight size={20} />
            </Link>

            <a
              href="/project"
              className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600"
            >
              Explore Projects
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-white">1200+</h3>
              <p className="mt-2 text-blue-100">Projects Managed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">33+</h3>
              <p className="mt-2 text-blue-100">Years of Excellence</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">125+</h3>
              <p className="mt-2 text-blue-100">
                Years Combined Leadership Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">ESG</h3>
              <p className="mt-2 text-blue-100">Sustainability Focused</p>
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

export default ProjectManagement;
