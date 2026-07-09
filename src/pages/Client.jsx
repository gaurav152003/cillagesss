import heroImage from "../assets/client.webp";
import clientAbout from "../assets/clientrep.jpg";
import {
  Search,
  ClipboardCheck,
  Users,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Section,
} from "lucide-react";
import partnershipImage from "../assets/client2.jpg";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import logo1 from "../assets/company logo/Ashray_logo.png";
import logo2 from "../assets/company logo/Ideawings.png";
import logo3 from "../assets/company logo/Integrow.png";
import logo4 from "../assets/company logo/Neptune_Logo.png";
import logo5 from "../assets/company logo/Ninaniya_Logo.jpg";
import logo6 from "../assets/company logo/rustomjee_logo.png";
import logo7 from "../assets/company logo/Shruti_Structures_Logo.png";
import logo8 from "../assets/company logo/transindia.webp";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const process = [
  {
    icon: <Search size={28} />,
    title: "Discovery & Evaluation",
    description:
      "Understanding project objectives, feasibility, technical requirements, risks, and stakeholder expectations before execution begins.",
  },
  {
    icon: <ClipboardCheck size={28} />,
    title: "Planning & Strategy",
    description:
      "Developing project strategies, defining scope, scheduling milestones, budgeting, procurement, and execution plans.",
  },
  {
    icon: <Users size={28} />,
    title: "Stakeholder Coordination",
    description:
      "Coordinating architects, consultants, contractors, authorities, and project teams to ensure seamless collaboration.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Risk & Quality Management",
    description:
      "Monitoring quality, safety, timelines, contracts, and project risks while protecting the client's interests.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Progress Monitoring",
    description:
      "Providing transparent reporting, cost tracking, progress reviews, and proactive decision-making throughout the project.",
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Successful Delivery",
    description:
      "Ensuring smooth project completion, stakeholder satisfaction, documentation, and successful contract closure.",
  },
];
const clients = [
  { id: 1, logo: logo1, name: "Ashray" },
  { id: 2, logo: logo2, name: "Ideawings" },
  { id: 3, logo: logo3, name: "Integrow" },
  { id: 4, logo: logo4, name: "Neptune" },
  { id: 5, logo: logo5, name: "Ninaniya" },
  { id: 6, logo: logo6, name: "Rustomjee" },
  { id: 7, logo: logo7, name: "Shruti Structures" },
  { id: 8, logo: logo8, name: "Transindia" },
];
export default function Client() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Client Representation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-3 mt-10 max-w-7xl px-6">
            <div className="max-w-3xl">
              <h1 className="mt-10 text-5xl font-bold leading-tight text-white md:text-7xl">
                Building Trust.
                <br />
                <span className="text-blue-400">Delivering Confidence.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200">
                Acting as your trusted representative, Cillages safeguards your
                interests through every milestone of the project lifecycle.
              </p>
              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="/contact"
                  className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Get in Touch
                </a>

                <a
                  href="/project"
                  className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative">
              <img
                src={clientAbout}
                alt="Client Representation"
                className="h-[650px] w-full rounded-3xl object-cover shadow-2xl"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-10  rounded-2xl border border-gray-100 bg-white px-8 py-6 shadow-2xl  md:ml-20">
                <div className="flex items-center gap-8 ">
                  <div>
                    <h3 className="text-5xl font-bold text-blue-600">1200+</h3>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      Projects Managed
                    </p>
                  </div>

                  <div className="h-16 w-px bg-gray-200"></div>

                  <div>
                    <h3 className="text-5xl font-bold text-blue-600">30+</h3>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                About Client Representation
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
                Your Project.
                <br />
                <span className="text-blue-600">
                  Our Complete Responsibility.
                </span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                At Cillages, Client Representation extends beyond conventional
                project management. We act as an extension of your organization,
                protecting your interests while ensuring every decision aligns
                with your business objectives.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                From project discovery and feasibility studies to consultant
                coordination, contract management, execution, monitoring, and
                successful handover, we oversee every stage with transparency,
                accountability, quality, and cost efficiency.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                In partnership with
                <span className="font-semibold text-blue-600">
                  {" "}
                  S.P. Associates
                </span>
                , we combine over three decades of expertise, 1,200+ completed
                projects, and multidisciplinary engineering knowledge to deliver
                successful residential, commercial, infrastructure,
                redevelopment, and mixed-use developments across India.
              </p>

              {/* Features */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800">Project Planning</p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800">
                    Contract Management
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800">
                    Stakeholder Coordination
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800">Risk Management</p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800">Quality Assurance</p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <p className="font-medium text-gray-800">
                    Investor Representation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Our Process
            </span> */}

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              How We Represent Our Clients
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every project is managed through a structured methodology that
              ensures transparency, accountability, and successful delivery
              while safeguarding our clients' interests at every stage.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {process.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}

            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                Strategic Partnership
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
                Stronger Together with
                <br />
                <span className="text-blue-600">S.P. Associates</span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Cillages and S.P. Associates have joined forces to deliver
                comprehensive Project Management Consultancy and Client
                Representation services backed by decades of engineering,
                redevelopment, and infrastructure expertise.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                With more than{" "}
                <strong>1,200 successfully managed projects</strong>, experience
                across residential, commercial, industrial, infrastructure, and
                township developments, and a multidisciplinary leadership team,
                we ensure every project receives strategic direction, technical
                excellence, and complete client focus.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div>
                  <h3 className="text-5xl font-bold text-blue-600">33+</h3>

                  <p className="mt-2 text-gray-600">Years of Excellence</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-blue-600">1200+</h3>

                  <p className="mt-2 text-gray-600">Projects Managed</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-blue-600">42+</h3>

                  <p className="mt-2 text-gray-600">Redevelopment Projects</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-blue-600">125+</h3>

                  <p className="mt-2 text-gray-600">
                    Years Combined Leadership Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}

            <div className="relative">
              <img
                src={partnershipImage}
                alt="Cillages & SP Associates"
                className="rounded-3xl shadow-2xl h-[650px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">
            {/* <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Trusted By
            </span> */}

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Our Valued Clients & Partners
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Over the years, Cillages has partnered with leading developers,
              consultants, institutions, and businesses to deliver successful
              projects with transparency, quality, and engineering excellence.
            </p>
          </div>

          {/* Logos */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group flex h-40 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                />

                <p className="mt-6 text-sm font-semibold text-gray-700">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-blue-600 py-24">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-white">
            Your Vision.
            <br />
            Our Responsibility.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're a developer, investor, housing society, or corporate
            organization, Cillages represents your interests from project
            inception to successful completion with complete transparency,
            technical expertise, and strategic guidance.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105 hover:bg-gray-100"
            >
              Talk to Our Experts
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
              <h3 className="text-4xl font-bold text-white">33+</h3>
              <p className="mt-2 text-blue-100">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">42+</h3>
              <p className="mt-2 text-blue-100">Redevelopment Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="mt-2 text-blue-100">Client-Centric Approach</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
