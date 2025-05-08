"use client";
import { useParams } from "next/navigation";

const inventoryDetails = {
  id: "1",
  date: "2025-05-01",
  location: "مخزن البصرة",
  user: "أحمد محمد",
  readAssets: 120,
  missingAssets: 3,
  damagedAssets: 2,
};

export default function Page() {
  const { id } = useParams();

  return (
    <div className="p-6 text-right space-y-4">
      <h1 className="text-2xl font-bold">تفاصيل عملية الجرد #{id}</h1>

      <div>📍 الموقع: {inventoryDetails.location}</div>
      <div>📅 التاريخ: {inventoryDetails.date}</div>
      <div>👤 الموظف: {inventoryDetails.user}</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="bg-green-100 p-4 rounded-xl shadow">
          ✅ الأصول المقروءة: {inventoryDetails.readAssets}
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          ⚠️ الأصول المفقودة: {inventoryDetails.missingAssets}
        </div>
        <div className="bg-red-100 p-4 rounded-xl shadow">
          ❌ الأصول التالفة: {inventoryDetails.damagedAssets}
        </div>
      </div>
    </div>
  );
}
