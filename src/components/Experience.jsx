import { InputField } from "./InputField";

export const Experience = ({
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
          name="company"
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
