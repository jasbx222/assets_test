"use client";
import FunAreaChart from "@/app/components/charts/Charts";
import { Table } from "../(page...)/inventories/Components";

export default function Page() {
  const stats = [
    { label: "عدد الأصول", value: 245, color: "bg-[#0177FB]" },
    { label: " عدد الأصول المجرودة", value: 38, color: "bg-[#41BC4C]" },
    { label: "عدد الأصول التالفة ", value: 94, color: "bg-[#F83A26]" },
    
  ];


  return (
    <div dir="rtl" className="p-6  h-screen  rounded  container ">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl home shadow-md shadow-amber-50 p-6 text-gray-200 flex flex-col justify-center items-center ${item.color}  `}
          >
            <div className="text-2xl">{item.label}</div>
            <div className="text-3xl font-bold mt-2">{item.value}</div>
          </div>
        ))}
      </div>
      <FunAreaChart/>

    </div>
  );
}
