import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const scImg =
"https://res.cloudinary.com/dunstvosl/image/upload/v1757869973/IMG-20250914-WA0011_1_pttydi.jpg"
// ================= (SC) =================
const members = [
  {
    name: "Sabrin Rowther",
    role: "Chairperson",
    email: "sabrin.umit@gmail.com",
    linkedin: "https://www.linkedin.com/in/sabrin-rowther-550496331",
    github: "https://github.com/sabrinshowkath",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790516546/IMG-20260919-WA0021.jpg"
  },
  {
    name: "Riya Sewatkar",
    role: "Co-Chairperson",
    email: "riya.umit.30@gmail.com",
    linkedin: "https://www.linkedin.com/in/riya-sewatkar-7a74b332a/",
    github: "https://github.com/riya1730",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790516667/IMG-20260919-WA0023.jpg"
  },
  {
    name: "Samruddhi Badjate",
    role: "Secretary",
    email: "samruddhiieeeumit@gmail.com",
    linkedin: "https://www.linkedin.com/in/samruddhi-badjate",
    github: "https://github.com/SamruddhiBadjate",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790516480/IMG-20260919-WA0030.jpg"
  },
  {
    name: "Tripti Sinha",
    role: "Treasurer",
    email: "triptisinha513@gmail.com",
    linkedin: "https://www.linkedin.com/in/tripti-sinha-50a21a339",
    img: "https://res.cloudinary.com/wg2rax47/image/upload/c_auto,g_north_west,h_1427,w_1098/IMG-20260919-WA0020.jpg"
  },
  {
    name: "Riya Koul",
    role: "External Affairs Director",
    email: "ieee.umit.riya@gmail.com",
    linkedin: "https://www.linkedin.com/in/riya-k-7757a9290",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790513286/WhatsApp_Image_2026-08-17_at_20.36.18_1.png"
  },
  {
    name: "Riddhi Shende",
    role: "Events & Planning Director",
    email: "shenderiddhi.c@gmail.com",
    linkedin: "https://www.linkedin.com/in/riddhi-shende-54089a32a",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790516834/IMG-20260904-WA0025.jpg"
  },
  {
    name: "Chanda Jha",
    role: "Events & Planning Director",
    email: "jhachanda9939@gmail.com",
    img: "https://res.cloudinary.com/wg2rax47/image/upload/c_crop,g_north_west,h_1427,w_1096,x_788,y_1748/f_auto/q_auto/IMG-20260927-WA0021_2.jpg"
  },
  {
    name: "Lavanya Suvarna",
    role: "Creative & Social Media Director",
    email: "lavanyasuvarna.ieeeumit@gmail.com",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790517000/IMG-20260919-WA0022.jpg"
  },
  {
    name: "Surabhi Sawant",
    role: "Creative & Social Media Director",
    email: "surabhisawant.ieeeumit@gmail.com",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790516351/IMG-20260919-WA0029.jpg"
  },
  {
    name: "Srushti Deshpande",
    role: "Sponsorship & Marketing Director",
    email: "srushtiumit28@gmail.com",
    linkedin: "https://www.linkedin.com/in/srushti-deshpande-34962332a",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790515819/image_25_1.png"
  },
  {
    name: "Riddhi Vartak",
    role: "Sponsorship & Marketing Director",
    email: "riddhivartak6@gmail.com",
    linkedin: "https://www.linkedin.com/in/riddhi-vartak-4355a7380",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790513599/IMG-20260904-WA0023.jpg"
  },
  {
    name: "Hritika Chavan",
    role: "Technology & Publicity Director",
    email: "hritika.umit@gmail.com",
    linkedin: "https://www.linkedin.com/in/hritika-chavan-68865932b",
    github: "https://github.com/Hritika7",
    img: "https://res.cloudinary.com/wg2rax47/image/upload/c_auto,g_north_west,h_1427,w_1096/f_auto/q_auto/WhatsApp_Image_2026-09-28_at_1.22.20_PM.jpg"
  },
  {
    name: "Riya Keswani",
    role: "Technology & Publicity Director",
    email: "riyakeswani473@gmail.com",
    linkedin: "https://www.linkedin.com/in/riya-keswani-0b8b66310",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790517114/IMG-20260919-WA0025.jpg"
  },
  {
    name: "Shreya Tripathi",
    role: "Public Relations Director",
    email: "tripathishreya0207@gmail.com",
    linkedin: "https://www.linkedin.com/in/shreya-tripathi-sndt/",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790513883/IMG-20260919-WA0009.jpg"
  },
  {
    name: "Prapti Chaware",
    role: "Editorial & Community Director",
    email: "praptichaware4@gmail.com",
    img: "https://res.cloudinary.com/ktpdbtpf/image/upload/v1790513833/IMG-20260919-WA0026.jpg"
  },
];

