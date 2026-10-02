import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const EventDetailsModal = ({ event, onClose }) => {

  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? event.gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === event.gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
   <div className="fixed z-10 shadow-lg hover:shadow-xl transition-all duration-300 inset-0 bg-black/60 border-t border-gray-300 dark:border-gray-700 flex items-center justify-center p-8 ">

      <div className="bg-white rounded-xl max-w-5xl w-full p-8 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          
          className="absolute top-4 right-4"
        >
          <X  className="hover:scale-x-100  " color="black"/>
        </button>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT → IMAGE GALLERY */}
          <div>

            {/* BIG IMAGE */}
            <div className="relative">

              <img
                src={event.gallery[current]}
                alt="event"
                className="rounded-lg w-full h-87 object-cover"
              />

              {/* SLIDE BUTTONS */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                <ChevronLeft color="black" size={20}/>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                <ChevronRight color="black" size={20}/>
              </button>

            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4 overflow-x-auto">

              {event.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  onClick={() => setCurrent(index)}
                  className={`w-20 h-16 object-cover rounded cursor-pointer border-2 
                  ${current === index ? "border-blue-500" : "border-transparent"}`}
                />
              ))}

            </div>

          </div>

          {/* RIGHT → DETAILS */}
          <div>

            <h2 className="text-2xl text-black font-bold mb-4">
              {event.title}
            </h2>

            <p className="mb-4 text-gray-600">
              {event.description}
            </p>

            <h3 className="font-semibold text-black mb-2">Overview</h3>

            <p className="text-gray-600">
              {event.overview}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EventDetailsModal;