import { AdminLogo } from "@/components/admin/icons/AdminLogo";
import { AdminUserIcon } from "@/components/admin/icons/AdminUserIcon";

export const AdminHeader = () => {
  return (
    <header className={`bg-black`}>
      <div className="container bg-admin-blue px-5 pt-10 pb-3 flex justify-between items-center">
        <div className={`flex gap-5 items-center`}>
          <AdminLogo />
          <p className={`text-h3 text-white `}>Панель администратора</p>
        </div>
        <div className={`cursor-pointer`}>
          <AdminUserIcon />
        </div>
      </div>
    </header>
  );
};
