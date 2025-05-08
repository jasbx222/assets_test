import React from 'react'

const Pagination = ({currentPage,totalPages,goToPage}) => {


  return (
 
 <div className="flex justify-center items-center gap-2 mt-6 mb-4">
 {currentPage > 1 && (
   <button
     onClick={() => goToPage(currentPage - 1)}
     className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
   >
     السابق
   </button>
 )}

 {/* أرقام الصفحات */}
 {Array.from({ length: totalPages }, (_, i) => (
   <button
     key={i}
     onClick={() => goToPage(i + 1)}
     className={`px-3 py-1 rounded-lg text-sm ${
       currentPage ===i + 1
         ? "bg-blue-500 text-white"
         : "bg-gray-200 hover:bg-gray-300"
     }`}
   >
     {i + 1}
   </button>
 ))}

 {currentPage < totalPages && (
   <button
     onClick={() => goToPage(currentPage + 1)}
     className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
   >
     التالي
   </button>
 )}
</div>
  )
}

export default Pagination