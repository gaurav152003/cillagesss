import React from "react";
import aboutImage from "../assets/about us.avif";
import { ChevronDown } from "lucide-react";
import Leadership from "../components/Leadership";
import ProjectsSection from "../components/Projectsection";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import founderImage from "../assets/team/shailendra.jpg";
function Aboutus() {
  return (
    <>
      <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <img
          src={aboutImage}
          alt="About Cillages"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/85 via-[#050816]/50 to-[#050816]/10" />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full pt-24">
          <div className="max-w-7xl mx-auto w-full px-6">
            <div className="max-w-3xl">
              {/* Badge */}
              <span className="inline-flex items-center rounded-full border border-blue-500 bg-blue-500 px-5 py-1 text-sm font-semibold uppercase tracking-[3px] text-white backdrop-blur-md">
                Since 1993
              </span>

              {/* Heading */}
              <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight text-white">
                Over
                <span className="text-blue-400"> 30 Years </span>
                of
                <br />
                Building Trust &
                <span className="text-blue-400"> Excellence</span>
              </h1>

              {/* Description */}
              <p className="mt-8 text-lg md:text-xl leading-9 text-gray-200">
                Cillages is a client-focused Project Management Consultancy
                delivering industrial, commercial, infrastructure, residential,
                and public sector developments across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-[4px]">
                About Cillages
              </span>

              <h2 className="text-5xl font-bold text-gray-900 mt-4">
                Delivering Excellence Since 1993
              </h2>

              <p className="text-gray-700 mt-8 leading-8 text-lg">
                Established in 1993, Cillages is a client business
                objective-focused Project Management Consultancy with over 30
                years of experience delivering complex industrial, commercial,
                infrastructure, residential, institutional, mall, and community
                development projects across India.
              </p>

              <p className="text-gray-700 mt-6 leading-8 text-lg">
                By combining internationally accepted Project Management
                practices, Agile methodologies, engineering expertise, and
                proprietary digital capabilities through the C2M platform,
                Cillages enables clients to execute projects efficiently while
                maintaining transparency, accountability, and superior
                stakeholder collaboration.
              </p>

              <p className="text-gray-700 mt-6 leading-8 text-lg">
                Today, Cillages continues to evolve by integrating Artificial
                Intelligence, Smart Automation, Digital Infrastructure, and
                connected technologies into its consulting services—helping
                organizations build safer, smarter, and future-ready
                environments.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={founderImage}
                  alt="Mr. Shailendra Maliwar"
                  className="w-[420px] h-[520px] object-cover rounded-3xl shadow-2xl"
                />

                {/* Floating Card */}
                <div className="absolute -bottom-8 left-14 sm:left-20  bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <h3 className="text-xl font-bold text-gray-900">
                    Mr. Shailendra Maliwar
                  </h3>

                  <p className="text-blue-600 font-medium mt-1">
                    Founder & Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white">Our Philosophy</h2>

              <p className="text-gray-400 mt-6 leading-8">
                Every project is driven by our client's business objectives. We
                believe successful project management extends beyond
                construction—it requires strategic planning, digital oversight,
                collaboration, sustainability, safety, and continuous
                innovation.
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                Our philosophy combines engineering excellence with technology,
                ensuring every stakeholder has complete visibility throughout
                the project lifecycle.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-white font-semibold text-xl">
                  Client First
                </h3>
                <p className="text-gray-400 mt-2">
                  Every decision is aligned with our client's business goals.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-xl">
                  Agile Execution
                </h3>
                <p className="text-gray-400 mt-2">
                  Flexible project management methodologies for faster decision
                  making.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-xl">
                  Digital Innovation
                </h3>
                <p className="text-gray-400 mt-2">
                  Powered by our proprietary C2M platform for intelligent
                  project monitoring and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                Smart Automation Division
              </span>

              <h2 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
                Meet
                <span className="ml-3 text-blue-600">Cillages One</span>
              </h2>

              <p className="mt-8 text-gray-600 leading-8 text-lg">
                Cillages One is the intelligent automation division of Cillages,
                delivering innovative solutions for homes, offices, commercial
                buildings, hospitality, and enterprise environments. Designed to
                simplify operations and enhance everyday experiences, Cillages
                One combines automation, connectivity, and intelligent control
                into one powerful ecosystem.
              </p>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                From smart home automation and intelligent lighting to
                networking, surveillance, access control, and AI-powered
                building management, Cillages One empowers clients to build
                secure, connected, and future-ready spaces through modern
                technology.
              </p>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  Smart Home Automation
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Intelligent control of lighting, climate, entertainment, and
                  smart living environments.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  Office & Building Automation
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Integrated automation for offices, commercial buildings, and
                  enterprise facilities.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  Smart Security
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  CCTV surveillance, access control, intrusion detection, and
                  integrated security systems.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  Networking Solutions
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  High-performance wired and wireless networking infrastructure
                  for homes and businesses.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  AI & Smart Infrastructure
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  AI-powered monitoring, intelligent analytics, and connected
                  infrastructure for modern developments.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  Building Management Systems
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Centralized control of lighting, HVAC, energy management,
                  security, and building operations from a unified platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Leadership />
      </section>
      <section>
        <ProjectsSection />
      </section>
      <section>
        <Clients />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Aboutus;
