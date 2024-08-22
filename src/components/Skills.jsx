import { InputField } from "./InputField";

export const Skills = ({
  skills,
  handleSkillChange,
  addSkill,
  removeSkill,
}) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold mb-4">Skills</h2>
    {skills.map((skill, index) => (
      <div
        key={index}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 items-end"
      >
        <InputField
          id={`skill-label-${index}`}
          name="label"
          label="Skill Label"
          value={skill.label}
          onChange={(e) => handleSkillChange(index, e)}
        />
        <div>
          <label
            htmlFor={`skill-experience-${index}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Skill Experience (years)
          </label>

          <input
            className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            id={`skill-experience-${index}`}
            name="experience"
            type="number"
            value={skill.experience}
            onChange={(e) => handleSkillChange(index, e)}
          />
        </div>
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
