"use client";

import { Suspense } from "react";
import TableList from "./TableList";

export default function Page() {

 

  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
      <TableList />
    </Suspense>
  );
}
