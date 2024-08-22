// import React, { useState, useEffect } from "react";
// import Header from "./Header";

// const FormPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     website: "",
//     twitter: "",
//     phone: "",
//     instagram: "",
//     email: "",
//     linkedin: "",
//     bio: "",
//     skills: [{ label: "", experience: "" }],
//     experiences: [{ company: "", startDate: "", endDate: "" }],
//   });

//   useEffect(() => {
//     // Retrieve data from local storage if it exists
//     const storedData = localStorage.getItem("formData");
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSkillChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedSkills = formData.skills.map((skill, i) =>
//       i === index ? { ...skill, [name]: value } : skill
//     );
//     setFormData({ ...formData, skills: updatedSkills });
//   };

//   const handleExperienceChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedExperiences = formData.experiences.map((experience, i) =>
//       i === index ? { ...experience, [name]: value } : experience
//     );
//     setFormData({ ...formData, experiences: updatedExperiences });
//   };

//   const addSkill = () => {
//     setFormData({
//       ...formData,
//       skills: [...formData.skills, { label: "", experience: "" }],
//     });
//   };

//   const addExperience = () => {
//     setFormData({
//       ...formData,
//       experiences: [
//         ...formData.experiences,
//         { company: "", startDate: "", endDate: "" },
//       ],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save the form data to local storage
//     localStorage.setItem("formData", JSON.stringify(formData));
//   };

//   return (
//     <main className="flex flex-col w-full justify-center items-center">
//       <Header />

//       <form onSubmit={handleSubmit} className="w-[80%]">
//         <div className="grid grid-cols-2 gap-y-4 w-full gap-x-5">
//           <div className=" flex flex-col">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Name"
//               className=" border rounded-md p-2"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               id="title"
//               placeholder="Your Name"
//               className=" border rounded-md p-2"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <label htmlFor="name">Website</label>
//             <input
//               type="text"
//               id="Website"
//               placeholder="Your Website"
//               className=" border rounded-md p-2"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <label htmlFor="Twitter">Twitter (X)</label>
//             <input
//               type="text"
//               id="Twitter"
//               placeholder="Your Twitter"
//               className=" border rounded-md p-2"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <label htmlFor="phone">Phone</label>
//             <input
//               type="text"
//               id="phone"
//               placeholder="Your phone"
//               className=" border rounded-md p-2"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <label htmlFor="instagram">Instagram</label>
//             <input
//               type="text"
//               id="instagram"
//               placeholder="Your "
//               className=" border rounded-md p-2"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               id="email"
//               placeholder="Your Email"
//               className=" border rounded-md p-2"
//             />
//           </div>

//           <div className=" flex flex-col">
//             <label htmlFor="linkedin">Linkedin</label>
//             <input
//               type="text"
//               id="linkedin"
//               placeholder="Your Linkedin"
//               className=" border rounded-md p-2"
//             />
//           </div>
//           <div className=" flex flex-col">
//             <label htmlFor="bio">Short bio</label>
//             <textarea
//               type="text"
//               id="bio"
//               placeholder="Enter a Short Bio"
//               className=" border rounded-md p-2"
//             />
//           </div>
//         </div>

//         {/* <div className=" w-full flex flex-row"> */}
//         <Skills
//           skills={formData.skills}
//           handleSkillChange={handleSkillChange}
//           addSkill={addSkill}
//         />
//         <Experience
//           experiences={formData.experiences}
//           handleExperienceChange={handleExperienceChange}
//           addExperience={addExperience}
//         />
//         {/* </div> */}

//         <button
//           type="submit"
//           className="mt-5 p-2 bg-blue-500 text-white rounded-md"
//         >
//           Save
//         </button>
//       </form>
//     </main>
//   );
// };

// const Skills = ({ skills, handleSkillChange, addSkill }) => (
//   <section className="mt-10 mb-10 w-[100%]">
//     <h2 className="text-xl font-bold">Skills</h2>
//     {skills.map((skill, index) => (
//       <div key={index} className="grid grid-cols-3 gap-y-4 gap-x-5 w-[80%]">
//         <div className="flex flex-col">
//           <label htmlFor={`skill-label-${index}`}>Skill Label</label>
//           <input
//             type="text"
//             id={`skill-label-${index}`}
//             name="label"
//             value={skill.label}
//             onChange={(e) => handleSkillChange(index, e)}
//             placeholder="Skill"
//             className="border rounded-md p-2"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor={`skill-experience-${index}`}>
//             Skill Experience (years)
//           </label>
//           <input
//             type="text"
//             id={`skill-experience-${index}`}
//             name="experience"
//             value={skill.experience}
//             onChange={(e) => handleSkillChange(index, e)}
//             placeholder="Experience"
//             className="border rounded-md p-2"
//           />
//         </div>
//       </div>
//     ))}
//     <button
//       type="button"
//       onClick={addSkill}
//       className="mt-3 p-2 bg-green-500 text-white rounded-md"
//     >
//       Add Skill
//     </button>
//   </section>
// );

// const Experience = ({ experiences, handleExperienceChange, addExperience }) => (
//   <section className="mt-10 mb-10 w-full">
//     <h2 className="text-xl font-bold">Experience</h2>
//     {experiences.map((experience, index) => (
//       <div key={index} className="grid grid-cols-3 gap-y-4 gap-x-5 w-[80%]">
//         <div className="flex flex-col">
//           <label htmlFor={`experience-company-${index}`}>Company Name</label>
//           <input
//             type="text"
//             id={`experience-company-${index}`}
//             name="company"
//             value={experience.company}
//             onChange={(e) => handleExperienceChange(index, e)}
//             placeholder="Company Name"
//             className="border rounded-md p-2"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor={`experience-startDate-${index}`}>Start Date</label>
//           <input
//             type="date"
//             id={`experience-startDate-${index}`}
//             name="startDate"
//             value={experience.startDate}
//             onChange={(e) => handleExperienceChange(index, e)}
//             placeholder="Start Date"
//             className="border rounded-md p-2"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor={`experience-endDate-${index}`}>End Date</label>
//           <input
//             type="date"
//             id={`experience-endDate-${index}`}
//             name="endDate"
//             value={experience.endDate}
//             onChange={(e) => handleExperienceChange(index, e)}
//             placeholder="End Date"
//             className="border rounded-md p-2"
//           />
//         </div>
//       </div>
//     ))}
//     <button
//       type="button"
//       onClick={addExperience}
//       className="mt-3 p-2 bg-green-500 text-white rounded-md"
//     >
//       Add Experience
//     </button>
//   </section>
// );

// export default FormPage;

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

      <form onSubmit={handleSubmit} className="w-[80%]">
        <div className="grid grid-cols-2 gap-y-4 w-full gap-x-5">
          <div className=" flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={handleInputChange}
              value={formData.name}
              placeholder="Your Name"
              className=" border rounded-md p-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={handleInputChange}
              value={formData.title}
              placeholder="Your Name"
              className=" border rounded-md p-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              onChange={handleInputChange}
              value={formData.website}
              id="website"
              placeholder="Your Website"
              className=" border rounded-md p-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="twitter">Twitter (X)</label>
            <input
              type="text"
              id="twitter"
              onChange={handleInputChange}
              value={formData.twitter}
              placeholder="Your Twitter"
              className=" border rounded-md p-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              onChange={handleInputChange}
              value={formData.phone}
              placeholder="Your phone"
              className=" border rounded-md p-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              id="instagram"
              onChange={handleInputChange}
              value={formData.instagram}
              placeholder="Your "
              className=" border rounded-md p-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={handleInputChange}
              value={formData.email}
              id="email"
              placeholder="Your Email"
              className=" border rounded-md p-2"
            />
          </div>

          <div className=" flex flex-col">
            <label htmlFor="linkedin">Linkedin</label>
            <input
              type="text"
              id="linkedin"
              onChange={handleInputChange}
              value={formData.linkedin}
              placeholder="Your Linkedin"
              className=" border rounded-md p-2"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="bio">Short bio</label>
            <textarea
              type="text"
              onChange={handleInputChange}
              value={formData.bio}
              id="bio"
              placeholder="Enter a Short Bio"
              className=" border rounded-md p-2"
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
        <div className=" flex w-full justify-center items-center">
          <button
            type="submit"
            className="mt-5 p-2 mx-auto w-[300px] bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

const Modal = () => {
  return (
    <div className="w-full h-screen top-0 left-0 mx-auto my-auto fixed bg-opacity-50 backdrop-filter backdrop-blur-sm bg-transparent flex justify-center items-center">
      <div className="p-5 text-center bg-red-100 rounded-md shadow-md h-[300px] flex flex-col justify-center w-[300px] gap-4">
        <h2 className="text-2xl font-bold ">Resume Saved</h2>
        <a
          href="/resume"
          className="mt-5 p-2 mx-auto w-[full] shadow-2xl bg-green-500 text-white rounded-md"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

const Skills = ({ skills, handleSkillChange, addSkill, removeSkill }) => (
  <section className="mt-10 mb-10 w-[100%]">
    <h2 className="text-xl font-bold">Skills</h2>

    {skills.map((skill, index) => (
      <div
        key={index}
        className="grid grid-cols-3 mt-4 gap-y-4 gap-x-5 w-full items-center"
      >
        <div className="flex flex-col">
          <label htmlFor={`skill-label-${index}`}>Skill Label</label>
          <input
            type="text"
            id={`skill-label-${index}`}
            name="label"
            value={skill.label}
            onChange={(e) => handleSkillChange(index, e)}
            placeholder="Skill"
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`skill-experience-${index}`}>
            Skill Experience (years)
          </label>
          <input
            type="number"
            id={`skill-experience-${index}`}
            name="experience"
            value={skill.experience}
            onChange={(e) => handleSkillChange(index, e)}
            placeholder="Experience"
            className="border rounded-md p-2"
          />
        </div>
        <button
          type="button"
          onClick={() => removeSkill(index)}
          disabled={skills.length === 1}
          className={`p-2 w-fit text-white rounded-md ${
            skills.length === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500"
          }`}
        >
          Remove
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={addSkill}
      className="mt-3 p-2 bg-green-500 text-white rounded-md"
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
  <section className="mt-10 mb-10 w-full">
    <h2 className="text-xl font-bold">Experience</h2>
    {experiences.map((experience, index) => (
      <div
        key={index}
        className="grid grid-cols-4 gap-y-4 gap-x-5 w-[80%] items-center"
      >
        <div className="flex flex-col">
          <label htmlFor={`experience-company-${index}`}>Company Name</label>
          <input
            type="text"
            id={`experience-company-${index}`}
            name="company"
            value={experience.company}
            onChange={(e) => handleExperienceChange(index, e)}
            placeholder="Company Name"
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`experience-startDate-${index}`}>Start Date</label>
          <input
            type="month"
            id={`experience-startDate-${index}`}
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleExperienceChange(index, e)}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`experience-endDate-${index}`}>End Date</label>
          <input
            type="month"
            id={`experience-endDate-${index}`}
            name="endDate"
            value={experience.endDate}
            onChange={(e) => handleExperienceChange(index, e)}
            className="border rounded-md p-2"
          />
        </div>
        <button
          type="button"
          onClick={() => removeExperience(index)}
          disabled={experiences.length === 1}
          className={`p-2 w-fit text-white rounded-md ${
            experiences.length === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500"
          }`}
        >
          remove
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={addExperience}
      className="mt-3 p-2 bg-green-500 text-white rounded-md"
    >
      Add Experience
    </button>
  </section>
);

export default FormPage;
