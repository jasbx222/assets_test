import React from "react";

export const InputText = ({ label, name, required=false }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        name={name}
        required={required}
        className="w-full border border-blue-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#fff]"
      />
    </div>
  );
};

export const Select = ({ label, name, options }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        name={name}
        className="w-full border border-blue-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#fff]"
      >
        <option value="">-- اختر --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
