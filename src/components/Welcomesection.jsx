import { Link } from "react-router-dom";
import video from "../assets/CillagesFinal.mp4";
import dashboard from "../assets/ucc.png";
export default function WelcomeSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-2xl uppercase tracking-[4px] font-semibold">
              Welcome to Cillages
            </p>

            <h2 className="mt-4 text-4xl md:text-2xl font-bold text-gray-900 head-font">
              Building Excellence Through Design, Culture & Technology
            </h2>

            <p className="mt-6 text-gray-600 leading-8 desc-font">
              Established in 1993, Cillages is a client-focused Project
              Management Consultancy delivering comprehensive solutions across
              residential, commercial, industrial, infrastructure, and mixed-use
              developments. Combining decades of engineering expertise, Agile
              project management, and digital innovation, Cillages now extends
              its capabilities through
              <span className="font-semibold text-blue-600"> Cillages One</span>
              , offering intelligent home, office, and building automation,
              smart security, networking, and AI-powered solutions to create
              connected, future-ready environments.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>30+ Years Experience</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>10M+ Sq. Ft. Successfully Delivered</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>Client Representation</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <p>Project Management</p>
              </div>
            </div>

            <div className="mt-10 flex gap-5">
              <button className="bg-blue-600 text-white px-7 py-3 rounded-full hover:bg-blue-700 transition">
                <a
                  href="/CillagesProfile.pptx"
                  download="cillages.profile.2026.pptx"
                >
                  Company Brochure
                </a>
              </button>

              <Link
                to="/about"
                className="border border-blue-600 text-blue-600 px-7 py-3 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Right Video */}
          <div>
            <video
              src={video}
              controls
              className="w-full rounded-3xl shadow-2xl"
            />
            {/* <a>video will be update after creating video and ppt of ucc</a> */}
            {/* <img
              src={dashboard}
              alt="Community & Facility Management Platform"
              className="rounded-3xl border border-gray-200 shadow-2xl"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
