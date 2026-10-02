import AboutSection from "../components/Home/about";
import HeroSlider from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonal";
import WhatWeProvide from "../components/Home/WhatWeProvide";
import EventsPage from "../pages/currentEventPage";

export function Home() {
  const items = [
    {
      title: "IEEE UMIT",
      logo: "https://res.cloudinary.com/ddhhqsm5p/image/upload/v1755942991/WhatsApp_Image_2025-08-23_at_15.26.28_1e52e8a0_sfj4qt.jpg",
      description:
        "The IEEE Student Branch at UMIT engages students with technical events, projects, and leadership opportunities. It builds a vibrant community of engineers passionate about innovation and collaboration.",
    },
    {
      title: "IEEE International",
      logo: "https://res.cloudinary.com/ddhhqsm5p/image/upload/v1755943201/download_qe3dsl.png",
      description:
        "IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. It connects engineers, researchers, and innovators across the globe.",
    },
    {
      title: "UMIT Women's University",
      logo: "https://res.cloudinary.com/ddhhqsm5p/image/upload/v1755943306/download_migt8a.png",
      description:
        "UMIT Women’s University fosters excellence in engineering and technology education. With a focus on empowering women, it provides students with opportunities to lead, innovate, and excel in diverse technical fields.",
    },
  ];
  return (
    <div className="bg-gray-50 dark:bg-[hsl(222.2_47.4%_11.2%)] text-black dark:text-white">
      <HeroSlider />
      <AboutSection items={items} />
      <WhatWeProvide />
      <EventsPage/>
      <Testimonials />
    </div>
  );
}