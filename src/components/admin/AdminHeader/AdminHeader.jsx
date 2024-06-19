import { AdminLogo } from "@/components/admin/icons/AdminLogo";
import { AdminUserIcon } from "@/components/admin/icons/AdminUserIcon";
import { AdminLogout } from "@/components/admin/AdminLogout/AdminLogout";

export const AdminHeader = () => {
  return (
    <header className={`bg-black`}>
      <div className="container bg-admin-blue px-5 pt-10 pb-3 flex justify-between items-center">
        <div
          className={`flex flex-col md:flex-row gap-5 items-start md:items-center`}
        >
          <AdminLogo />
          <p className={`text-h4 md:text-h3 text-white `}>
            Панель администратора
          </p>
        </div>
        <AdminLogout />
      </div>
    </header>
  );
};
