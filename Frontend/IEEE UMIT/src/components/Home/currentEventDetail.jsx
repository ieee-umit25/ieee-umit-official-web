import { X, Calendar, Clock, MapPin } from "lucide-react";

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        >
          <X size={24} color="black" />
        </button>

        {/* EVENT IMAGE */}
        <div className="w-full h-[300px] overflow-hidden rounded-t-2xl">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* EVENT DETAILS */}
        <div className="p-6 md:p-8">

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {event.title}
          </h2>

          {/* INFO */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">

            {event.year && (
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <Calendar
                  size={20}
                  className="text-blue-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Year
                  </p>

                  <p className="font-semibold text-gray-800">
                    {event.year}
                  </p>
                </div>
              </div>
            )}

            {event.time && (
              <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                <Clock
                  size={20}
                  className="text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Time
                  </p>

                  <p className="font-semibold text-gray-800">
                    {event.time}
                  </p>
                </div>
              </div>
            )}

            {event.location && (
              <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg">
                <MapPin
                  size={20}
                  className="text-red-600"
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="font-semibold text-gray-800">
                    {event.location}
                  </p>
                </div>
              </div>
            )}

            {event.type && (
              <div className="flex items-center gap-3 bg-cyan-50 p-3 rounded-lg">
                <div>
                  <p className="text-xs text-gray-500">
                    Event Type
                  </p>

                  <p className="font-semibold text-gray-800">
                    {event.type}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* DESCRIPTION */}
          <div className="mb-6">

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              About the Event
            </h3>

            <p className="text-gray-600 leading-7">
              {event.description}
            </p>

          </div>

          {/* SPONSORS */}
          {event.sponsors && event.sponsors.length > 0 && (
            <div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sponsors & Partners
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                {event.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 flex items-center gap-4"
                  >

                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-20 h-20 object-contain"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        {sponsor.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {sponsor.role}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default EventDetailsModal;