import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Cillages_Logo.png";
import { Link } from "react-router-dom";
const services = [
  {
    name: "Client Representation",
    link: "/client",
  },
  {
    name: "Development Solution",
    link: "/development-solution",
  },
  {
    name: "Project Management",
    link: "/project-management",
  },
  {
    name: "Cost Consultancy & QA",
    link: "/cost-consultancy",
  },
  {
    name: "Allied Services",
    link: "/allied-services",
  },
  {
    name: "Home Automation",
    link: "/home-automation",
  },
  {
    name: "Office Automaiton",
    link: "/office-automation",
  },
  {
    name: "Hospitality Automation",
    link: "/hospitality-automation",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06111E] text-white">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-5">
          {/* About */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">About Us</h3>

            <p className="leading-7 text-sm text-gray-400">
              For over three decades, Cillages has partnered with clients to
              deliver successful projects through engineering excellence,
              project management, and digital innovation. Our Cillages One
              division extends this vision with intelligent automation, smart
              infrastructure, and connected technology solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Services</h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-500"
                >
                  {item.name}

                  <ArrowUpRight
                    size={15}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 text-cyan-400" size={18} />

                <p className="text-gray-400 text-sm">
                  Goregaon (East), Mumbai 400063
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-cyan-400" size={18} />

                <a
                  href="tel:+918108810707"
                  className="text-gray-400 text-sm hover:text-white"
                >
                  +91 81088 10707
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-cyan-400" size={18} />

                <a
                  href="mailto:sales@cillages.com"
                  className="text-gray-400 text-sm hover:text-white"
                >
                  sales@cillages.com
                </a>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Connect With Us</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-500 hover:bg-cyan-500"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-500 hover:bg-cyan-500"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-500 hover:bg-cyan-500"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="mailto:sales@cillages.com"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-500 hover:bg-cyan-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex flex-col  lg:items-end">
            <img
              src={logo}
              alt="Cillages"
              className="mb-5 w-45 bg-white p-2 rounded  "
            />

            <p className="max-w-xs text-left sm:text-right text-gray-400">
              Delivering Excellence in Every Project Since 1993.
            </p>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Cillages. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
