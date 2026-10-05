import { MemberCard } from "../pages/Council";

const scImg =
  "https://res.cloudinary.com/ddhhqsm5p/image/upload/c_fill,w_1300,h_700,g_west,/v1756571844/WhatsApp_Image_2025-08-30_at_22.07.02_ee0c59ec_avlffx.jpg";

export function Developer() {
  const members = [
    {
      name: "Hritika Chavan",
      role: "Technology & Publicity Director 26-27",
      email: "hritika.umit@gmail.com",
      linkedin: "https://www.linkedin.com/in/hritika-chavan-68865932b",
      img: "https://res.cloudinary.com/wg2rax47/image/upload/c_auto,g_north_west,h_1427,w_1096/f_auto/q_auto/WhatsApp_Image_2026-09-28_at_1.22.20_PM.jpg",
    },
    {
      name: "Riya Keswani",
      role: "Technology & Publicity Director 26-27",
      img: "https://res.cloudinary.com/c2ne1cno/image/upload/v1790744186/IMG-20260919-WA0025_2.jpg",
      email: "riyakeswani473@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/riya-keswani-0b8b66310?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Humaira Samani",
      role: "Technology and Publicity Director 25-26",
      email: "humairaworkc@gmail.com",
      linkedin: "https://www.linkedin.com/in/samani-humaira/",
      github: "https://github.com/Samani-Humaira/",
      img: "https://res.cloudinary.com/dunstvosl/image/upload/v1759509526/Humaira_ulcxsr.png",
    },
    {
      name: "Rakshanda Arwari",
      role: "Technology and Publicity Director 25-26",
      email: "rakshandaarwari659@gmail.com",
      linkedin: "https://www.linkedin.com/in/rakshanda-arwari-712366301",
      img: "https://res.cloudinary.com/dunstvosl/image/upload/v1759572653/IMG_20250830_004257_297_gsayfd.webp",
    },
  ];

  return (
    <>
      <section className="px-6 md:px-16 py-12 bg-gray-50 dark:bg-gray-900 text-center">
        <p className="max-w-4xl mx-auto text-4xl font-semibold leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          MINDS BEHIND THE CODE
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>
      </section>
    </>
  );
}