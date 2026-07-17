import { Link } from "react-router-dom";
import ProjectCard from "../components/Projectcard.jsx";

import project1 from "../assets/township.jpg";
import project2 from "../assets/neptune.jpg";
import project3 from "../assets/magnet.jpg";
import project4 from "../assets/rustomjee.jpg";
import project5 from "../assets/smt.jpg";
import project6 from "../assets/skvm.jpg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "320 Acre Integrated Township",
    location: "Pune",
    area: "320 Acres",
    type: "Township Development",
    description:
      "A landmark integrated township featuring master planning, infrastructure development, residential communities, commercial spaces, and public amenities across 320 acres.",
  },
  {
    id: 2,
    image: project2,
    title: "Living Point",
    location: "Mumbai",
    area: "1.2 Million Sq. Ft.",
    type: "Residential Development",
    description:
      "A premium mixed-use residential development offering modern living spaces, landscaped surroundings, lifestyle amenities, and sustainable urban planning.",
  },
  {
    id: 3,
    image: project3,
    title: "Magnet Mall",
    location: "Mumbai",
    area: "1 Million Sq. Ft.",
    type: "Commercial Development",
    description:
      "A landmark commercial destination integrating retail, entertainment, dining, and business spaces with world-class project management and execution.",
  },
  {
    id: 4,
    image: project4,
    title: "Rustomjee – Natraj",
    location: "Mumbai",
    area: "300,000 Sq. Ft.",
    type: "Grade-A Office Complex",
    description:
      "Project management consultancy for a premium commercial office development strategically located at the junction of the Western Express Highway and Andheri–Kurla Road.",
  },
  {
    id: 5,
    image: project5,
    title: "Siddhivinayak Medical Centre",
    location: "Prabhadevi, Mumbai",
    area: "12,000 Sq. Ft.",
    type: "Healthcare Infrastructure",
    description:
      "Project management for the construction and interior development of a modern medical centre for the Siddhivinayak Temple Trust.",
  },
  {
    id: 6,
    image: project6,
    title: "SVKM Educational Campus",
    location: "Vile Parle, Mumbai",
    area: "30,000 Sq. Ft.",
    type: "Educational Infrastructure",
    description:
      "Project management for the expansion and development of Mukesh Patel School of Technology, Management & Engineering under SVKM.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Signature Projects
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 desc-font">
              From landmark townships and commercial developments to
              educational, healthcare, and mixed-use infrastructure, every
              project reflects our commitment to engineering excellence,
              innovation, and client success.
            </p>
          </div>
        </div>

        {/* Cards */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
