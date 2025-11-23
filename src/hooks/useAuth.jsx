"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { use } from "react";

export default function useAuth() {
  const authInfo = use(AuthContext);
  return authInfo;
}
