"use client"
export const Inputs = ({label,name,type}) => {
  return (
    <div className="mb-6">
    <label className="block mb-2 font-extrabold text-gray-50" htmlFor={name}>
    {label}
    </label>
    <input
      className="inline-block rounded-2xl
       w-[100%] p-4 leading-6  text-lg font-extrabold placeholder-gray-200 text-white bg-gray-800 shadow shadow-amber-50 border-2 "
      type={type}
      placeholder={label}
      name={name}
    />
  </div>
  )
}
