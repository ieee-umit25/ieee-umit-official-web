import { useState } from "react";

export default function HackathonPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-3 sm:px-4">
      <div
        className="
          relative bg-white dark:bg-gray-900
          rounded-2xl shadow-2xl
          w-full max-w-lg
          max-h-[95vh] sm:max-h-[90vh]
          overflow-auto
          flex flex-col
        "
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-20 text-white bg-black/60 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold"
        >
          ✕
        </button>

        <div className="relative px-3 sm:px-4 pt-3">
          {/* Soft glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/25 via-pink-500/15 to-purple-500/25 blur-2xl rounded-xl" />

          <img
            src="https://res.cloudinary.com/dunstvosl/image/upload/v1767864977/hackFusion_ighmce.jpg"
            alt="HackFusion Poster"
            className="
            relative z-10
            w-full
            h-auto
            rounded-lg
            max-h-[60vh] sm:max-h-[75vh]
            object-contain
            rounded-lg
            shadow-lg
           "
          />
        </div>
        <div className="p-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="https://hackfusion-2026.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2
              bg-red-600 hover:bg-red-700
              text-white rounded-lg
              font-semibold transition
              text-center
            "
          >
            Know More
          </a>

          <a
            href="https://unstop.com/hackathons/hackfusion-2026-sardar-patel-institute-of-technology-spit-mumbai-1619448?lb=AagKQhW&utm_medium=Share&utm_source=spitiee1274&utm_campaign=Online_coding_challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2
              bg-red-600 hover:bg-red-700
              text-white rounded-lg
              font-semibold transition
              text-center
            "
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
