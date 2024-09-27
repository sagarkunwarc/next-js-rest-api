/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/app/db";
import { revalidatePath } from "next/cache";

export async function createUser(initialState: any, data: FormData) {
  const name = data.get("name") as string;
  const email = data.get("email") as string;

  try {
    await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    revalidatePath("/users");
    return { success: true, message: "User Created" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "User Not Created" };
  }
}
