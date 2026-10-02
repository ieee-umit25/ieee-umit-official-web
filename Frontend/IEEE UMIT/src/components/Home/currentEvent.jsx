import { useState } from "react";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import EventDetailsModal from "./currentEventDetail";

const CurrentEventCard = ({ event }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t border-gray-300 dark:border-gray-700 dark:bg-[hsl(222.2_47.4%_16%)] dark:bg-opacity-70 dark:backdrop-blur-md">

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Title on Image */}
          <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            {event.title}
          </h2>
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4">

          {/* Event Info */}
          <div className="flex justify-between text-sm text-gray-600">

            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
              <Calendar size={16} className="text-blue-500" />
              {event.year}
            </div>

            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <Clock size={16} className="text-green-500" />
              {event.time}
            </div>

          </div>

          {/* Button */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center w-full gap-2 bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            View Details
            <ChevronRight size={18} />
          </button>

        </div>
      </div>

      {/* POPUP */}
      {open && (
        <EventDetailsModal
          event={event}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default CurrentEventCard;