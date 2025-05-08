import logo from './../../../../public/img/logo1.jpg';
import Image from "next/image";
export const Logo = () => {
  return (
    <div className="absolute bottom-14 left-0 w-full p-4 bg-[#424242] text-center text-gray-200">

      <Image
        src={logo}
        alt="Logo"
        width={150}
        height={100}
        className="mx-auto mt-2 rounded"
      />
      <h1 className='text-white'>OPDC</h1>
       
    </div>
  );
};
