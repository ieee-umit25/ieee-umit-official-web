import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const sponsors = [
  {
    name: "SUNY Binghamton University",
    role: "Innovation Partner",
    logo:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1770410142/bu_wnfo8u.png",
    description:
      "SUNY Binghamton University supports HackFusion 2026 as the Innovation Partner, contributing its strong academic foundation, cutting-edge research culture, and a global perspective that encourages forward-thinking solutions.",
  },
  {
    name: "IMFS",
    role: "Knowledge Partner",
    logo:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1770410233/IMFS_Logo_Green_8_rafmq2.png",
    link: "https://www.imfs.co.in/",
    description:
      "IMFS joins HackFusion 2026 as the Knowledge Partner, bringing valuable insights into global education and international opportunities, while guiding students toward meaningful academic and career pathways abroad.",
  },
];

export const EventCard = ({
  title,
  date,
  description,
  image,
  type,
  location,
  sponsors,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group rounded-xl overflow-hidden shadow-lg w-full max-w-xs h-[450px] mx-auto cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Event Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Type Badge */}
      <span className="absolute top-3 right-3 font-bold bg-[hsl(222.2_47.4%_11.2%)] text-white text-xs px-3 py-1 rounded-full">
        {type}
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
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-300 mb-4 line-clamp-4">
            {description}
          </p>
        )}

        {/* Date */}
        <div className="flex items-center text-sm mb-2">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{date}</span>
        </div>

        {/* Location */}
        {location && (
          <div className="flex items-center text-sm mb-2">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{location}</span>
          </div>
        )}

        {/* Partners */}
        {sponsors && sponsors.length > 0 && (
          <div className="mt-3">
            <h4 className="font-bold text-sm mb-2">
              OUR PARTNERS
            </h4>

            <div className="flex flex-col gap-2">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-8 h-8 rounded-full object-contain bg-white p-1 flex-shrink-0"
                  />

                  <div>
                    <p className="text-xs font-semibold">
                      {sponsor.name}
                    </p>

                    <p className="text-[10px] text-gray-300">
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
  );
};

