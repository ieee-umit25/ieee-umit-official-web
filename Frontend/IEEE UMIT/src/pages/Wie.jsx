import { useState } from "react";
import { MemberCard } from "../pages/Council";
import WieLogo from "../assets/wie-logo.png"

// Reusable card for events
function EventCard({ title, description, date, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-80 mb-3">{description}</p>
        <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
          {date}
        </span>
      </div>
    </div>
  );
}

export function Wie() {
  const members = [
     {
    name: "Disha Vartak",
    role: "Wie Chairperson",
    email: "dishadvartak@gmail.com",
    linkedin: "https://www.linkedin.com/in/disha-vartak-901303289",
    img : "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790833179/disha_vartak.png"
  },
  {
    name:"Riya  Dwivedi",
    role: "WIE Secretary",
    email: "dwivedi.riya753@gmail.com",
    linkedin: "https://www.linkedin.com/in/riya-dwivedi-1b6a2737a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    img:"https://res.cloudinary.com/ktpdbtpf/image/upload/v1790833292/Riya_Dwivedi-_Secretary.jpg"

  },
  {
    name: "Deeksha Shetty ",
    role: "WIE Creative Head",
    email: "dwivedi.riya753@gmail.com",
    linked:"https://www.linkedin.com/in/deeksha-shetty-00a56527",
    img:"https://res.cloudinary.com/ktpdbtpf/image/upload/v1790833456/Deeksha_Shetty-_Creative_head.jpg"

  },
  ];

  const events = [
    {
      title: "Women in Tech Symposium",
      description: "A gathering of leading voices in technology to empower women in STEM.",
      date: "March 2023",
      image: "https://source.unsplash.com/600x400/?conference,tech",
    },
    {
      title: "Coding Hackathon",
      description: "An exciting 24-hour hackathon for innovative problem solving.",
      date: "July 2023",
      image: "https://source.unsplash.com/600x400/?hackathon,code",
    },
    {
      title: "Leadership Workshop",
      description: "A workshop on leadership and career growth in engineering fields.",
      date: "September 2023",
      image: "https://source.unsplash.com/600x400/?leadership,team",
    },
  ];

  return (
    <main className="bg-gray-50 dark:bg-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-12 md:py-16 flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-purple-900 dark:text-purple-400">
            Women in Engineering
          </h1>
          <p className="text-lg opacity-80 text-purple-500 mb-4 leading-relaxed">
            IEEE-UMIT's WIE
          </p>
          <p className="text-base sm:text-lg md:text-lg opacity-80 leading-relaxed">
            Empowering women engineers to innovate and lead in STEM fields through professional 
            development and community building. We strive to create inclusive opportunities, foster mentorship, and inspire the next generation of leaders in technology and engineering.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="hidden md:flex justify-center md:justify-end mt-6 md:mt-0">
  <img
    src={WieLogo}
    alt="WIE Banner"
    className="rounded-2xl object-contain max-w-[300px] sm:max-w-[400px] md:max-w-[450px] h-auto"
  />
</div>


        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 md:px-16 pb-12 text-center">
        <p className="max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          WIE CORE TEAM
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>
      </section>

      {/* Mission / About Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">WIE's Mission</h2>
        <p className="text-base sm:text-lg md:text-lg opacity-80 leading-relaxed px-2 sm:px-0">
          We aim to provide a global network that facilitates the recruitment
          and retention of women in technical disciplines. By hosting impactful
          events, mentorship programs, and community outreach activities, IEEE
          WIE strives to create an inclusive environment that empowers future
          leaders in technology.
        </p>
      </section>

    </main>
  );
}