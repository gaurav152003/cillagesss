import React from "react";
import heroImage from "../assets/cost.jpg";
import aboutImage from "../assets/cost1.jpg";
import {
  Calculator,
  SearchCheck,
  BarChart3,
  ClipboardList,
  BriefcaseBusiness,
  FileText,
  FileCheck2,
  Landmark,
  CheckCircle,
} from "lucide-react";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const stages = [
  {
    icon: <Calculator size={32} />,
    title: "Pre Contract",
    description:
      "Comprehensive cost planning and feasibility analysis before project commencement.",
    points: [
      "Initial Budgetary Estimate",
      "Preliminary Cash Flow",
      "Identification of Items for Advance Purchase",
      "Value Management with Consultants",
      "Cost Monitoring Against Design Progress",
      "Preliminary Cost Plan & Cash Flows",
    ],
  },

  {
    icon: <FileText size={32} />,
    title: "Tendering & Documentation",
    description:
      "Preparing procurement strategies and complete tender documentation for smooth execution.",
    points: [
      "Procurement Strategy",
      "Preparation of Contract Documentation",
      "Preparation of Standard BOQ",
      "Tender Review & Analysis",
      "Letter of Award Preparation",
      "Contract Preparation",
    ],
  },

  {
    icon: <BarChart3 size={32} />,
    title: "Post Contract Cost Control",
    description:
      "Monitoring project costs and maintaining financial control throughout construction.",
    points: [
      "Cost Control & Administration",
      "Revised Cash Flow",
      "Financial Advice",
      "Change Management Strategies",
      "Monthly Project Cost Reports",
      "Material Reconciliation",
    ],
  },

  {
    icon: <Landmark size={32} />,
    title: "Financial Management",
    description:
      "Managing project finances until successful contractual and financial closure.",
    points: [
      "Progress Payments",
      "Monthly Valuations",
      "Attend Project Meetings",
      "Preparation of Final Accounts",
      "Financial Close-Out",
      "Contractual Close-Out",
    ],
  },
];
const services = [
  {
    icon: <Calculator size={34} />,
    title: "Cost Management",
    desc: "Establishing an effective centralized Cost Management system to monitor project budgets, control expenditures, and deliver the best value proposition throughout the project lifecycle.",
  },
  {
    icon: <SearchCheck size={34} />,
    title: "Cost Audit",
    desc: "Independent review and auditing of project costs to ensure financial transparency, accountability, and compliance with client requirements.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Cost Monitoring",
    desc: "Continuous monitoring of project costs, cash flows, design progress, and financial performance to maintain complete budget control.",
  },
  {
    icon: <ClipboardList size={34} />,
    title: "Quantity Surveying",
    desc: "Preparation of Bills of Quantities (BOQ), quantity verification, measurements, valuations, and commercial documentation for accurate cost planning.",
  },
  {
    icon: <BriefcaseBusiness size={34} />,
    title: "Value Management",
    desc: "Working closely with consultants to optimize project costs while maintaining functionality, quality, and long-term value.",
  },
  {
    icon: <FileText size={34} />,
    title: "Procurement Strategy",
    desc: "Planning procurement packages, tendering strategies, contract structures, and vendor selection for efficient project execution.",
  },
  {
    icon: <FileCheck2 size={34} />,
    title: "Tendering & Documentation",
    desc: "Preparation of tender documents, BOQs, contract documentation, tender evaluation, Letters of Award, and contract administration.",
  },
  {
    icon: <Landmark size={34} />,
    title: "Financial Management",
    desc: "Managing cash flows, progress payments, monthly valuations, final accounts, contractual close-out, and financial reporting.",
  },
];

function CostConsultancy() {
  return (
    <div>
      <section className="relative h-[100vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Cost Consultancy & Quantity Surveying"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-3 max-w-7xl px-6">
            <div className="max-w-3xl">
              <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
                Delivering Cost
                <br />
                <span className="text-blue-400">Certainty & Value</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200 desc-font">
                Our Cost Consultancy and Quantity Surveying services provide
                comprehensive cost planning, budgeting, procurement support,
                financial monitoring, and value engineering to ensure projects
                achieve the best value while remaining within budget.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="/contact"
                  className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Talk to Our Experts
                </a>

                <a
                  href="/project"
                  className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
                >
                  View Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                src={aboutImage}
                alt="Cost Consultancy & Quantity Surveying"
                className="w-full h-[650px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                About Cost Consultancy
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
                Maximizing Value.
                <br />
                <span className="text-blue-600">Controlling Every Cost.</span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600 desc-font">
                Cillages provides comprehensive Cost Consultancy and Quantity
                Surveying services to help clients achieve the best value while
                maintaining complete financial control throughout the project
                lifecycle.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
                Our experienced Cost Management team develops structured cost
                planning, budgeting, procurement, and monitoring systems that
                provide complete transparency for developers, consultants,
                contractors, and project stakeholders.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
                From preliminary feasibility studies and tender documentation to
                post-contract cost control, financial reporting, and final
                account settlement, we ensure projects remain aligned with
                client objectives, commercial expectations, and approved
                budgets.
              </p>

              {/* Highlights */}

              <div className="mt-12 grid grid-cols-2 gap-6 desc-font">
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800 desc-font">
                    Cost Planning
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800 desc-font">
                    Quantity Surveying
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800 desc-font">
                    Value Engineering
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800 desc-font">
                    Tender Management
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800 desc-font">
                    Cost Monitoring
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800 desc-font">
                    Financial Control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Comprehensive Cost Consultancy Services
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Cillages delivers end-to-end Cost Consultancy and Quantity
              Surveying services, providing complete financial visibility,
              commercial management, procurement support, and cost control from
              project inception through successful completion.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 desc-font">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Four Stages of Cost Consultancy
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Our structured quantity surveying and cost management methodology
              ensures complete financial transparency from budgeting and
              tendering through construction monitoring and final project
              close-out.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-10 transition hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  {stage.icon}
                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">
                  {stage.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 desc-font">
                  {stage.description}
                </p>

                <div className="mt-8 space-y-4">
                  {stage.points.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle size={18} className="mt-1 text-blue-600" />

                      <span className="text-gray-700 desc-font">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-24">
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Cost Consultancy & Quantity Surveying
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Deliver Better Value.
            <br />
            Stay Within Budget.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100 desc-font">
            From feasibility studies and cost planning to tender management,
            financial monitoring, and project close-out, Cillages delivers
            comprehensive Cost Consultancy and Quantity Surveying services that
            maximize value while maintaining complete financial transparency.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105 hover:bg-gray-100"
            >
              Request a Consultation
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
              <h3 className="text-4xl font-bold text-white">1200+</h3>
              <p className="mt-2 text-blue-100">Projects Managed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">30+</h3>
              <p className="mt-2 text-blue-100">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="mt-2 text-blue-100">Cost Transparency</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">Best</h3>
              <p className="mt-2 text-blue-100">Value Engineering</p>
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

export default CostConsultancy;
