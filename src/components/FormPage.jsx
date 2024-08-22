import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Modal } from "./Modal";
import { InputField } from "./InputField";
import { Skills } from "./Skills";
import { Experience } from "./Experience";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    website: "",
    twitter: "",
    phone: "",
    instagram: "",
    email: "",
    linkedin: "",
    bio: "",
    skills: [{ label: "", experience: "" }],
    experiences: [{ company: "", startDate: "", endDate: "" }],
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = formData.skills.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    );
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = formData.experiences.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { label: "", experience: "" }],
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { company: "", startDate: "", endDate: "" },
      ],
    });
  };

  const removeSkill = (index) => {
    if (formData.skills.length > 1) {
      const updatedSkills = formData.skills.filter((_, i) => i !== index);
      setFormData({ ...formData, skills: updatedSkills });
    }
  };

  const removeExperience = (index) => {
    if (formData.experiences.length > 1) {
      const updatedExperiences = formData.experiences.filter(
        (_, i) => i !== index
      );
      setFormData({ ...formData, experiences: updatedExperiences });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setShowModal(true);
  };

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <Header />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <InputField
            id="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <InputField
            id="title"
            label="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <InputField
            id="website"
            label="Website"
            value={formData.website}
            onChange={handleInputChange}
          />
          <InputField
            id="twitter"
            label="Twitter (X)"
            value={formData.twitter}
            onChange={handleInputChange}
          />
          <InputField
            id="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <InputField
            id="instagram"
            label="Instagram"
            value={formData.instagram}
            onChange={handleInputChange}
          />
          <InputField
            id="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField
            id="linkedin"
            label="LinkedIn"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
          <div className="sm:col-span-2">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Short bio
            </label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Enter a Short Bio"
              className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>
        </div>

        <Skills
          skills={formData.skills}
          handleSkillChange={handleSkillChange}
          addSkill={addSkill}
          removeSkill={removeSkill}
        />
        <Experience
          experiences={formData.experiences}
          handleExperienceChange={handleExperienceChange}
          addExperience={addExperience}
          removeExperience={removeExperience}
        />
        {showModal && <Modal />}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default FormPage;