// ================= (JC) =================
const juniorCouncil = [
  { name: "Sumera Feroz", role: "Technical" },
  { name: "Tanushka Ahirrao", role: "Technical" },
  { name: "Anuja Pisal", role: "Technical" },

  { name: "Mayuri Sonwane", role: "Events & Planning" },
  { name: "Vaishavi Pitty", role: "Events & Planning" },
  { name: "Srushti Dangre", role: "Events & Planning" },
  { name: "Shreya Khairnar", role: "Events & Planning" },

  { name: "Kalpita Naik", role: "Social Media & Art and Culture" },
  { name: "Samiksha Nandanwar", role: "Social Media & Art and Culture" },
  { name: "Nirmiti Chiddarwar", role: "Social Media & Art and Culture" },
  { name: "Kashvi Semwal", role: "Social Media & Art and Culture" },

  { name: "Anushka Gole", role: "Sponsorships" },
  { name: "Harshada Dongare", role: "Sponsorships" },
  { name: "Shruti Bagadi", role: "Sponsorships" },
  { name: "Tanvi Hegde", role: "Sponsorships" },

  { name: "Pallavi Chavare", role: "Editorial" },
  { name: "Shranika Medewar", role: "Editorial" },

  { name: "Ananya Tare", role: "External Affairs" },
  { name: "Shrilekha Sarnaik", role: "External Affairs" },
  { name: "Priyakriti Jha", role: "External Affairs" },

  { name: "Minakshi Jha", role: "Public Relations" },
  { name: "Dnyaneshwari Bankar", role: "Public Relations" },
];

const faculty = {
  name: "Dr. Shikha Nema",
  role: "Professor, (HoD of ENC)",
  img: "https://res.cloudinary.com/dunstvosl/image/upload/v1759424067/WhatsApp_Image_2025-10-02_at_8.50.24_PM_jvby67.jpg",
  email: "#",
  linkedin:"https://www.linkedin.com/company/umit-ieee"
};

// hero section
const HeroSection = ({ title, subtitle, bgImage }) => (
  <section
    className="relative h-72 flex flex-col items-center justify-center bg-cover bg-center text-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="absolute inset-0 bg-blue-50 dark:bg-gray-800 bg-opacity-70 "></div>
    <h1 className="relative text-4xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-400 z-10">
      {title}
    </h1>
    <p className="relative text-lg text-black dark:text-white z-10 mt-2">
      {subtitle}
    </p>
  </section>
);

// section title
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400 text-center mb-8 border-b-4 border-cyan-600 dark:border-cyan-600 inline-block pb-2">
    {children}
  </h2>
);

export const MemberCard = ({ name, role, img , linkedin , email}) => (
  <div className="relative bg-white dark:bg-gray-800 border border-cyan-100 dark:border-none rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden group p-6 text-center">
    {img && (
      <img
        src={img}
        alt={name}
        className="w-60 h-60 mx-auto rounded-full object-cover"
      />
    )}

    {/* default name and role */}
    <div className="mt-6 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{role}</p>
    </div>

    {/* desktop hover */}
    <div
      className="absolute left-1/2 bottom-6 transform -translate-x-1/2 translate-y-10 opacity-0 
                    group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 
                    flex justify-center gap-4 hidden sm:flex"
    >
      <a
        href={`mailto:${email}`} target="_blank"
        className="text-cyan-600 dark:text-cyan-300 hover:scale-110 transition"
      >
        <EmailIcon />
      </a>
      <a
        href={linkedin} target="_blank"
        className="text-cyan-600 dark:text-cyan-300 hover:scale-110 transition"
      >
        <LinkedInIcon />
      </a>
      {/* <a
        href="#"
        className="text-cyan-600 dark:text-cyan-300 hover:scale-110 transition"
      >
        <GitHubIcon />
      </a> */}
    </div>

    {/* mobile touch */}
    <div className="mt-4 flex justify-center gap-4 sm:hidden">
      <a href={`mailto:${email}`} target="_blank" className="text-cyan-600 dark:text-cyan-300">
        <EmailIcon />
      </a>
      <a href={linkedin} target="_blank" className="text-cyan-600 dark:text-cyan-300">
        <LinkedInIcon />
      </a>
    </div>
  </div>
);

const JuniorCard = ({ name, role }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4 text-center">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      {name}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{role}</p>
  </div>
);

export function Council() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100">
      {/* hero sec */}
      <HeroSection
        title="Meet Our Team"
        subtitle="The driving force behind our success"
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1950&q=80"
      />

      {/* FA */}
      <section className="px-6 md:px-16 py-12 bg-gray-50 dark:bg-gray-900 text-center">
        <SectionTitle>Faculty Advisor</SectionTitle>
        <div className="max-w-sm mx-auto">
          <MemberCard {...faculty} />
          <blockquote className="italic text-lg mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            "IEEE UMIT strives to foster innovation, collaboration, and
            technical excellence among students, helping them grow as future
            leaders."
          </blockquote>
        </div>
      </section>

      {/* SC*/}
      <section className="px-6 md:px-16 py-12 bg-gray-50  dark:bg-gray-900 text-center">
        <SectionTitle>Senior Council</SectionTitle>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          The leadership team guiding the IEEE Student Chapter
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>
      </section>

      {/* JC */}
      <section className="px-6 md:px-16 py-12 bg-gray-50  dark:bg-gray-900 text-center">
        <SectionTitle>Junior Council</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {juniorCouncil.map((m, i) => (
            <JuniorCard key={i} {...m} />
          ))}
        </div>
      </section>
    </div>
  );
}