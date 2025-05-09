"use client";
const UserTable = ({ user }) => {
  return (
    <div className="overflow-x-auto container w-[100%] shadow-md rounded-lg border border-gray-200">
      <table className=" table-auto w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">الاسم</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">الهاتف</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">البريد الإلكتروني</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">الصلاحية</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id} className="border-b border-gray-200">
              <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.permission}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <div className="flex space-x-2">
                  <button className="bg-[#424242] text-white py-1.5 px-4 rounded-xl hover:bg-gray-700">
                    تعديل
                  </button>
                  <button className="bg-red-500 text-white py-1.5 px-4 rounded-xl hover:bg-red-600">
                    حذف
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
