import React from "react";

export const Input = ({ type, name, label }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
      />
    </div>
  );
};


export const Select = ({ name, label, options }) => {
    return (
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <select
            name={name}
            className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
            {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
        </select>
        </div>
    );
}