import React, { useEffect, useState } from "react";
import { SkillGraph } from "./SkillsGraph";
import { TbWorldWww } from "react-icons/tb";
import { FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

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
    <div className="w-full">
      <header className=" w-[70%] h-[250px] mx-auto mt-3 flex flex-row bg-gray-300">
        <img
          src="/resumeImg.png"
          alt="imageprofile"
          className="w-[250px] h-[250px]"
        />
        <div className=" grid grid-cols-2 gap-x-10 px-12 py-4">
          {/* <div className=" flex flex-col items-start"> */}
          <div className=" flex flex-row gap-x-2 items-start justify-start p-2">
            <TbWorldWww size={20} className="mt-1" />
            <div>
              <h3 className=" uppercase font-semibold text-lg">website</h3>
              <a
                href={formData.website}
                target="_blank"
                className=" text-gray-400"
                rel="noopener noreferrer"
              >
                {formData.website}
              </a>
            </div>
          </div>
          <div className=" flex flex-row gap-x-2 items-start justify-start p-2">
            <FaTwitter size={20} className="mt-1" />
            <div>
              <h3 className=" uppercase font-semibold text-lg">Twitter</h3>
              <a
                href={formData.twitter}
                target="_blank"
                className=" text-gray-400"
                rel="noopener noreferrer"
              >
                {formData.twitter}
              </a>
            </div>
          </div>
          <div className=" flex flex-row gap-x-2 items-start justify-start p-2">
            <FcPhoneAndroid size={20} className="mt-1" />
            <div>
              <h3 className=" uppercase font-semibold text-lg">Phone</h3>
              <a
                href={formData.phone}
                target="_blank"
                className=" text-gray-400"
                rel="noopener noreferrer"
              >
                {formData.phone}
              </a>
            </div>
          </div>
          <div className=" flex flex-row gap-x-2 items-start justify-start p-2">
            <ImInstagram size={20} className="mt-1" />
            <div>
              <h3 className=" uppercase font-semibold text-lg">Instagram</h3>
              <a
                href={formData.instagram}
                target="_blank"
                className=" text-gray-400"
                rel="noopener noreferrer"
              >
                {formData.instagram}
              </a>
            </div>
          </div>
          <div className=" flex flex-row gap-x-2 items-start justify-start p-2">
            <AiFillMail size={20} className="mt-1" />
            <div>
              <h3 className=" uppercase font-semibold text-lg">Email</h3>
              <a
                href={`mailto:${formData.email}`}
                target="_blank"
                className=" text-gray-400"
                rel="noopener noreferrer"
              >
                {formData.email}
              </a>
            </div>
          </div>

          <div className=" flex flex-row gap-x-2 items-start justify-start p-2">
            <FaLinkedinIn size={20} className="mt-1" />
            <div>
              <h3 className=" uppercase font-semibold text-lg">Linkedin</h3>
              <a
                href={formData.linkedin}
                target="_blank"
                className=" text-gray-400"
                rel="noopener noreferrer"
              >
                {formData.linkedin}
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </header>
      <section className=" mt-3 w-[70%] justify-between mx-auto flex flex-row border-b pb-8">
        <div>
          <h1 className=" text-6xl font-bold leading-[50px] mb-4 text-gray-700">
            {formData.name}
          </h1>
          <h1 className=" text-4xl font-semibold text-gray-700">
            {formData.title}
          </h1>
        </div>
        <p className=" text-lg text-gray-600 font-medium">{formData.bio}</p>
      </section>
      <section className=" w-[70%] mx-auto mt-5 flex flex-col">
        <h1 className=" font-semibold text-2xl text-gray-800">Skills</h1>
        <div className=" justify-center items-center flex flex-col">
          <SkillGraph />
        </div>
      </section>
    </div>
  );
};

export default ResumeDisplayPage;
