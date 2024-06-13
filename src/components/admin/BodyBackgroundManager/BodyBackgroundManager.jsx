// src/components/admin/BodyBackgroundManager/BodyBackgroundManager.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "@/components/shared/Cart/";

export const BodyBackgroundManager = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/en/admin") {
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = "";
      }
    };

    // Check current URL
    handleRouteChange(router.asPath);

    // Monitor route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return <>{children}</>;
};
