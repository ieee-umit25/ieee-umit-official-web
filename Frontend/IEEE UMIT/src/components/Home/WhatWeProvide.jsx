import React, { useState } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { cyan } from "@mui/material/colors";

// flip card component
function FlipCard({ title, Icon, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1000px] w-72 h-80 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] 
        ${flipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
      >
        {/* front-side */}
        <div className="absolute dark:border dark:border-gray-700 inset-0 flex flex-col items-center justify-center bg-inherit  rounded-xl shadow-lg p-6 [backface-visibility:hidden]">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-cyan-100 mb-4">
            <Icon sx={{ fontSize: 60, color: cyan[500] }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-inherit ">{title}</h3>
        </div>

        {/* back-side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl shadow-xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-lg leading-relaxed text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeProvide() {
  const services = [
    {
      title: "Technical Resources",
      Icon: ManageSearchIcon,
      description:
        "Access to cutting-edge IEEE publications, journals, and tools to help students and professionals stay ahead in technology.",
    },
    {
      title: "Networking Opportunities",
      Icon: GroupsIcon,
      description:
        "Connect with global IEEE members, professionals, and industry experts to expand your knowledge and career prospects.",
    },
    {
      title: "Skill Development",
      Icon: SchoolIcon,
      description:
        "Workshops, seminars, and competitions that nurture technical, leadership, and professional skills for future engineers.",
    },
    {
      title: "Recognition & Certification",
      Icon: WorkspacePremiumIcon,
      description:
        "Earn certifications and recognition for your contributions, projects, and participation in IEEE activities and events.",
    },
  ];

  return (
    <section className="py-16 bg-inherit dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
          {services.map((service, idx) => (
            <FlipCard
              key={idx}
              title={service.title}
              Icon={service.Icon}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
