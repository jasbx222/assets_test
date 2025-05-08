"use client";

import Link from "next/link";
import Card from "./Card";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pagination/Pagination";
import { Suspense } from "react";
import CircleLoading from "@/app/components/loading/CircleLoading";

const users = [
  {
    id: 1,
    name: "User 1",
    email: "email@email.com",
    phone: "1234567890",
    permission: "admin",
  },
  {
    id: 2,
    name: "User 2",
    email: "email@email.com",
    phone: "1234567890",
    permission: "user",
  },
  {
    id: 3,
    name: "User 3",
    email: "email@email.com",
    phone: "1234567890",
    permission: "user",
  },
  {
    id: 4,
    name: "User 4",
    email: "email@email.com",
    phone: "1234567890",
    permission: "user",
  },
  {
    id: 5,
    name: "User 5",
    email: "email@email.com",
    phone: "1234567890",
    permission: "user",
  },
  {
    id: 6,
    name: "User 6",
    email: "email@email.com",
    phone: "1234567890",
    permission: "user",
  },
  {
    id: 7,
    name: "User 7",
    email: "email@email.com",
    phone: "1234567890",
    permission: "user",
  },
];

function UsersList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = users.slice(start, end);

  const goToPage = (page) => {
    router.push(`?page=${page}`);
  };

  return (
    <>
      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <CircleLoading />
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        goToPage={goToPage}
      />
    </>
  );
}

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
