import {
  Building2,
  BriefcaseBusiness,
  ShieldCheck,
  Users,
  ClipboardCheck,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: <BriefcaseBusiness size={30} />,
    title: "30+ Years of Excellence",
    desc: "Delivering trusted Project Management Consultancy services since 1993 across residential, commercial, infrastructure, industrial, and mixed-use developments.",
  },
  {
    icon: <Building2 size={30} />,
    title: "1200+ Projects Managed",
    desc: "Successfully managing projects ranging from structural rehabilitation and redevelopment to large-scale townships and commercial developments.",
  },
  {
    icon: <Users size={30} />,
    title: "Client Representation",
    desc: "Acting as an extension of our clients, safeguarding their interests through planning, execution, stakeholder coordination, and project delivery.",
  },
  {
    icon: <ClipboardCheck size={30} />,
    title: "Project Management",
    desc: "Applying international Project Management practices with Agile methodologies to deliver projects on time, within budget, and to the highest quality standards.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Cillages One",
    desc: "Our intelligent automation division delivering smart home, office, hospitality, security, networking, and AI-powered building automation solutions.",
  },
  {
    icon: <Landmark size={30} />,
    title: "Technology & Innovation",
    desc: "Combining engineering expertise with our proprietary digital capabilities and smart automation technologies to build sustainable, future-ready environments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black/20 py-24">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[90%] px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-white px-5 py-2 text-lg font-semibold uppercase tracking-[5px] text-blue-500">
            Why Choose Cillages
          </span>

          <h2 className="mt-6 text-4xl font-bold text-blue-500 md:text-5xl lg:text-6xl ">
            Engineering Excellence Powering Smarter Futures
          </h2>

          <p className="mt-6 text-lg leading-8 text-black desc-font">
            Since 1993, Cillages has combined engineering excellence, project
            management expertise, and digital innovation to deliver successful
            developments. Today, through Cillages One, we extend our
            capabilities with intelligent automation, networking, security, and
            AI-powered solutions for modern homes, buildings, and enterprises.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-black p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]"
            >
              {/* Hover Line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500 transition-all duration-500 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-500">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-400 desc-font">
                {item.desc}
              </p>

              {/* Footer */}
              {/* <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-6">
                <span className="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                  Learn More
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500">
                  <ArrowUpRight
                    size={18}
                    className="text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-24 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-12 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">500+</h3>
            <p className="mt-2 text-gray-400">Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">30+</h3>
            <p className="mt-2 text-gray-400">Years</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">10M+</h3>
            <p className="mt-2 text-gray-400">Sq. Ft.</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">100%</h3>
            <p className="mt-2 text-gray-400">Client Focus</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
