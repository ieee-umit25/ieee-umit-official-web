import CurrentEventCard from "../components/Home/currentEvent";

const events = [
  {
    id: 1,
    title: "IEEE DAY",
    year: "2025-26",
    time: "12:30 PM - 1:30 PM",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900182/WhatsApp_Image_2026-03-07_at_9.36.45_PM_2_nddcqq.jpg",

    overview: `IEEE Day 2025 was celebrated at UMIT, SNDT on 6th and 7th October, bringing together students to celebrate innovation, collaboration, and technology. The event featured an insightful session by Dr. Satyanarayana Bheesette, introducing IEEE sections and the opportunities it offers to students worldwide. 

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
  {
    id: 2,
    title: "Mechatron Robotics",
    year: "2025-26",
    time: "1:00 PM - 3:30 PM",
    image:
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900037/Screenshot_2026-03-07_214136_enk1dr.png",

    overview: `The IEEE UMIT Student Branch, in collaboration with Mechatron Robotics, organized a Robotics Workshop on 14th October 2025 to provide students with practical exposure to robotics and embedded systems. The session featured Mr. Rajeev Sahaya, an expert in IoT, robotics, and embedded technologies.

Students were introduced to the fundamentals of Arduino and embedded systems through interactive explanations and real-time demonstrations. Highlights included live demonstrations of a Line Follower Robot and a Gripper-based Pick-and-Place mechanism.

The workshop also included discussions on sensors, actuators, and controllers, followed by an interactive Q&A session. The event concluded with a vote of thanks, and e-certificates were awarded to all participants.`,
    gallery: [
      // "https://res.cloudinary.com/dunstvosl/image/upload/v1772900046/Screenshot_2026-03-07_214057_i0npvy.png",
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900057/Screenshot_2026-03-07_213951_si8ftg.png",
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900037/Screenshot_2026-03-07_214136_enk1dr.png",
      "https://res.cloudinary.com/dunstvosl/image/upload/v1772900041/Screenshot_2026-03-07_214117_amiefk.png"
    ],
  }
];

const EventsPage = () => {
  return (
    <div className="p-10 grid md:grid-cols-2 gap-6">
      {events.map((event) => (
        <CurrentEventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsPage;
