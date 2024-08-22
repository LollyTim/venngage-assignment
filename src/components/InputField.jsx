export const InputField = ({ id, name, label, value, onChange }) => (
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
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Your ${label}`}
      className="w-full border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);
