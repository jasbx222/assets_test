"use server";
import axios from "axios";
import { addNewAssetSchema } from "./validation";
import setToken from "@/app/utils/tokens/setToken";
import getToken from "@/app/utils/tokens/getToken";
export const sendItems = async (prevState, formData) => {
  try {
 
    // هنا نقوم بجلب البيانات المدخلة من النموذج
    const assetId = formData.get("assetId");
    const assetName = formData.get("assetName");
    const quantity = formData.get("quantity");
    const location = formData.get("location");
    const status = formData.get("status");
    const notes = formData.get("notes");
    const authority = formData.get("authority");
    
    // هنا نقوم بعمل كائن يحتوي على البيانات المدخلة
    const data = {
      assetId: assetId,
      assetName: assetName,
      quantity: quantity,
      location: location,
      status: status,
      notes: notes,
      authority: authority,
    };

    // هنا نقوم بعمل فحص للبيانات المدخلة باستخدام مكتبة Zod

    const validationResult = addNewAssetSchema.safeParse(data);
    // اذا كانت البيانات غير صحيحة، ارجع برسالة خطأ
    if (!validationResult.success) {
      return {
        message: "تاكد من البيانات المدخلة",
        errors: validationResult.error.format(),
        success: false,
      };
    }
    // اذا كانت البيانات صحيحة، تابع في ارسال البيانات
    const response = await axios.post("http://localhost:3000/api/assets", {
      data,
    });
    // اذا كانت الاستجابة ناجحة، ارجع برسالة نجاح
    if (response.status >= 200 && response.status < 300) {
      return {
        message: "تم إضافة الأصل بنجاح",
        success: true,
      };
    }

    // اذا كانت الاستجابة غير ناجحة، ارجع برسالة خطأ
    if (!response.ok) {
      return {
        message: "فشل في إضافة الأصل",
        success: false,
      };
    }
  } catch (error) {
    //اذا حدث خطأ، ارجع برسالة خطأ
    console.error("Error:", error.message);
    return {
      message: "حدث خطأ أثناء معالجة الطلب",
      success: false,
    };
  }
};
