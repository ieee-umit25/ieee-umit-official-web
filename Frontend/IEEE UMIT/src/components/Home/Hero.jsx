import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroCarouselImages = [
  "https://res.cloudinary.com/wg2rax47/image/upload/f_auto/q_auto/Screenshot_2026-09-19_133205.png",
  "https://res.cloudinary.com/aoglrtot/image/upload/v1790941356/IEEE_group_photo.jpg",
  "https://res.cloudinary.com/dunstvosl/image/upload/v1760183621/WhatsApp_Image_2025-10-11_at_5.23.18_PM_uovnbt.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeroCarouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % HeroCarouselImages.length);
  };

  return (
    <section className="relative w-full overflow-hidden font-sans">

      {/* SLIDER */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HeroCarouselImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 h-[300px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-cover"
          />
        ))}
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/20"></div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 z-10">

        <h1 className="mt-8 sm:mt-12 md:mt-0 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide leading-tight">
          <span className="text-cyan-400">Engineering</span> Tomorrow,
          <br />
          <span className="text-cyan-400">Together</span>
        </h1>

        <p className="mt-2 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-2xl max-w-xl sm:max-w-2xl md:max-w-3xl text-gray-300">
          Discover the{" "}
          <span className="font-semibold text-white">
            IEEE Student Chapter at UMIT
          </span>
          . Engage with events, and a vibrant community of future engineers and
          innovators.
        </p>

        {/* BUTTONS */}
        <div className="mt-3 sm:mt-6 md:mt-8 flex gap-2 sm:gap-4 md:gap-6 flex-wrap justify-center">

          <NavLink to="/events/upcoming">
            <button className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 text-small sm:text-sm md:text-lg font-semibold rounded-xl bg-cyan-600 hover:bg-cyan-500 transition">
              Upcoming Event
              <ArrowForwardIcon fontSize="small" />
            </button>
          </NavLink>

          <NavLink to="/events/past">
            <button className="flex items-center px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 text-small sm:text-sm md:text-lg font-semibold rounded-xl border border-cyan-300 hover:bg-cyan-500 hover:text-black transition">
              Explore Past Events
            </button>
          </NavLink>

        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-3 z-20">
        {HeroCarouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-cyan-400 scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* NEXT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute hidden md:block right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-20 transition"
      >
        <ArrowForwardIcon />
      </button>

    </section>
  );
}