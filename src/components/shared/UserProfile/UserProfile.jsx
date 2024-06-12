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

export const UserProfile = () => {
  const t = useTranslations("Auth");
  const [isAuth, setIsAuth] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setIsAuth(!!Cookies.get("access_token"));
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
    setIsAuth(false);
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
          onAuthChange={setIsAuth}
        />
      )}
      {showSignup && (
        <Signup showLogin={handleLoginClick} close={setShowSignup} />
      )}
    </>
  );
};
