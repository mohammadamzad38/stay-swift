"use server";

import { signIn } from "@/auth";
import { dbConnect } from "@/service/mongo";

export async function Login(formData) {
  await dbConnect();

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),

      redirect: false,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
