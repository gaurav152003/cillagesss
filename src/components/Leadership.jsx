import shailendra from "../assets/team/shailendra.jpg";
import singh from "../assets/team/shailendra.jpg";
import mehta from "../assets/team/shailendra.jpg";
import jyoti from "../assets/team/jyoti.jpeg";
import shruti from "../assets/team/shailendra.jpg";

const leaders = [
  {
    image: shailendra,
    name: "Mr. Shailendra Maliwar",
    role: "Founder & Director",
    desc: `Graduate in Civil Engineering from VJTI, Mumbai, Mr. Shailendra Maliwar is a certified Project Management Professional (PMP) accredited by PMI, USA. He holds a postgraduate degree in Systems Management from NMIMS and a Master's in Marketing Management from Mumbai University. A certified Agile Project Manager and life member of the American Concrete Institute (ACI) and the Institution of Engineers, he brings over three decades of leadership and expertise in project management, engineering, and strategic business execution.`,
  },
  {
    image: singh,
    name: "Mr. J. D. Singh",
    role: "Legal & Contract Management",
    desc: `Mr. J. D. Singh is a Science graduate from Mumbai University and a qualified law professional with experience practicing as an advocate in the High Court. His extensive knowledge of contract law, civil procedures, legal documentation, and compliance plays a vital role in contract management, risk mitigation, and governance across complex projects.`,
  },
  {
    image: mehta,
    name: "Mr. Shailesh Mehta",
    role: "Infrastructure Engineering",
    desc: `A Civil Engineering graduate from VJTI, Mumbai, Mr. Shailesh Mehta has nearly four decades of experience in infrastructure development, project execution, and engineering management. Throughout his career, he has successfully managed numerous large-scale corporate and infrastructure projects, delivering technical excellence and operational efficiency.`,
  },
  {
    image: jyoti,
    name: "Dr. Jyoti Maliwar",
    role: "Communication & Documentation",
    desc: `Dr. Jyoti Maliwar is a Science graduate, postgraduate in English, and holds a Doctorate in Business Communication. She specializes in communication management, stakeholder engagement, and project documentation. Her expertise ensures structured information management, comprehensive documentation, and robust data support throughout the project lifecycle and contract closure processes.`,
  },
];

export default function Leadership() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Meet Our Leadership
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Experienced professionals driving innovation, sustainability, and
            excellence across every Cillages project.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {leader.name}
                </h3>

                <p className="text-blue-600 font-medium mt-2">{leader.role}</p>

                <p className="text-gray-600 mt-4 leading-7">{leader.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
