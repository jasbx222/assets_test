import { z } from 'zod';

export const addNewAssetSchema = z.object({
  assetId: z.string().min(1, { message: "رقم الأصل مطلوب" }),
  assetName: z.string().min(1, { message: "اسم الأصل مطلوب" }),
  quantity: z.string().optional(),
  location: z.string().optional(),
  status: z.enum(["جديد", "مستخدم", "تالف"]), 
  notes: z.string().optional(),
  authority: z.enum([
    "الهيئة العامة",
    "هيئة تقنية",
    "هيئة إدارية",
  ]),
});
