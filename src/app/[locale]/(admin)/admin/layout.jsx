import { AdminHeader } from "@/components/admin/AdminHeader/AdminHeader";

export default async function AdminLayout({ children, params: { locale } }) {
  return (
    <div className={`text-white h-full`}>
      <AdminHeader />
      {children}
    </div>
  );
}
