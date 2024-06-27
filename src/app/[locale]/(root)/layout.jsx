import clsx from "clsx";
import { Mulish } from "next/font/google";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export default async function HomeLayout({ children, params: { locale } }) {
  return (
    <div className={clsx(mulish.className, "")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
