import {
  Eye,
  ListEnd,
  MoveLeft,
  MoveRight,
  PlusCircle,
  PlusIcon,
  ShieldX,

} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen container w-[100%]  p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-6 max-w-4xl mx-auto">
        {/* إضافة اصل */}
        <div className="bg-[#34393d] rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer text-center">
          <p className="text-xl font-semibold text-gray-200">إضافة اصل</p>
          <div className="text-gray-200 flex justify-center items-center mt-5 text-2xl ">
            <Link href={'/addnewassets/'}>
            <PlusCircle className="  relative " size={30} />
            </Link>
          </div>
        </div>

        {/* عرض الاصول */}
        <div className="bg-[#34393d] rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer text-center">
          <p className="text-xl font-semibold text-gray-200">عرض الاصول</p>
          <div className="text-gray-200 text-2xl flex justify-center items-center mt-5 ">
           <Link href={'/assets/showassets'}>
           <Eye className="  relative  top-2" size={30} />
           </Link>
          </div>
        </div>

        {/* تحويل الاصل */}
        <div className="bg-[#34393d]  rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer text-center">
          <p className="text-xl font-semibold text-gray-200">تحويل الاصل</p>
          <div className="text-gray-200 text-2xl flex justify-center items-center mt-5">
    <Link href={'replace_store'}>
    <MoveLeft className="  relative right-0 top-2" size={30} />
    <MoveRight className="  relative right-0 top-2" size={30} />
    </Link>
          </div>
        </div>
       
          {/* إضافة فئة جديدة */}
          <div className="bg-[#34393d]  rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer text-center">
          <p className="text-xl font-semibold text-gray-200">إضافة فئة جديدة</p>
          <div className="text-gray-200 text-2xl flex justify-center items-center mt-5">
            <Link href={'/categories'}>
            <PlusIcon className="  relative right-0 top-2" size={30} />
            </Link>
          </div>
          </div>
          <div className="bg-[#34393d]  rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer text-center">
          <p className="text-xl font-semibold text-gray-200"> اتلاف الاصل </p>
          <div className="text-gray-200 text-2xl flex justify-center items-center mt-5">
            <Link href={'/assets/end_assets'}>
            <ShieldX  className="  relative right-0 top-2" size={30} />
            </Link>
          </div>
          </div>

      </div>
    </div>
  );
}
