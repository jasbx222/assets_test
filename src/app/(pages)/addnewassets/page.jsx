"use client";
import { Circle, CircleAlert, Save } from "lucide-react";
import { InputText, Select } from "./Inputs";
import { useActionState } from "react";
import { sendItems } from "./validate/PostData";

export default function Page() {
  const authorities = ["الهيئة العامة", "هيئة تقنية", "هيئة إدارية"];
  const [state, action, isPending] = useActionState(sendItems, undefined);
  return (
    <div className="min-h-screen   container w-[100%]  p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md    rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-[#34393d] text-center mb-8">
          <span>إضافة أصل </span>
        </h2>

        <form action={action} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* رقم الأصل */}
          <InputText label="رقم الأصل" name="assetId" required={true} />

          {/* اسم الأصل */}
          <InputText label="اسم الأصل" name="assetName" required={true} />
          {/* الكمية */}
          <InputText label="الكمية" name="quantity" />
          {/* الموقع */}
          <InputText label="الموقع" name="location" />

          {/* الحالة */}
          <Select
            label="الحالة"
            name="status"
            options={[
              { value: "جديد", label: "جديد" },
              { value: "مستعمل", label: "مستعمل" },
              { value: "تالف", label: "تالف" },
            ]}
          />

          {/* الملاحظات */}
          <InputText label="الملاحظات" name="notes" required />

          {/* الهيئة */}
          <Select
            label="الهيئة"
            name="authority"
            options={authorities.map((auth) => ({ value: auth, label: auth }))}
          />

          {/* زر الإرسال */}
          <div className="md:col-span-2 flex  justify-center items-center mt-4">
            <button
              type="submit"
              className="bg-[#34393d] flex  justify-center items-center hover:bg-[#000]  text-white font-semibold py-2 px-6 rounded-xl transition"
            >
              {isPending ? (
                <span className="animate-spin">
                  <Circle />
                </span>
              ) : (
                <div className="flex items-center gap-2">
                  <Save size={20} />
                  <span>إضافة</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
