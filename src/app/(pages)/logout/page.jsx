"use client";
import { useEffect } from "react";
import Swal from "sweetalert2";

const page = () => {
  useEffect(() => {
    Swal.fire({
      title: "تمت العملية بنجاح!",

      icon: "success",
      confirmButtonText: "حسنًا",
      customClass: {
        popup: "rounded-xl",
        confirmButton:
          "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
      },
    });
  });
  return null;
};

export default page;









