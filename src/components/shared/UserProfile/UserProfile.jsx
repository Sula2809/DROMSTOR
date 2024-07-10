"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Signup } from "@/components/shared/auth/Signup/Signup";
import { Login } from "@/components/shared/auth/Login/Login";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/Providers/AuthProvider";

export const UserProfile = () => {
  const t = useTranslations("Auth");
  const router = useRouter();
  const { setToken } = useAuth();

  const [isAuth, setIsAuth] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = Cookies.get("access_token");
    const userRole = Cookies.get("role");
    setIsAuth(!!token);
    setRole(userRole);

    const handleShowLogin = () => {
      setShowLogin(true);
    };

    window.addEventListener("showLogin", handleShowLogin);
    window.addEventListener("tokenChange", () => {
      setIsAuth(!!Cookies.get("access_token"));
      setRole(Cookies.get("role"));
    });

    return () => {
      window.removeEventListener("showLogin", handleShowLogin);
      window.removeEventListener("tokenChange", () => {
        setIsAuth(!!Cookies.get("access_token"));
        setRole(Cookies.get("role"));
      });
    };
  }, []);

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("role");
    setIsAuth(false);
    setToken(null); // Обновите контекст
    setRole(""); // Сбросьте роль
    window.dispatchEvent(new Event("tokenChange")); // Вызовите событие для обновления состояния
  };

  const handleAdminDashboard = () => {
    router.push("/admin");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            src={`/icons/login-${isAuth ? "authorize" : "unauthorize"}.svg`}
            className={`size-12 rounded-full p-2 cursor-pointer`}
          />
        </DropdownMenuTrigger>
        {isAuth ? (
          <DropdownMenuContent className="max-w-[200px]">
            <DropdownMenuCheckboxItem
              className="cursor-pointer"
              onClick={handleLogout}
            >
              {t("logout")}
            </DropdownMenuCheckboxItem>
            {role && (
              <DropdownMenuCheckboxItem
                className="cursor-pointer"
                onClick={handleAdminDashboard}
              >
                {role === "admin" ? "Админ панель" : null}
              </DropdownMenuCheckboxItem>
            )}
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent className="max-w-[200px]">
            <DropdownMenuCheckboxItem
              className="cursor-pointer"
              onClick={handleLoginClick}
            >
              {t("login")}
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="cursor-pointer"
              onClick={handleSignupClick}
            >
              {t("signin")}
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
      {showLogin && (
        <Login
          showSignup={handleSignupClick}
          close={setShowLogin}
          onAuthChange={(isAuthenticated) => {
            setIsAuth(isAuthenticated);
            const token = Cookies.get("access_token");
            const role = Cookies.get("role");
            setToken(token); // Обновите контекст
            setRole(role); // Обновите роль
            window.dispatchEvent(new Event("tokenChange")); // Вызовите событие для обновления состояния
          }}
        />
      )}
      {showSignup && (
        <Signup showLogin={handleLoginClick} close={setShowSignup} />
      )}
    </>
  );
};
