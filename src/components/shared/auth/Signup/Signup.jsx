"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { register } from "@/shared/services/auth/auth";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useTranslations } from "next-intl";

const PasswordConfirmation = z.custom((data) => {
  if (data.password !== data.confirmPassword) {
    return z.string();
  }
  return data;
});

const FormSchema = z.object({
  email: z.string().email("Введите действительный e-mail"),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 6 символов" })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    })
    .refine((value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
      message: "Пароль должен содержать хотя бы один спецсимвол",
    }),
  // password2: PasswordConfirmation
  password2: z.string(),
});

export const Signup = ({ showLogin, close }) => {
  const t = useTranslations("Auth");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      password2: "",
    },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    const res = await register(data);
    if (res.status === 201) {
      setData(res);
      showLogin(true);
      setIsLoading(false);
    } else {
      console.log("not success");
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50`}
      onClick={() => close(false)}
    >
      <div className={`fixed inset-0 bg-black bg-opacity-75`} />
      <div
        className={`max-w-[596px] max-h-screen md:max-h-[640px] w-full h-full bg-white border border-gray_border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-12 w-full`}>
          <div className="w-full flex flex-col items-center gap-5 mb-12">
            <div className="w-full flex justify-between">
              <div>
                <img
                  src="/mainLogo.svg"
                  alt="logo2"
                  className="max-w-[140px]"
                />
              </div>
              <div className="cursor-pointer" onClick={() => close(false)}>
                <XIcon className="text-black" />
              </div>
            </div>
            <h3 className={`text-h4 font-bold text-button`}>{t("signin")}</h3>
          </div>
          <Form {...form} className="w-full">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={`relative w-full`}>
                    <FormControl>
                      <Input
                        placeholder={t("email")}
                        {...field}
                        className={`w-full border border-light-border bg-inherit`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className={`relative w-full`}>
                    <FormControl>
                      <Input
                        placeholder={t("password")}
                        {...field}
                        className={`w-full border border-light-border bg-inherit`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password2"
                render={({ field }) => (
                  <FormItem className={`relative w-full`}>
                    <FormControl>
                      <Input
                        placeholder={t("confirmPassword")}
                        {...field}
                        className={`w-full border border-light-border bg-inherit`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isLoading ? (
                <ThreeDots color="#221D19" />
              ) : (
                <Button
                  type="submit"
                  className={`h-[60px] w-full text-body2 font-bold bg-button hover:bg-button-hover active:bg-button-hover text-white`}
                >
                  {t("signin")}
                </Button>
              )}
              <Button
                onClick={showLogin}
                className={`h-[60px] border border-button w-full text-body2 font-bold bg-light-border hover:bg-button-hover active:bg-button-hover text-white`}
              >
                {t("login")}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
