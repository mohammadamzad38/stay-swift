"use client";

import { Login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const response = await Login(formData);

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/bookings");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <>{error && <div className="text-xs text-red-600">{error}</div>}</>{" "}
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
