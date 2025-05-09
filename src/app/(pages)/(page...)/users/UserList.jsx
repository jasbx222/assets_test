"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pagination/Pagination";
import { Suspense } from "react";
import CircleLoading from "@/app/components/loading/CircleLoading";
import UserTable from "./UserTable";
import { User } from "lucide-react";

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
        <div className="">
      
            <UserTable user={currentItems}/>
       
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

export default UsersList;
