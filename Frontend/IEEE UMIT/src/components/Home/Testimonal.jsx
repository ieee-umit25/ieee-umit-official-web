function TestimonialCard({ text, name, role, image }) {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition duration-300">
      <p className="text-gray-700 dark:text-gray-300  text-medium leading-relaxed mb-6">"{text}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-300">{name}</h4>
          <p className="text-cyan-600 text-sm font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      text: "Being the Chairperson has been an incredible journey of growth and responsibility. Leading initiatives, supporting the team, and turning ideas into meaningful experiences has helped me develop my leadership and decision-making skills.",
      name: "Ms. Shalvi Yeole",
      role: "Chairperson",
      image: "https://res.cloudinary.com/aoglrtot/image/upload/v1790842520/Screenshot_1-10-2026_134259_www.instagram.com.jpg",
    },
    {
      text: "Being the Co-Chairperson has given me the opportunity to collaborate with an amazing team, coordinate events, and bring new ideas to life. My IEEE journey has strengthened my communication, teamwork, and organizational skills.",
      name: "Ms. Srushti Desai",
      role: "Co-Chairperson",
      image: "https://res.cloudinary.com/aoglrtot/image/upload/v1790842528/Screenshot_1-10-2026_134319_www.instagram.com.jpg",
    },
    {
  text: "Serving as the Secretary has helped me become more organized, responsible, and confident in communication. IEEE has given me the opportunity to coordinate with members, manage important tasks, and contribute to the success of our team.",
  name: "Ms. Vaishnavi Balodhi",
  role: "Secretary",
  image: "https://res.cloudinary.com/aoglrtot/image/upload/v1790842535/Screenshot_1-10-2026_134329_www.instagram.com.jpg",
}
,
    {
      text: "Being the Treasurer has taught me the importance of accountability, planning, and attention to detail. My IEEE journey has strengthened my management and teamwork skills while giving me valuable experience in handling responsibilities.",
      name: "Ms. Gayatri Naik",
      role: "Treasurer",
      image: "https://res.cloudinary.com/aoglrtot/image/upload/v1790842545/Screenshot_1-10-2026_134342_www.instagram.com.jpg",
    },
  ];

  return (
    <section className="py-16 bg-inherit">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Members Say</h2>
        <p className="text-gray-600 dark:text-white mb-12">
          Hear from our members about their IEEE journey and leadership roles
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              text={t.text}
              name={t.name}
              role={t.role}
              image={t.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}