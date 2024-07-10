import clsx from "clsx";
import { Mulish } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import "./(root)/globals.css";
import { AuthProvider } from "@/shared/Providers/AuthProvider";

const mulish = Mulish({ subsets: ["latin"] });

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={clsx(mulish.className, "")}>
        <AuthProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
