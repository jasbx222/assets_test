"use client";

import { useGet } from "@/app/utils/hooks/useGet";

const page = () => {
  const dataObj = useGet("http://localhost:3000/api/products/");
  const data = dataObj[0];


  return (
    <div
      dir="rtl"
      className="relative overflow-x-auto container w-[100%]  border border-gray-300 shadow-md rounded"
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              اسم الاصل
            </th>
            <th scope="col" className="px-6 py-3">
              الحالة
            </th>
            <th scope="col" className="px-6 py-3">
              الباركود
            </th>
            <th scope="col" className="px-6 py-3">
              متوفر
            </th>
            <th scope="col" className="px-6 py-3">
              السعر
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, idx) => (
              <tr
                key={idx}
                className="bg-white border-b  border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.Name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.Status}
                </th>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.Barcode}
                </th>
                <th
                  scope="row"
                  className={`px-6 py-4 font-medium ${
                    item.Inactive ? "text-green-300" : "text-red-500"
                  } whitespace-nowrap`}
                >
                  {item.Inactive ? "متوفر" : "غير متوفر "}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.StonePrice.toLocaleString("ar-IQ", {
                    style: "currency",
                    currency: "IQD",
                  })}
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
