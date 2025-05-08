"use server";
import axios from "axios";
import { cookies } from "next/headers"; // لإدارة الكوكيز على السيرفر
import { userSchema } from "./validate";

export const login = async (prevState, formData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    // التحقق من صحة البيانات
    const validate = userSchema.safeParse({ email, password });

    if (!validate.success) {
      const errors = validate.error.flatten().fieldErrors;
      return {
        success: false,
        message: "القيمة المضافة غير صحيحة",
        errors: errors,
      };
    }

    // إرسال الطلب باستخدام Axios
    const response = await axios.post(
      "https://back.kadrapp.com/admin/v1/auth/login",
      {
        email: email,
        password: password,
      }
    );

    const token = response.data.token;

    // تخزين التوكن في الكوكيز لمدة سنة (ثواني: 60 * 60 * 24 * 365)
    const oneYearInSeconds = 60 * 60 * 24 * 365;
   
    await cookies().set("token", token, {
      path: "/",
      maxAge: oneYearInSeconds,

      

    });

    return {
      success: true,
      message: "تم تسجيل الدخول بنجاح",
    };
  } catch (error) {
    console.log("Error during login:", error.response?.data || error.message);

    return {
      success: false,
      message: "حدث خطأ أثناء تسجيل الدخول",
    };
  }
};
