import clsx from "clsx";
import { Mulish } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default async function LocaleLayout({ children, params: { locale } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  console.log("locale: ", locale);

  return (
    <html lang={locale}>
      <body className={clsx(mulish.className, "flex h-full flex-col")}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
