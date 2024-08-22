import React, { useEffect, useState } from "react";
import { SkillGraph } from "./SkillsGraph";
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { ImInstagram } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import ExperienceChart from "./ExperienceChart";

const ResumeDisplayPage = () => {
  const [formData, setFormData] = useState(null);

  const getFormData = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };

  useEffect(() => {
    const data = getFormData();
    setFormData(data);
  }, []);

  if (!formData) {
    return <p>No data available to display.</p>;
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <header className="w-full lg:w-[90%] xl:w-[80%] mx-auto mt-3 flex flex-col sm:flex-row bg-gray-300">
        <img
          src="/resumeImg.png"
          alt="imageprofile"
          className="w-full sm:w-[250px] h-[250px] object-cover"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6">
          {[
            { icon: TbWorldWww, label: "Website", value: formData.website },
            { icon: FaTwitter, label: "Twitter", value: formData.twitter },
            { icon: FcPhoneAndroid, label: "Phone", value: formData.phone },
            {
              icon: ImInstagram,
              label: "Instagram",
              value: formData.instagram,
            },
            { icon: AiFillMail, label: "Email", value: formData.email },
            { icon: FaLinkedinIn, label: "LinkedIn", value: formData.linkedin },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <item.icon size={20} className="mt-1 flex-shrink-0" />
              <div>
                <h3 className="uppercase font-semibold text-sm sm:text-base">
                  {item.label}
                </h3>
                <a
                  href={
                    item.value === formData.email
                      ? `mailto:${formData.email}`
                      : item.value
                  }
                  target="_blank"
                  className="text-gray-400 text-xs sm:text-sm break-all"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </header>
      <section className="mt-6 w-full lg:w-[90%] xl:w-[80%] mx-auto flex flex-col sm:flex-row justify-between border-b pb-8">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2 text-gray-700">
            {formData.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
            {formData.title}
          </h2>
        </div>
        <p className="text-base max-w-[400px] sm:text-lg text-gray-600 font-medium">
          {formData.bio}
        </p>
      </section>
      <section className="w-full lg:w-[90%] xl:w-[80%] mx-auto mt-6 flex flex-col">
        <h2 className="font-semibold text-xl sm:text-2xl text-gray-800 mb-4">
          Skills
        </h2>
        <div className="w-full flex justify-center">
          <SkillGraph />
        </div>
      </section>
      <section className="w-full lg:w-[90%] xl:w-[80%] mx-auto mt-6 flex flex-col">
        <h2 className="font-semibold text-xl sm:text-2xl text-gray-800 mb-4">
          Experience
        </h2>
        <ExperienceChart />
      </section>
    </div>
  );
};

export default ResumeDisplayPage;
