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

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-8">
        <span className="text-xs font-semibold uppercase tracking-[3px] text-orange-400">
          {project.type}
        </span>

        <h3 className="mt-2 text-3xl font-bold text-white">{project.title}</h3>

        {/* Mobile: Always Visible */}
        <div className="mt-4 md:hidden">
          <p className="text-sm leading-6 text-gray-200">
            {project.description}
          </p>

          {/* <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
            View Project
            <ArrowUpRight size={16} />
          </button> */}
        </div>

        {/* Desktop: Visible on Hover */}
        <div
          className="
            hidden
            md:block
            overflow-hidden
            max-h-0
            opacity-0
            transition-all
            duration-500
            group-hover:max-h-40
            group-hover:opacity-100
            group-hover:mt-4
          "
        >
          <p className="text-sm leading-6 text-gray-200">
            {project.description}
          </p>

          {/* <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
            View Project
            <ArrowUpRight size={16} />
          </button> */}
        </div>
      </div>
    </div>
  );
}
