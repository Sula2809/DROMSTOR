"use client";
import favorites from "@/components/shared/Cart/favorites.json";
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
import { useRouter } from "next/navigation";
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

export const OrderForm = () => {
  const t = useTranslations("Cart.OrderPage");
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
    },
  });

  async function onSubmit(data) {
    router.push(`/cart/orderSuccess`);
  }
  return (
    <div>
      <div className={`md:shadow-2xl`}>
        <div className={`space-y-4 md:p-8 relative text-center`}>
          <Form {...form} className="w-full">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col items-start gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder={t("name")}
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
                name="surname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder={t("surname")}
                        {...field}
                        className={`border border-light-border bg-inherit`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder={t("phone")}
                        {...field}
                        className={`border border-light-border bg-inherit`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className={`h-[1px] w-full bg-button my-2`}></div>
              <div className={`flex justify-between p-3 w-full`}>
                <p className={`text-body3 font-bold text-button`}>
                  {t("total")}
                </p>
                <p className={`text-body3 font-bold text-button`}>
                  {favorites.reduce((total, item) => total + item.price, 0)}{" "}
                  {t("currency")}
                </p>
              </div>
              <Button
                className={`bg-button hover:bg-button-hover duration-300 w-[97%] py-3 m-3`}
                onClick={onSubmit}
              >
                {t("makeOrder")}
              </Button>
            </form>
          </Form>
          <p
            className={`text-blue-text text-body4 sm:text-body3 md:text-body2 lg:text-body1 font-normal`}
          >
            {t("feedBack")}
          </p>
        </div>
      </div>
    </div>
  );
};
