"use client";
import { AdminHeader } from "@/components/admin/AdminHeader/AdminHeader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function AdminLayout({ children, params: { locale } }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("access_token");
      if (!token) {
        router.replace("/");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className={`text-white h-full`}>
      <AdminHeader />
      {children}
    </div>
  );
}
