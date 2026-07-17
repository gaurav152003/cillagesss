import React from "react";
import heroImage from "../assets/client2.jpg";
import { BriefcaseBusiness, BadgeCheck, ShieldCheck } from "lucide-react";
import { CheckCircle2, ClipboardCheck, HardHat } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const quality = [
  "Design & Design Basis Review",
  "Specifications & Contract Documentation Review",
  "Testing & Commissioning Report Verification",
  "Statutory Approval Review",
  "Site Walk-through & Visual Inspection",
  "Monthly Audit Reports & Recommendations",
];

const safety = [
  "Environment, Health & Safety (EHS) Standards",
  "Risk Assessment & Mitigation Planning",
  "Fall Protection & Work-at-Height Safety",
  "Permit to Work Systems",
  "Emergency Evacuation Planning",
  "Regular Safety Meetings & Site Inspections",
];

const services = [
  {
    icon: <BriefcaseBusiness size={34} />,
    title: "Program Management & Process Review",
    desc: "Acting as a single point of contact, Cillages provides strategic planning, project monitoring, periodic reviews, and factual reporting to project owners. Our team identifies schedule risks, recommends corrective actions, and ensures projects remain aligned with targeted timelines, budgets, and stakeholder expectations.",
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Quality Review & Audits",
    desc: "Our engineers conduct comprehensive reviews of project designs, specifications, statutory approvals, testing reports, and construction quality. Through first, second, and third-party quality audits, we identify defects, recommend improvements, and help clients achieve the highest quality standards throughout project execution.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Safety Review & Audits",
    desc: "Cillages delivers Environment, Health & Safety (EHS) audits, project-specific safety planning, risk assessments, fall protection reviews, emergency preparedness, and ongoing site inspections to ensure regulatory compliance and promote a zero-accident work environment.",
  },
];
function AlliedServices() {
  return (
    <div>
      <section className="relative h-[100vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Allied Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-3 max-w-7xl px-6">
            <div className="max-w-3xl">
              <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
                Beyond Project
                <br />
                <span className="text-blue-400">Management Excellence</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200 desc-font">
                Cillages offers a comprehensive portfolio of allied services
                including Program Management, Process Reviews, Quality Audits,
                Safety Audits, and EHS compliance—helping clients deliver
                projects with greater efficiency, quality, safety, and long-term
                value.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="/contact"
                  className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Talk to Our Experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <span className="inline-flex rounded-full border border-blue-500  bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            About Allied Services
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Delivering More Than
            <br />
            <span className="text-blue-600">Project Management</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600 desc-font">
            At Cillages, our expertise extends beyond Project Management
            Consultancy. We offer a comprehensive portfolio of allied services
            that strengthen project execution through strategic planning,
            process improvement, quality assurance, safety management, and
            continuous project monitoring.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600 desc-font">
            From Program Management and Process Reviews to Quality Audits,
            Safety Audits, and Environment, Health & Safety (EHS) compliance,
            our multidisciplinary team works closely with developers,
            consultants, contractors, and project owners to identify risks
            early, improve project performance, and ensure successful project
            delivery.
          </p>

          {/* Highlights */}

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">
                Program Management
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 desc-font">
                Strategic planning, monitoring, reporting, and schedule
                management.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">
                Process Review
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 desc-font">
                Improving project efficiency through systematic process
                evaluation.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">
                Quality Audits
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 desc-font">
                Independent quality assessments for better construction
                standards.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">
                Safety Audits
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 desc-font">
                Comprehensive EHS reviews to create safer construction
                environments.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">
                Risk Assessment
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 desc-font">
                Identifying project risks and recommending effective mitigation
                plans.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">
                EHS Compliance
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 desc-font">
                Ensuring compliance with Environment, Health & Safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex rounded-full border border-blue-500  bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Our Allied Services
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Specialized Services That Add Value
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Beyond Project Management Consultancy, Cillages offers specialized
              services that strengthen project planning, improve quality,
              enhance safety, and reduce operational risks throughout the
              project lifecycle.
            </p>
          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600 desc-font">
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
            <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 border border-blue-500 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Quality & Safety
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Building Confidence Through
              <br />
              Quality & Safety Excellence
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Cillages believes that quality and safety are fundamental to every
              successful project. Through structured audits, technical reviews,
              and Environment, Health & Safety (EHS) assessments, we help
              clients minimize risks, improve construction quality, and achieve
              regulatory compliance.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {/* Quality */}

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <ClipboardCheck size={32} />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">
                Quality Review & Audits
              </h3>

              <p className="mt-4 leading-8 text-gray-600 desc-font">
                Our experienced engineers evaluate project documentation,
                construction quality, statutory approvals, testing reports, and
                site execution to identify risks, defects, and opportunities for
                continuous improvement.
              </p>

              <div className="mt-8 space-y-4">
                {quality.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-1 text-blue-600" />
                    <span className="text-gray-700 desc-font">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety */}

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <HardHat size={32} />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">
                Safety Review & Audits
              </h3>

              <p className="mt-4 leading-8 text-gray-600 desc-font">
                Our structured safety audits help clients establish safer
                workplaces through EHS compliance, hazard identification, risk
                mitigation, emergency planning, and continuous safety
                monitoring.
              </p>

              <div className="mt-8 space-y-4">
                {safety.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-1 text-blue-600" />
                    <span className="text-gray-700 desc-font">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-24">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Allied Services
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Strengthening Every Project
            <br />
            Beyond Project Management
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100 desc-font">
            From Program Management and Process Reviews to Quality Audits,
            Safety Audits, and EHS compliance, Cillages provides specialized
            allied services that improve project performance, reduce risks, and
            ensure successful delivery.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105 hover:bg-gray-100"
            >
              Contact Our Experts
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-white">1200+</h3>
              <p className="mt-2 text-blue-100">Projects Managed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">30+</h3>
              <p className="mt-2 text-blue-100">Years of Expertise</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">EHS</h3>
              <p className="mt-2 text-blue-100">Safety & Compliance</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="mt-2 text-blue-100">Client-Focused Approach</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
      ;
    </div>
  );
}

export default AlliedServices;
