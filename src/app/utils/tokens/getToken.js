"use server";

import { cookies } from "next/headers";

const getToken = async (key) => {
    const data = await cookies().get(key);
    if (!data) {
        return null;
    }
  return data
}
export default getToken