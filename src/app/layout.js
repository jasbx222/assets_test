import { Amiri } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Header } from "./components/Header";

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

export const metadata = {
  title: "نظام الجرد الذكي للأصول  ",
  description:
    " نظام جرد ذكي للأصول    يهدف إلى تحويل عملية الجرد اليدوية البطيئة والمكلفة إلى عملية مؤتمتة وسريعة ودقيقة ",
};

export default function RootLayout({ children }) {
  return (
   <html lang="ar" dir="rtl">
       <body
         className={`${amiri.className} 
 
           antialiased  min-h-screen flex flex-row-reverse`}
       >
         {/* Sidebar ثابت على اليمين */}
         <div className="">
           <Sidebar />
         </div>
 
         {/* محتوى الصفحة يزاح لليسار بوجود السايدبار */}
         <div className="flex-1 md:mr-32  p-4">
           <Header />
           <main className="mt-4">{children}</main>
         </div>
       </body>
     </html>
  );
}
