"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { MoreLinks } from "./MoreLinks";
import { Menu, MoreVertical, X } from "lucide-react";
import { mainLinks, moreLinks } from "./Linkes";

const Sidebar = () => {
  const path = usePathname();

  const [show, setShow] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleNav = () => setShow(!show);
  const toggleMore = () => setIsMoreOpen(!isMoreOpen);

  return (
    <nav className="fixed top-0 right-0 z-50" dir="rtl">
      {/* زر القائمة الجانبية */}
      <button onClick={handleNav} className="text-2xl text-[#34393d] px-4 py-2">
        <Menu size={40} />
      </button>

      <div
        className={`fixed border rounded-md border-gray-200 bg-[#1F3557] top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform shadow-lg ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* زر إغلاق القائمة الجانبية */}
        <button
          type="button"
          onClick={handleNav}
          className="absolute top-2.5 left-2.5 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <X className="text-[#fff] hover:text-gray-700" />
        </button>

        {/* قائمة الروابط الرئيسية */}

        <ul
          className="py-4 space-y-2  relative top-8
         grid  gap-6 font-medium"
        >
          {mainLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`flex items-center justify-between gap-5 p-2 rounded-lg group
  
    transition-colors duration-300 bg-[#1F3557] hover:bg-[#464f5ccb] ease-in-out shadow shadow-[#fff]`}
              >
                <span className="w-5 h-5 text-gray-200">{link.icon}</span>
                <span className="flex-1 text-gray-200">{link.label}</span>
                {path === link.href && <span className="text-gray-200">✔</span>}
              </Link>
            </li>
          ))}

          {/* زر المزيد من المعلومات */}
        </ul>
        {/* اللوغو والفوتر */}

      </div>
    </nav>
  );
};

export default Sidebar;

// <li>
// <Link
// onClick={toggleMore}
//       href={''}
//       className={`shadow shadow-[#fa9718] flex items-center justify-between gap-5 hover:bg-[#fa9718] p-2 text-gray-200 rounded-lg group`}
//     >

//       <span className={`w-5 h-5 text-amber-50`}>
//         <MoreVertical onClick={toggleMore} />
//       </span>
//       <span className="flex-1 hover:text-gray-900">
//         المزيد من المعلومات
//       </span>
//     </Link>

//   {/* قائمة منسدلة */}
//   <MoreLinks isMoreOpen={isMoreOpen} path={path} moreLinks={moreLinks} />
// </li>