// Events listed in Reverse Chronological Order
const pastEvents = [
  {
    id: 1,
    title: "Electronic Product Design Workshop",
    date: "Sep 17-18, 2026",
    time: "9:30 AM – 4:00 PM",
    description:
      "A 2-Day immersive, hands-on workshop on electronic product design, circuit development, and fabrication to turn ideas into practical prototypes.",
    overview:
      `The Department of Electronics & Communication Engineering, in association with E-Cell UMIT, IEEE UMIT & IIC UMIT Councils, presents a 2-Day Electronic Product Design Workshop!

Get ready for an immersive, hands-on experience where you'll explore electronic product design, circuit development, and fabrication, taking your ideas from design to a practical prototype.

Instructions for Participants:
• Bring a fully charged laptop for both days.
• Download and install KiCad and Eagle software on your laptop before attending the program.
• A 45-minute break will be provided each day. Please carry your tiffin/lunch box.
• Have a circuit design already prepared? Bring it along for fabrication during the program.

Organized by:
Department of Electronics & Communication Engineering, Usha Mittal Institute of Technology (UMIT), SNDT Women's University, Mumbai

In association with:
E-Cell UMIT | IEEE UMIT | IIC UMIT`,
    image: "https://res.cloudinary.com/wg2rax47/image/upload/c_auto,g_north_west,h_1427,w_1098/c_crop,g_north_west,h_1450,w_1080/f_auto/q_auto/YOUR_PARAGRAPH_TEXT.png",
    type: "WORKSHOP",
    location: "Room 401, 4th Floor, UMIT, SNDT",
  },
  {
    id: 2,
    title: "SIH Internal Hackathon",
    date: "Sep 17, 2026",
    time: "—",
    description:
      "IEEE UMIT’s internal Smart India Hackathon event, where student teams developed innovative solutions around real-world problem statements.",
    image:
      "https://res.cloudinary.com/c2ne1cno/image/upload/f_auto,q_auto/ieee1",
    type: "SMART INDIA HACKATHON",
    location: "SNDT Women's University, UMIT",
  },
  {
    id: 3,
    title: "Entrepreneurship & Innovation in Tech",
    date: "Sep 03, 2026",
    time: "11:30 AM onwards",
    description:
      "An entrepreneurship and innovation in technology session featuring an industry speaker and insights into building ideas, innovation and technology.",
    overview:
      `The Department of Electronics & Communication Engineering, in collaboration with the AI Department, presents Entrepreneurship & Innovation in Tech. The session brings students an opportunity to explore entrepreneurship, innovation and technology through an engaging industry-focused session featuring Ramesh Somani, Founder of Exhibit Group and Chief Editor & Publisher of BBC TopGear India.`,
    image:
      "https://res.cloudinary.com/c2ne1cno/image/upload/v1790510222/ieee3.png",
    type: "WORKSHOP",
    location: "UMIT, 5th Floor Auditorium",
  },
  {
    id: 4,
    title: "HackFusion",
    date: "Feb 07, 2026",
    time: "—",
    description:
      "HackFusion 2026 is an international hybrid hackathon co-organized by IEEE UMIT and IEEE SPIT. Taking place on 7–8 February 2026, the event invites innovators and problem-solvers to collaborate on impactful ideas in a high-energy competitive setting. Teams of 2–4 members can participate, with online access available for international teams and offline participation for teams from India. With a total prize pool of ₹1.2 Lakhs, HackFusion is an exciting opportunity to learn, network, and push your creative limits.",
    image:
      "https://res.cloudinary.com/c2ne1cno/image/upload/v1790510238/ieee4.png",
    type: "HACKATHON",
    location: "SPIT, Mumbai",
    sponsors: sponsors,
  },
  {
    id: 5,
    title: "Mechatron Robotics",
    date: "Oct 14, 2025",
    time: "1:00 PM - 3:30 PM",
    description:
      "The IEEE UMIT Student Branch, in collaboration with Mechatron Robotics, organized a Robotics Workshop to provide students with practical exposure to robotics and embedded systems.",
    overview:
      `The IEEE UMIT Student Branch, in collaboration with Mechatron Robotics, organized a Robotics Workshop on 14th October 2025 to provide students with practical exposure to robotics and embedded systems. The session featured Mr. Rajeev Sahaya, an expert in IoT, robotics, and embedded technologies.

Students were introduced to the fundamentals of Arduino and embedded systems through interactive explanations and real-time demonstrations. Highlights included live demonstrations of a Line Follower Robot and a Gripper-based Pick-and-Place mechanism.

The workshop also included discussions on sensors, actuators, and controllers, followed by an interactive Q&A session. The event concluded with a vote of thanks, and e-certificates were awarded to all participants.`,
    image:
      "https://res.cloudinary.com/c2ne1cno/image/upload/v1790510363/ieee5.png",
    type: "WORKSHOP",
    location: "UMIT",
  },
  {
    id: 6,
    title: "HackX 2024-25",
    date: "Feb 22-23, 2025",
    time: "—",
    description:
      "Annual Hackathon HackX 2024-25 featuring student innovation and problem solving.",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1759501305/Screenshot_2025-10-03_195115_es91pf.png",
    type: "HACKATHON",
    location: "NMIMS Navi Mumbai",
  },
  {
    id: 7,
    title:
      "Industrial Visit - Udaipur, Jodhpur, Jaisalmer & Sam (Desert)",
    date: "Dec 28-29, 2024",
    time: "—",
    description:
      "An educational industrial visit combined with travel experiences in Udaipur, Jodhpur, Jaisalmer and Sam (Desert).",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1759510398/Screenshot_2025-10-03_222207_a2n07j.png",
    type: "INDUSTRIAL VISIT",
    location: "Udaipur, Jodhpur, Jaisalmer, Sam (Desert)",
  },
  {
    id: 8,
    title: "Gen AI with Pieces",
    date: "Nov 14, 2024",
    time: "—",
    description:
      "Introductory Workshop on Gen AI fundamentals using Pieces.",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1759501529/Screenshot_2025-10-03_195511_jp1emn.png",
    type: "WORKSHOP",
    location: "UMIT, Room No 405",
  },
  {
    id: 9,
    title: "IEEE Day 2024-25",
    date: "Oct 01, 2024",
    time: "—",
    description:
      "Celebrating IEEE Day with talks, networking, competition and innovation showcases.",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1759501663/Screenshot_2025-10-03_195732_bzay7h.png",
    type: "IEEE DAY",
    location: "UMIT, Conference Room",
  },
  {
    id: 10,
    title: "Murder Mystery (IEEE Day Pre Event)",
    date: "Sep 30, 2024",
    time: "—",
    description:
      "An interactive pre-event to IEEE Day, designed to challenge participants critical thinking and teamwork skills through an immersive murder mystery experience.",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1759502066/Screenshot_2025-10-03_200401_lxsux5.png",
    type: "IEEE DAY PRE EVENT",
    location: "UMIT, Conference Room",
  },
];

export default function PastEventsPage() {
  return (
    <div className="dark:text-white dark:bg-[hsl(222.2_47.4%_11.2%)]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center dark:text-gray-300 text-gray-700 mb-6">
          PAST ACTIVITIES
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {pastEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}
        </div>
      </div>
    </div>
  );
}