import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer shadow-xl">
      {/* Background */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90" />

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10">
        <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
          {project.type}
        </span>

        <h3 className="mt-2 text-3xl font-bold text-white">{project.title}</h3>

        {/* Description */}
        <div
          className="
            overflow-hidden
            max-h-0
            opacity-0
            transition-all
            duration-500
            group-hover:max-h-40
            group-hover:opacity-100
            mt-0
            group-hover:mt-4
          "
        >
          <p className="text-sm leading-6 text-gray-200">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
