"use client";
import { icons, SearchCheck, ShieldX } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import Table from "./Table";

const Page = () => {
  const [assetId, setAssetId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [asset, setAsset] = useState({
    id: 1,

    name: "أصل 1",
    category: "إلكترونيات",
    status: "جيد",
    createdAt: "2023-01-01",
  });

  const handleDestroy = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Auto close alert!",
      text: "I will close in 2 seconds.",

      timer: 5000,
      buttonsStyling: "yes",
    });
    setLoading(true);
  };

  return (
    <div className="p-4 bg-[#1F3557] container w-[100%] rounded shadow-md mx-auto space-y-4">
      <h2 className="text-lg font-semibold text-gray-200">إتلاف أصل</h2>

      <div className="w-[100%] mx-auto">
        <form className="flex items-center justify-center gap-2 w-full">
          <input
            type="text"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
            placeholder="أدخل رقم الأصل"
            className="flex-1 w-[100%] text-gray-950 px-3 bg-gray-200 h-[50px] py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleDestroy}
            disabled={loading}
            className={`flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "جاري الإتلاف..." : <ShieldX size={20} />}
          </button>
          <button
            onClick={handleDestroy}
            disabled={loading}
            className={`flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "البحث الإتلاف..." : <SearchCheck size={20} />}
          </button>
        </form>
      </div>

      <Table asset={asset} />
    </div>
  );
};

export default Page;
