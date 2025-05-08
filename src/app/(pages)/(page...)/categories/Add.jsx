"use client";
import { EyeClosedIcon, Plus, EyeIcon } from "lucide-react";

const Add = ({ hideOrShowTable, isTableVisible }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="اسم الفئة الجديدة"
        className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />

      {/* زر الإضافة - لون أخضر */}
      <button className="bg-green-800 flex justify-center items-center gap-2 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition">
        <Plus className="text-white" />
        <span>إضافة</span>
      </button>

      {/* زر إظهار/إخفاء الجدول */}
      <button
        onClick={hideOrShowTable}
        className={`flex justify-center items-center gap-2 text-white px-5 py-3 rounded-lg transition
          ${isTableVisible
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-blue-500 hover:bg-blue-700"
          }`}
      >
        {isTableVisible ? (
          <EyeClosedIcon size={24} className="text-gray-200" />
        ) : (
          <EyeIcon size={24} className="text-gray-900" />
        )}
        <span className={`
          ${isTableVisible ? "text-gray-200" : "text-gray-900"}
          `}>{isTableVisible ? "إخفاء الجدول" : "إظهار الجدول"}</span>
      </button>
    </div>
  );
};

export default Add;
