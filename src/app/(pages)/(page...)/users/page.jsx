import Link from "next/link";
import { Suspense } from "react";
import UsersList from "./UserList";

export default function Page() {
  return (
    <div className="min-h-screen container w-[100%] py-10 px-4" dir="rtl">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-[#424242] text-white py-2 px-4 rounded-lg hover:bg-[#2c2727] transition">
          <Link href="/users/add_user">إضافة مستخدم</Link>
        </button>
        <h1 className="text-3xl font-bold text-gray-500 mb-8 text-center">
          قائمة المستخدمين
        </h1>
      </div>

      <Suspense fallback={<></>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
