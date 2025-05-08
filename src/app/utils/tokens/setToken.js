"use server";

import { cookies } from "next/headers";

const getToken = async (key,value) => {
    const data = await cookies().set(key,value);
    if (!data) {
        return null;
    }
  return data
}
export default getToken