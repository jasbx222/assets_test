"use client"

import { useState } from "react";

const warehouses = ["المخزن الرئيسي", "مخزن الفرع", "مخزن الطوارئ"];

const products = [
  { id: 1, name: "شال شتوي" },
  { id: 2, name: "قلم حبر" },
  { id: 3, name: "دفتر ملاحظات" },
  { id: 4, name: "ساعة يد" },

];

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [fromWarehouse, setFromWarehouse] = useState("");
  const [toWarehouse, setToWarehouse] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    if (fromWarehouse === toWarehouse) {
      setMessage("❌ لا يمكن النقل لنفس المخزن.");
      return;
    }
    if (!selectedProduct || !fromWarehouse || !toWarehouse) {
      setMessage("❗ الرجاء تعبئة جميع الحقول.");
      return;
    }

    setMessage(`✅ تم نقل "${selectedProduct}" من "${fromWarehouse}" إلى "${toWarehouse}".`);
  };

  return (
    <div className="max-w-md mx-auto bg-amber-50 p-6 container w-[100%] rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4 text-center">نقل منتج بين مخازن</h2>
      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">اختر المنتج</label>
          <select
            className=" border border-gray-300 rounded p-2 w-full "
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">-- اختر --</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">من المخزن</label>
          <select
            className="w-full border-gray-300 border rounded p-2"
            value={fromWarehouse}
            onChange={(e) => setFromWarehouse(e.target.value)}
          >
            <option value=""  >-- اختر --</option>
            {warehouses.map((w, i) => (
              <option className="" key={i} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">إلى المخزن</label>
          <select
            className="w-full border-gray-300 border   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      rounded p-2"
            value={toWarehouse}
            onChange={(e) => setToWarehouse(e.target.value)}
          >
            <option value="">-- اختر --</option>
            {warehouses.map((w, i) => (
              <option  className="" key={i} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="w-full bg-[#34393d] text-gray-200 hover:text-amber-50 py-2 rounded hover:bg-gray-700">
          تنفيذ النقل
        </button>
      </form>

      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
}
