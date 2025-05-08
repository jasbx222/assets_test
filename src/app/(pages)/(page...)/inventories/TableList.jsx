"use client";

import { useState } from "react";
import {
  Search,
  Table,
  FilterDate,
  FilterAssets,
  FilterLocation,
  FilterEmployee,
  BtnFliter,
} from "./Components";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pageination/Pageination";

const inventories = [
  // بيانات الجرد ...
  
];

export default function TableList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const searchParams = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 2;
  const pageParam = searchParams?.get("page") || "1";
  const currentPage = parseInt(pageParam);

  const filteredItems = inventories.filter(
    (inv) =>
      inv.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredItems.slice(start, end);

  const goToPage = (page) => {
    router.push(`?page=${page}`);
  };

  return (
    <div className="p-6 text-right container w-full min-h-screen mx-auto">
      <h1 className="text-3xl font-semibold text-gray-600 mb-6">
        عمليات الجرد
      </h1>

      {!show && <BtnFliter handleShow={handleShow} show={show} />}
      {show && (
        <div>
          <FilterDate />
          <FilterAssets />
          <FilterLocation />
          <FilterEmployee />
          <BtnFliter handleShow={handleShow} show={show} />
        </div>
      )}

      <Search
        searchTerm={searchTerm}
        setSearchTerm={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto rounded-xl shadow-md bg-white mt-4">
        <Table filtered={currentItems} />
        <Pagination
          currentPage={currentPage}
          goToPage={goToPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
