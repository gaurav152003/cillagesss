import React from "react";
import projectHero from "../assets/project.jpg";
import { ArrowUpRight } from "lucide-react";
import project5 from "../assets/smt.jpg";
import project6 from "../assets/skvm.jpg";
import project1 from "../assets/township.jpg";
import project2 from "../assets/magnet.jpg";
import project3 from "../assets/rustomjee.jpg";
import project4 from "../assets/neptune.jpg";
import Footer from "../components/Footer";
import { useState } from "react";

function Projects() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <img
          src={projectHero}
          alt="Our Projects"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            {/* Top Row */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Left Side */}
              <div className="max-w-3xl">
                <h1 className="mt-8 md:mt-0 text-5xl md:text-7xl font-bold leading-tight text-white">
                  Building
                  <br />
                  <span className="text-blue-400">Landmark Developments</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base md:text-xl leading-8 text-gray-200 desc-font">
                  Over three decades of delivering residential, commercial,
                  industrial, institutional, redevelopment, infrastructure, and
                  township projects across India.
                </p>

                <div className="mt-10">
                  <a
                    href="/contact"
                    className="inline-flex rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Start Your Project
                  </a>
                </div>
              </div>

              {/* Right Side */}
              <div className="mt-2 lg:mt-2 lg:ml-10">
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border border-white/30 bg-blue-600 backdrop-blur-md px-8 py-4 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
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
                            required
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
                            required
                            type="password"
                            placeholder="Enter Password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
                          />
                        </div>

                        <button
                          onClick={() =>
                            alert("Please enter the correct ID and password.")
                          }
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

      {/* section 2 */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <h2 className="text-5xl font-bold text-blue-600">1200+</h2>
              <p className="mt-3 text-gray-600">Projects Managed</p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <h2 className="text-5xl font-bold text-blue-600">33+</h2>
              <p className="mt-3 text-gray-600">Years Experience</p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <h2 className="text-5xl font-bold text-blue-600">42+</h2>
              <p className="mt-3 text-gray-600">Redevelopment Projects</p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <h2 className="text-5xl font-bold text-blue-600">320</h2>
              <p className="mt-3 text-gray-600">Acre Township</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-14 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Featured Projects
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Landmark Developments
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 desc-font">
              Over three decades, Cillages has successfully delivered landmark
              residential, commercial, institutional, infrastructure, and
              township developments that reflect engineering excellence,
              innovation, and client-focused execution.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-20 space-y-16">
            {/* Project 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                src={project1}
                alt="320 Acre Township"
                className="rounded-3xl h-[450px] w-full object-cover shadow-xl"
              />

              <div>
                <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                  Township Development
                </span>

                <h3 className="mt-4 text-4xl font-bold text-gray-900">
                  320 Acre Integrated Township
                </h3>

                <p className="mt-6 text-gray-600 leading-8 desc-font">
                  One of the group's landmark developments featuring integrated
                  residential communities, commercial districts, infrastructure,
                  public amenities, and master planning across 320 acres in
                  Pune.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">320</h4>
                    <p className="text-gray-600">Acres</p>
                  </div>

                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">Pune</h4>
                    <p className="text-gray-600">Location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                  Commercial Development
                </span>

                <h3 className="mt-4 text-4xl font-bold text-gray-900">
                  Magnet Mall
                </h3>

                <p className="mt-6 text-gray-600 leading-8 desc-font">
                  A landmark commercial destination integrating retail,
                  entertainment, office spaces, and hospitality with modern
                  project management practices and world-class infrastructure.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">1M+</h4>
                    <p className="text-gray-600">Sq. Ft.</p>
                  </div>

                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">Mumbai</h4>
                    <p className="text-gray-600">Location</p>
                  </div>
                </div>
              </div>

              <img
                src={project2}
                alt="Magnet Mall"
                className="order-1 lg:order-2 rounded-3xl h-[450px] w-full object-cover shadow-xl"
              />
            </div>

            {/* Project 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                src={project3}
                alt="Rustomjee Natraj"
                className="rounded-3xl h-[450px] w-full object-cover shadow-xl"
              />

              <div>
                <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                  Commercial Office Complex
                </span>

                <h3 className="mt-4 text-4xl font-bold text-gray-900">
                  Rustomjee – Natraj
                </h3>

                <p className="mt-6 text-gray-600 leading-8 desc-font">
                  Premium Grade-A office development strategically located at
                  the junction of the Western Express Highway and Andheri–Kurla
                  Road, offering world-class commercial spaces.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">
                      300,000
                    </h4>
                    <p className="text-gray-600">Sq. Ft.</p>
                  </div>

                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">Mumbai</h4>
                    <p className="text-gray-600">Location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                  Residential Development
                </span>

                <h3 className="mt-4 text-4xl font-bold text-gray-900">
                  Living Point
                </h3>

                <p className="mt-6 text-gray-600 leading-8 desc-font">
                  A premium mixed-use residential development offering modern
                  living spaces, landscaped surroundings, lifestyle amenities,
                  and sustainable urban planning.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">
                      1.2 Million
                    </h4>
                    <p className="text-gray-600">Sq. Ft.</p>
                  </div>

                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">Mumbai</h4>
                    <p className="text-gray-600">Location</p>
                  </div>
                </div>
              </div>

              <img
                src={project4}
                alt="Magnet Mall"
                className="order-1 lg:order-2 rounded-3xl h-[450px] w-full object-cover shadow-xl"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                src={project5}
                alt="Rustomjee Natraj"
                className="rounded-3xl h-[450px] w-full object-cover shadow-xl"
              />

              <div>
                <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                  Healthcare Infrastructure
                </span>

                <h3 className="mt-4 text-4xl font-bold text-gray-900">
                  Siddhivinayak Medical Centre
                </h3>

                <p className="mt-6 text-gray-600 leading-8 desc-font">
                  Project management for the construction and interior
                  development of a modern medical centre for the Siddhivinayak
                  Temple Trust
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">12,000</h4>
                    <p className="text-gray-600">Sq. Ft.</p>
                  </div>

                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">
                      Prabhadevi, Mumbai
                    </h4>
                    <p className="text-gray-600">Location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
                  Educational Infrastructure
                </span>

                <h3 className="mt-4 text-4xl font-bold text-gray-900">
                  SVKM Educational Campus
                </h3>

                <p className="mt-6 text-gray-600 leading-8 desc-font">
                  Project management for the expansion and development of Mukesh
                  Patel School of Technology, Management & Engineering under
                  SVKM.",
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">
                      30,000+
                    </h4>
                    <p className="text-gray-600">Sq. Ft.</p>
                  </div>

                  <div>
                    <h4 className="text-blue-600 text-3xl font-bold">
                      Vile Parle, Mumbai
                    </h4>
                    <p className="text-gray-600">Location</p>
                  </div>
                </div>
              </div>

              <img
                src={project6}
                alt="Magnet Mall"
                className="order-1 lg:order-2 rounded-3xl h-[450px] w-full object-cover shadow-xl"
              />
            </div>

            {/* <div className="mt-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                View All Projects...
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
            Let's Build Together
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white leading-tight">
            Ready to Build Your
            <br />
            Next Landmark Project?
          </h2>

          <p className="mt-8 text-lg leading-8 text-blue-100 max-w-3xl mx-auto desc-font">
            From residential and commercial developments to large-scale
            infrastructure, redevelopment, and smart building solutions,
            Cillages is your trusted partner for successful project delivery.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Projects;
