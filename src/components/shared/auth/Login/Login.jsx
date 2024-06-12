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
import { Label } from "@/components/ui/label";
import { XIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { login } from "@/shared/services/auth/auth";
import { ThreeDots } from "react-loader-spinner";
import { useTranslations } from "next-intl";

const FormSchema = z.object({
  email: z
    .string()
    .email()
    .min(2, {
      message: "Введите действительный e-mail",
    })
    .includes("@", { message: "Должно быть @" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее 6 символов" }),
});

export const Login = ({ showSignup, close, onAuthChange }) => {
  const t = useTranslations("Auth");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    const res = await login(data);
    if (res.status === 200) {
      onAuthChange(true);
      close(false);
      setIsLoading(false);
    } else {
      console.log("not-success");
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 size-full z-50`}
      onClick={() => close(false)}
    >
      <div className={`fixed inset-0 bg-black opacity-75`} />
      <div
        className={`max-w-[596px] max-h-screen md:max-h-[600px] w-full h-full bg-white border border-gray_border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-12 w-full`}>
          <div className="w-full flex flex-col gap-5 mb-12">
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
            <h3 className={`text-black text-h3 font-bold text-center`}>
              {t("login")}
            </h3>
          </div>
          <Form {...form} className="w-full">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col items-start gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder={t("email")}
                        {...field}
                        className={`border border-light-border bg-inherit w-full`}
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
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder={t("password")}
                        {...field}
                        className={`border border-light-border bg-inherit`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  className="border border-border_brown size-6 hover:border-2 data-[state=checked]:bg-button data-[state=checked]:border-button"
                />
                <Label
                  htmlFor="remember"
                  className="cursor-pointer text-button text-body3"
                >
                  {t("rememberMe")}
                </Label>
              </div>
              {isLoading ? (
                <div className="flex justify-center w-full">
                  <ThreeDots color="#221D19" />
                </div>
              ) : (
                <Button
                  type="submit"
                  className={`h-[60px] w-full text-body2 font-bold bg-button hover:bg-button-hover active:bg-button-hover text-white`}
                >
                  {t("login")}
                </Button>
              )}
              <Button
                onClick={showSignup}
                className={`h-[60px] border border-button w-full text-body2 font-bold bg-light-border hover:bg-button-hover active:bg-button-hover text-white`}
              >
                {t("signin")}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
