import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

import contactHero from "../assets/Contact-Us.jpg";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error);
        },
      );
  }
  return (
    <>
      {/* ================= Hero ================= */}

      <section className="relative w-full h-[100vh] min-h-[500px] overflow-hidden">
        <img
          src={contactHero}
          alt="Contact Cillages"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-4xl">
            <span className="inline-block px-5 py-2 rounded-full bg-blue-500 border border-blue-400/40 text-white uppercase tracking-[4px] text-sm font-semibold">
              Contact Us
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white">
              Let's Build the Future Together
            </h1>
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}

            <div>
              <span className="text-blue-600 uppercase tracking-[4px] font-semibold">
                Get In Touch
              </span>

              <h2 className="text-5xl font-bold text-gray-900 mt-4">
                We'd Love to Hear From You
              </h2>

              <p className="text-gray-600 mt-8 leading-8 desc-font">
                Have questions about our services or want to discuss your
                upcoming project? Fill out the form and our team will get back
                to you shortly.
              </p>

              {/* Cards */}

              <div className="space-y-6 mt-12">
                <div className="flex gap-5 rounded-2xl bg-white p-6 shadow">
                  <Phone className="h-8 w-8 text-blue-600" />

                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>

                    <a
                      href="tel:+918108810707"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      +91 81088 10707
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 rounded-2xl bg-white p-6 shadow">
                  <Mail className="h-8 w-8 text-blue-600" />

                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>

                    <a
                      href="mailto:sales@cillages.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      sales@cillages.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 p-6 rounded-2xl bg-white shadow">
                  <MapPin className="text-blue-600 w-8 h-8" />

                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>

                    <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 rounded-2xl bg-white shadow">
                  <Clock className="text-blue-600 w-8 h-8" />

                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>

                    <p className="text-gray-600">
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h3>

              <form className="space-y-6" onSubmit={sendEmail}>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  name="from_email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <select
                  name="service"
                  required
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Service</option>
                  <option>Cillages One - Smart Automation</option>
                  <option>Client Representation</option>
                  <option>Development Solutions</option>
                  <option>Project Management Consultancy</option>
                  <option>Redevelopment Consultancy</option>
                  <option>Cost Consultancy</option>
                  <option>Home Automation</option>
                  <option>Office & Building Automation</option>
                  <option>Networking Solutions</option>
                  <option>Security Systems</option>
                  <option>AI & Smart Infrastructure</option>
                  <option>Other</option>
                </select>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
