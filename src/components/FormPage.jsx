import React, { useState, useEffect } from "react";
import Header from "./Header";

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
    // Retrieve data from local storage if it exists
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

const InputField = ({ id, label, value, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={`Your ${label}`}
      className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const Modal = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Resume Saved</h2>
      <a
        href="/resume"
        className="block w-full py-2 px-4 bg-green-500 text-white rounded-md text-center hover:bg-green-600 transition duration-300"
      >
        View Resume
      </a>
    </div>
  </div>
);

const Skills = ({ skills, handleSkillChange, addSkill, removeSkill }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold mb-4">Skills</h2>
    {skills.map((skill, index) => (
      <div
        key={index}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 items-end"
      >
        <InputField
          id={`skill-label-${index}`}
          label="Skill Label"
          value={skill.label}
          onChange={(e) => handleSkillChange(index, e)}
        />
        <InputField
          id={`skill-experience-${index}`}
          label="Skill Experience (years)"
          value={skill.experience}
          onChange={(e) => handleSkillChange(index, e)}
        />
        <button
          type="button"
          onClick={() => removeSkill(index)}
          disabled={skills.length === 1}
          className={`p-2 text-white rounded-md ${
            skills.length === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Remove
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={addSkill}
      className="mt-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
    >
      Add Skill
    </button>
  </section>
);

const Experience = ({
  experiences,
  handleExperienceChange,
  addExperience,
  removeExperience,
}) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold mb-4">Experience</h2>
    {experiences.map((experience, index) => (
      <div
        key={index}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 items-end"
      >
        <InputField
          id={`experience-company-${index}`}
          label="Company Name"
          value={experience.company}
          onChange={(e) => handleExperienceChange(index, e)}
        />
        <div>
          <label
            htmlFor={`experience-startDate-${index}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Start Date
          </label>
          <input
            type="month"
            id={`experience-startDate-${index}`}
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleExperienceChange(index, e)}
            className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor={`experience-endDate-${index}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            End Date
          </label>
          <input
            type="month"
            id={`experience-endDate-${index}`}
            name="endDate"
            value={experience.endDate}
            onChange={(e) => handleExperienceChange(index, e)}
            className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={() => removeExperience(index)}
          disabled={experiences.length === 1}
          className={`p-2 text-white rounded-md ${
            experiences.length === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Remove
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={addExperience}
      className="mt-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
    >
      Add Experience
    </button>
  </section>
);

export default FormPage;
