import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "IEEE DAY",
    year: "2025-26",
    time: "12:30 PM - 1:30 PM",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900182/WhatsApp_Image_2026-03-07_at_9.36.45_PM_2_nddcqq.jpg",
    overview:
      `IEEE Day 2025 was celebrated at UMIT, SNDT on 6th and 7th October, bringing together students to celebrate innovation, collaboration, and technology. The event featured an insightful session by Dr. Satyanarayana Bheesette, introducing IEEE sections and the opportunities it offers to students worldwide.

A major highlight of the celebration was the reveal of the first-ever IEEE UMIT website, showcasing information about IEEE, events, and blogs. Another special moment was the launch of the magazine GAIA 2.0, highlighting creativity, technology, and sustainability.

The event also included a trophy distribution ceremony honoring senior council members for their dedication and contributions to IEEE UMIT. The celebration reflected the spirit of teamwork, learning, and the shared vision of advancing technology for humanity.`,
    gallery: [
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900192/WhatsApp_Image_2026-03-07_at_9.36.44_PM_1_ind1th.jpg",
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900185/WhatsApp_Image_2026-03-07_at_9.36.45_PM_1_u62jfk.jpg",
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900188/WhatsApp_Image_2026-03-07_at_9.36.45_PM_g5qvus.jpg",
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900182/WhatsApp_Image_2026-03-07_at_9.36.45_PM_2_nddcqq.jpg",
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900178/WhatsApp_Image_2026-03-07_at_9.36.45_PM_3_nujowb.jpg",
    ],
  },
];

function UpcomingEventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-xs h-[450px] mx-auto cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Event Badge */}
      <span className="absolute top-3 right-3 font-bold bg-[hsl(222.2_47.4%_11.2%)] text-white text-xs px-3 py-1 rounded-full">
        {event.year}
      </span>

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-black/80 text-white flex flex-col justify-center p-6
          transition-all duration-500 ease-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
          }
        `}
      >
        <h3 className="text-lg font-bold mb-2">
          {event.title}
        </h3>

        <p className="text-sm text-gray-300 mb-4 line-clamp-5">
          {event.overview}
        </p>

        <div className="flex items-center text-sm mb-2">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{event.time}</span>
        </div>

        <div className="flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>UMIT, SNDT Women's University</span>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingEventsPage() {
  return (
    <div className="dark:text-white dark:bg-[hsl(222.2_47.4%_11.2%)]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center dark:text-gray-300 text-gray-700 mb-6">
          UPCOMING ACTIVITIES
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {events.map((event) => (
            <UpcomingEventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </div>
  );
}