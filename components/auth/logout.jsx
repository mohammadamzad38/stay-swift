"use client";

import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <button
      className="rounded-lg bg-red-100 px-4 py-2 hover:text-red-500"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
    >
      Logout
    </button>
  );
};
export default Logout;
