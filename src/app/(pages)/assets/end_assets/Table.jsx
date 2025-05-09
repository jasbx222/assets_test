import React from 'react'

const Table = ({
  asset
}) => {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#1F3557] mb-4">
            معلومات الأصل
          </h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">
                  الخاصية
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">
                  القيمة
                </th>
              </tr>
            </thead>
            <tbody key={asset.id} >
              <tr >
                <td className="px-6 py-4 text-sm text-gray-600">الاسم</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {asset.name}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-600">التصنيف</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {asset.category ??''}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-600">
                  الحالة الحالية
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {asset.status??''}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-600">
                  تاريخ الإضافة
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {asset.createdAt?? ''}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  )
}

export default Table