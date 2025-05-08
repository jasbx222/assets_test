import { Pencil, Trash2 } from "lucide-react";

const TableCategories = ({ categories }) => {
  return (
    <table className="w-full overflow-auto  text-sm text-right text-gray-700">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">اسم الفئة</th>

          <th className="px-6 py-3">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <tr
              key={index}
              className="border-b hover:bg-amber-50 transition-colors"
            >
              <td className="px-6 py-4 font-bold">{index + 1}</td>
              <td className="px-6 py-4">{cat.name ??"name"}</td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2">
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="text-center py-6 text-gray-400">
              لا توجد فئات حتى الآن.
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="bg-gray-800 text-white">
        <tr>
          <td colSpan={3} className="px-6 py-3 text-center ">
            إجمالي الفئات:{" "}
            <span className="text-red-500">{categories.length??0}</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TableCategories;
