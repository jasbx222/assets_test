"use client";
import { ShieldX } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
const DestroyAssetSection = ({ onStatusUpdated }) => {
  const [assetId, setAssetId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDestroy = async () => {
    if (!assetId.trim()) {
      Swal.fire({
        icon: "warning",
        title: "تحذير",
        timer: 5000,
        text: "يرجى إدخال رقم الأصل.",
        confirmButtonText: "حسناً",
      });

      return;
    }

    const confirmed = Swal.fire({
      title: "تأكيد",
      text: "هل أنت متأكد من أنك تريد إتلاف هذا الأصل؟",
      icon: "warning",
      buttons: ["إلغاء", "نعم"],
      dangerMode: true,
    });
    if (!confirmed) return;

    try {
      setLoading(true);
      const response = await axios.put(`/api/assets/${assetId}`, {
        status: "تالف",
      });

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "نجاح",
          text: "تم إتلاف الأصل بنجاح.",
          confirmButtonText: "حسناً",
        });

        onStatusUpdated?.();
        setAssetId(""); // إعادة تعيين الحقل بعد الإتلاف
      }
    } catch (error) {
      console.error("فشل في إتلاف الأصل:", error);
      Swal.fire({
        icon: "error",
        title: "فشل",
        text: "حدث خطأ أثناء إتلاف الأصل. يرجى المحاولة مرة أخرى.",
        confirmButtonText: "حسناً",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-amber-50   container w-[100%] rounded shadow-md  mx-auto space-y-4">
      <h2 className="text-lg font-semibold text-gray-200">إتلاف أصل</h2>

      <div className=" w-[50%] mx-auto">
        <form className="flex items-center justify-center gap-2 w-full">
          <input
            type="text"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
            placeholder="أدخل رقم الأصل"
            className="flex-1 w-full text-white px-3 bg-gray-800 h-[50px] py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
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
        </form>
      </div>
    </div>
  );
};

export default DestroyAssetSection;
