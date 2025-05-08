"use client";

import { useActionState } from "react";
import { Inputs } from "./Inputs";
import { User } from "lucide-react";
import { login } from "./loginData";

export default function Page() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <div className="container px-4 mx-auto w-full">
      <div className="max-w-lg mx-auto bg-gray-900 shadow-2xl shadow-amber-600 border-2 border-amber-700 rounded-2xl p-12">
        <div className="text-center mb-6">
          <h2 className="font-extrabold text-amber-50 flex justify-center items-center gap-4 text-2xl">
            <User size={40} />
            تسجيل الدخول
          </h2>
        </div>

        {/* عرض الأخطاء إن وجدت */}
        {state?.message && !state?.success && (
          <div className="mb-4 text-red-500 text-center font-bold">
            {state.message}
          </div>
        )}
        {/* عرض الأخطاء إن وجدت */}
        {state?.success  && (
          <div className="mb-4 text-green-500 text-center font-bold">
            {state.success}
          </div>
        )}

        <form action={action}>
          <Inputs
            type="email"
            name="email"
            label="ادخل الايميل الخاص بك"
          />
          <Inputs
            type="password"
            name="password"
            label="ادخل الباسورد الخاص بك"
          />

          <button
            type="submit"
            disabled={isPending}
            className="inline-block shadow-2xl shadow-amber-300 w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-amber-600 rounded transition duration-200"
          >
            {isPending ? "جاري ارسال البيانات..." : "ارسال البيانات"}
          </button>
        </form>
      </div>
    </div>
  );
}
