import PANKAJ from "../assets/team/pankaj.png";
import singh from "../assets/team/jd.png";
import mehta from "../assets/team/shailesh.png";
import jyoti from "../assets/team/jyoti.jpeg";
import jayesh from "../assets/team/jj.jpeg";
import shailendra from "../assets/team/shailendra.jpg";

const leaders = [
  {
    image: shailendra,
    name: "Mr. Shailendra Maliwar",
    role: "Founder & Director",
    desc: `Graduate in Civil Engineering from VJTI, Mumbai, Mr. Shailendra Maliwar is a certified Project Management Professional (PMP) accredited by PMI, USA. He holds a postgraduate degree in Systems Management from NMIMS and a Master's in Marketing Management from Mumbai University. A certified Agile Project Manager and life member of the American Concrete Institute (ACI) and the Institution of Engineers, he brings over three decades of leadership and expertise in project management, engineering, and strategic business execution.`,
  },
  //   {
  //     image: PANKAJ,
  //     name: "Mr. PANKAJ SHAH",
  //     role: "Founder & Director",
  //     desc: `A Renowned Name in Construction Industry in Mumbai , HE HAS BEEN AWARDED ACI AWARD, 2020, B.E. (Civil), MACI. (USA), MIE., MICI, MISSE, Chartered engineer, Structural Engineer, Licensed Surveyor, Past President of India Chapter of American Concrete Institute, USA.
  // Mr. Pankaj Shah has been actively involved with “India Chapter of American Concrete Institute” for last 15 years as a Member in Board of Direction working for cause of Concrete and Civil Engineering in India. He is presently the “Past President of the “India Chapter of American Concrete Institute”. He also has an experience of over 38 years dedicated to the Civil Industry Handling projects ranging from Petroleum plants, Textile processing units, Effluent treatment, cement plants to Repairs and Restoration works in ooperative Societies, Industrial Units, Corporate buildings and Redevelopment of Housing Societies.`,
  //   },
  {
    image: singh,
    name: "Mr. J. D. Singh",
    role: "Legal & Contract Management",
    desc: `Mr. J.D. Singh is professionally a well known administrator and law expert. He has been managing estates for over 35 years now. He brings along with him decades of business expertise and professional culture. Born and educated post graduate from Mumbai, he is well versed with the cultural side of business practices. He is a proven negotiator and, rich with problem solving skills.`,
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
  {
    image: jayesh,
    name: "Jayesh J",

    desc: `Jayesh J is a Product Owner, Scrum Master, and UX/UI Specialist with over 19 years of experience helping organizations build user-centric digital products and improve business processes. He combines expertise in product strategy, Agile delivery, business analysis, and experience design to deliver solutions that align customer needs with business objectives. His strengths lie in stakeholder collaboration, product vision definition, requirements management, and creating intuitive user experiences that drive measurable outcomes.`,
  },
];

export default function Leadership() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Meet Our Leadership
          </h2>

          <p className="mt-6 text-gray-600 leading-8 desc-font">
            Experienced professionals driving innovation, sustainability, and
            excellence across every Cillages project.
          </p>
        </div>

        {/* Cards */}
        {/* Leadership Members */}

        <div className="mt-20 space-y-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div
                className={`grid items-center gap-8 lg:grid-cols-3 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}

                <div className="h-full">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full min-h-[420px] w-full object-cover"
                  />
                </div>

                {/* Content */}

                <div className="p-8 lg:col-span-2 lg:p-12">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-blue-600">
                    Leadership Team
                  </span>

                  <h3 className="mt-6 text-4xl font-bold text-gray-900">
                    {leader.name}
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-blue-600">
                    {leader.role}
                  </p>

                  <div className="mt-8 h-1 w-20 rounded-full bg-blue-600"></div>

                  <p className="mt-8 text-lg leading-8 text-gray-600 desc-font">
                    {leader.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
