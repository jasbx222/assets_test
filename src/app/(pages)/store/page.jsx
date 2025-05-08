"use client";
const store =[
    {
      "الاسم": "كرسي مكتبي",
      "الكمية": 15,
      "الموقع": "المستودع الرئيسي"
    },
    {
      "الاسم": "طاولة اجتماعات",
      "الكمية": 4,
      "الموقع": "مستودع الفرع"
    },
    {
      "الاسم": "دولاب ملفات",
      "الكمية": 10,
      "الموقع": "المستودع الرئيسي"
    },
    {
      "الاسم": "حاسوب محمول",
      "الكمية": 8,
      "الموقع": "مخزن التكنولوجيا"
    },
    {
      "الاسم": "شاشة عرض",
      "الكمية": 6,
      "الموقع": "مستودع الطابق الثاني"
    }
  ]
  

const Page = () => {
  return (
    <div dir="rtl" className="p-6 container">
      <h1 className="text-2xl font-bold mb-4">المستودع</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
{
    store.map((item)=>(
        <div key={item.الاسم} className="bg-gray-300   p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">{item.الاسم} </h2>
        <p className="text-sm text-gray-600">{item.الكمية} </p>
        <p className="text-sm text-gray-600"> {item.الموقع}</p>
      </div>


    ))
}

      </div>
    </div>
  );
};

export default Page;
