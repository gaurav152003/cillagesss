import React from "react";
import heroImage from "../assets/clientss.jpg";
import cillagesLogo from "../assets/Cillages_Logo.png";
import spLogo from "../assets/splogo.png";
import lumiLogo from "../assets/lumi.png";
import Footer from "../components/Footer";
import logo1 from "../assets/company logo/Ashray_logo.png";
import logo2 from "../assets/company logo/Ideawings.png";
import logo3 from "../assets/company logo/Integrow.png";
import logo4 from "../assets/company logo/Neptune_Logo.png";
import logo5 from "../assets/company logo/Ninaniya_Logo.jpg";
import logo6 from "../assets/company logo/rustomjee_logo.png";
import logo7 from "../assets/company logo/Shruti_Structures_Logo.png";
import logo8 from "../assets/company logo/transindia.webp";
import logo9 from "../assets/company logo/jw.png";
import logo10 from "../assets/company logo/systra.jpg";
import logo11 from "../assets/company logo/arunkumar.png";
import logo12 from "../assets/company logo/sp.png";
import logo13 from "../assets/company logo/kabra.png";
import logo14 from "../assets/company logo/modi.png";
import logo15 from "../assets/company logo/jpv.png";
import logo16 from "../assets/company logo/bhomi.jpg";
import logo17 from "../assets/company logo/vraj.jpg";
import logo18 from "../assets/company logo/mitakar.jpg";
import logo19 from "../assets/company logo/sadhana.jpg";
import logo20 from "../assets/company logo/newindia.png";
import logo21 from "../assets/company logo/sumit.jpg";
import logo22 from "../assets/company logo/kumar.webp";
import logo23 from "../assets/company logo/vascon.jpg";
import logo24 from "../assets/company logo/rodium.png";
import logo25 from "../assets/company logo/globalinfra.png";
import logo26 from "../assets/company logo/element.png";
import logo27 from "../assets/company logo/priyal.png";
import logo28 from "../assets/company logo/sugee.png";
import logo29 from "../assets/company logo/mahavir.png";
import logo30 from "../assets/company logo/skvm.png";
import logo31 from "../assets/company logo/drasis.png";
const clients = [
  {
    logo: logo1,
    name: "Ashray",
  },
  {
    logo: logo2,
    name: "IdeaWings",
  },
  {
    logo: logo3,
    name: "Integrow",
  },
  {
    logo: logo4,
    name: "Neptune",
  },
  {
    logo: logo5,
    name: "Ninaniya",
  },
  {
    logo: logo6,
    name: "Rustomjee Group",
  },
  {
    logo: logo7,
    name: "Shruti Structures",
  },
  {
    logo: logo8,
    name: "Transindia",
  },
  {
    logo: logo9,
    name: "JW Consultants",
  },
  {
    logo: logo10,
    name: "SYSTRA",
  },
  {
    logo: logo11,
    name: "Arunkumar & Associates",
  },
  {
    logo: logo12,
    name: "Shapoorji Pallonji Group",
  },
  {
    logo: logo13,
    name: "Kabra Group",
  },
  {
    logo: logo14,
    name: "Modi Spaces",
  },
  {
    logo: logo15,
    name: "JPV Realtors",
  },
  {
    logo: logo16,
    name: "Bhoomi Shashwat Realty",
  },
  {
    logo: logo17,
    name: "Vraj Group",
  },
  {
    logo: logo18,
    name: "Mithkar Group",
  },
  {
    logo: logo19,
    name: "Sadhana Homes Reality LLP",
  },
  {
    logo: logo20,
    name: "New India Construction Company",
  },

  {
    logo: logo21,
    name: "Sumeet Woods",
  },
  {
    logo: logo22,
    name: "Kumar Vibes Realty LLP",
  },
  {
    logo: logo23,
    name: "Vascon Engineers Ltd.",
  },
  {
    logo: logo24,
    name: "Rodium Group",
  },
  {
    logo: logo25,
    name: "Global JSP Infra LLP",
  },
  {
    logo: logo26,
    name: "Elements Realty",
  },
  {
    logo: logo27,
    name: "Priyal Developers",
  },
  {
    logo: logo28,
    name: "Sugee Developers",
  },
  {
    logo: logo29,
    name: "The Mahavir Group",
  },
  {
    logo: logo30,
    name: "SVKM (Shri Vile Parle Kelavani Mandal)",
  },
  {
    logo: logo31,
    name: "Drasis Automation",
  },
];
function Clients() {
  return (
    <div>
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Background */}
        <img
          src={heroImage}
          alt="Strategic Collaboration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center  px-6">
          <div className="text-center">
            {/* <span className="inline-flex rounded bg-white/70  border-2 border-blue-500 px-6 py-2 text-md font-bold uppercase tracking-[6px] text-blue-500">
              Strategic Collaboration
            </span> */}

            {/* <h1 className="mt-8 text-4xl md:text-6xl font-bold uppercase text-white">
                Building Better Together
              </h1> */}

            {/* Collaboration */}
            <div className="mt-14 flex  items-center justify-center gap-2 lg:gap-10">
              {/* Cillages */}
              <div className="rounded sm:rounded-3xl bg-white/95 w-[120px] md:w-[250px] px-4 md:px-8 py-3 md:py-6 shadow-2xl transition hover:-translate-y-2">
                <img
                  src={cillagesLogo}
                  alt="Cillages"
                  className="mx-auto h-8 md:h-20 object-contain"
                />
                <h3 className="mt-5 text-[12px] md:text-xl font-bold text-gray-900">
                  Cillages
                </h3>
                {/* <p className="mt-2 text-sm text-gray-600">
                    Project Management
                  </p> */}
              </div>
              <span className="md:hidden text-[20px] text-white">-</span>
              <span className="hidden lg:block text-5xl text-white">-</span>

              {/* SP */}
              <div className=" rounded md:rounded-3xl bg-white/95 w-[120px] md:w-[250px] px-4 md:px-8 py-3 md:py-6 shadow-2xl transition hover:-translate-y-2">
                <img
                  src={spLogo}
                  alt="S.P. Associates"
                  className="mx-auto h-8 md:h-20 object-contain"
                />
                <h3 className="mt-5 text-[12px] md:text-xl font-bold text-gray-900">
                  S.P. Associates
                </h3>
                {/* <p className="mt-2 text-sm text-gray-600">
                    Engineering Consultancy
                  </p> */}
              </div>
              <span className="md:hidden text-[20px] text-white">-</span>
              <span className="hidden lg:block text-5xl text-white">-</span>

              {/* Lumi */}
              <div className="rounded md:rounded-3xl bg-white/95 w-[130px] md:w-[250px] px-4 md:px-8 py-3 md:py-6 shadow-2xl transition hover:-translate-y-2">
                <img
                  src={lumiLogo}
                  alt="Lumi Electronics"
                  className="mx-auto h-8 md:h-20 object-contain"
                />
                <h3 className="mt-5 text-[12px] md:text-xl font-bold text-gray-900">
                  Lumi Electronics
                </h3>
                {/* <p className="mt-2 text-sm text-gray-600">Smart Automation</p> */}
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-8 text-gray-900">
              Together, we combine <strong>Project Management</strong>,
              <strong> Engineering Consultancy</strong>, and
              <strong> Smart Automation</strong> to deliver end-to-end solutions
              for residential, commercial, industrial, and hospitality projects.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-white">
              Our Clients
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Trusted by Leading Organizations
            </h2>

            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              We are proud to collaborate with developers, consultants,
              infrastructure companies, architects, and enterprises who trust
              Cillages to deliver excellence across project management,
              engineering, and intelligent automation.
            </p> */}
          </div>

          {/* Client Logos */}

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="mx-auto h-20 object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />

                <h3 className="mt-6 text-center text-lg font-semibold text-gray-900">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Clients;
