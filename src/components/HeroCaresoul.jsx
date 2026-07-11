import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import hero1 from "../assets/banner2.jpg";
import hero3 from "../assets/banner1.png";
import hero2 from "../assets/banner3.webp";
import hero4 from "../assets/banner4.jpg";
const slides = [
  {
    id: 1,
    image: hero1,
    title: "From Vision to Reality",
    subtitle: "Development Solutions",
    description:
      "End-to-end development solutions including project management, design, cost consultancy, and real estate advisory—all under one roof.",
    buttonText: "Explore Solutions →",
    buttonLink: "/development-solution",
  },

  {
    id: 2,
    image: hero2,
    title: "Delivering Projects with Precision",
    subtitle: "Project Management",
    description:
      "We plan, coordinate, and manage every stage of construction to ensure quality, timely delivery, and complete client satisfaction.",
    buttonText: "View Services →",
    buttonLink: "/project-management",
  },

  {
    id: 4,
    image: hero4,
    title: "Your Trusted Partner at Every Stage",
    subtitle: "Client Representation",
    description:
      "Acting as an extension of your team, we safeguard your interests through project planning, stakeholder coordination, contract management, risk mitigation, and investor representation from concept to completion.",
    buttonText: "Explore Client Representation →",
    buttonLink: "/client",
  },
  {
    id: 3,
    image: hero3,
    title: "Intelligent Spaces",
    subtitle: "Introducing Cillages One",
    description:
      "Experience seamless control of lighting, climate, security, entertainment, and every connected device through one intelligent home automation ecosystem.",
    buttonText: "Explore Cillages One →",
    buttonLink: "/cillages-one",
  },
];

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      loop
      speed={600}
      autoplay={{
        delay: 12000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      className="w-full h-screen"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
            {/* Background */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/5" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 sm:px-8 md:px-12 lg:px-20">
              <div className="w-full max-w-3xl">
                <span className="inline-block rounded-full border-2 border-blue-900 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[4px] text-blue-900  sm:text-lg">
                  {slide.subtitle}
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                  {slide.title}
                </h1>

                <p className="mt-6 max-w-2xl text-sm leading-7 font-semibold text-gray-200 sm:text-base md:text-lg lg:text-xl lg:leading-9">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to={slide.buttonLink}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 md:h-14 md:px-10 md:text-base"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
