"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function DashboardLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // redirect to home if not logged in
    }
  }, [user, loading, router]);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  // If logged in, render dashboard pages
  return <div>{children}</div>;
}
