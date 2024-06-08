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
    console.log("done", data);
    router.push(`/cart/orderSuccess`);
  }
  return (
    <div>
      <div className={`text-end text-body3 font-normal text-button pr-4`}>
        {favorites.length} товара
      </div>
      <div className={`shadow-2xl`}>
        <div className={`space-y-4 p-8 relative`}>
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
                        placeholder="Имя"
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
                        placeholder="Фамилия"
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
                        placeholder="Номер телефона"
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
                <p className={`text-body3 font-bold text-button`}>Итого</p>
                <p className={`text-body3 font-bold text-button`}>
                  {favorites.reduce((total, item) => total + item.price, 0)} сом
                </p>
              </div>
              <Button
                className={`bg-button hover:bg-button-hover duration-300 w-[97%] py-3 m-3`}
                onClick={onSubmit}
              >
                Оформить заказ
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};