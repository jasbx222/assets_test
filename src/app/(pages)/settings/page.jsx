

export default function Page() {


  return (
    <div dir="rtl" className="p-6   space-y-6 container w-full max-w-4xl mx-auto">
      <h1 className="text-2xl    text-amber-50 w-[300px] font-bold mb-4">الإعدادات</h1>

      {/* معلومات الحساب */}


      <div  className="bg-[#424242]  w-[400px] p-6 rounded-2xl shadow border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 text-white/90">المعلومات العامة</h2>
      <div className="space-y-3 ">
        <div className=" ">
          <label className="block text-xl font-medium text-white/90">الاسم الكامل</label>
          {/* <span>{user.username}</span> */}
        </div>
        <div>
          <label className="block text-xl font-medium text-white/90">البريد الإلكتروني</label>
          {/* <span>{user.email}</span>asws */}
        
        </div>
      </div>
    </div>


      {/* كلمة المرور */}
      <div className="bg-[#424242] w-[400px] p-6 text-white/90 rounded-2xl shadow border  border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">تغيير كلمة المرور</h2>
        <div className="space-y-3">
          <input type="password" className="w-full border rounded-xl border-gray-300 px-4 text-xl py-2" placeholder="كلمة المرور الحالية" />
          <input type="password" className="w-full border rounded-xl  border-gray-300 px-4 text-xl py-2" placeholder="كلمة المرور الجديدة" />
          <input type="password" className="w-full border rounded-xl  border-gray-300 px-4 text-xl py-2" placeholder="تأكيد كلمة المرور" />
        </div>
      </div>

   
    
    </div>
  );
}
