import { Input, Select } from "./Inputs";

export default function Page() {
  return (
    <div className="  container w-[100%] flex items-center justify-center px-4 py-8">
      <form
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-5 text-right"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold text-amber-600 mb-4">
          إضافة مستخدم جديد
        </h2>
        <Input type={"text"} name={"name"} label={"اسم المستخدم"} />
        <Input type={"tel"} name={"phone"} label={"رقم الهاتف"} />
        <Input type={"email"} name={"email"} label={"البريد الالكتروني"} />
        <Input type={"password"} name={"password"} label={"كلمة المرور"} />

        <Select
          name={"permission"}
          label={"الصلاحيات"}
          options={[
            { value: "admin", label: "مدير" },
            { value: "user", label: "موظف" },
          ]}
        />

        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-2 rounded-xl hover:bg-amber-700 transition-colors"
        >
          حفظ المستخدم
        </button>
      </form>
    </div>
  );
}
