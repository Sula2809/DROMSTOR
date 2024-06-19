import { Products } from "@/components/admin/Home/Products";
import { Users } from "@/components/admin/Home/Users";
import { LastActions } from "@/components/admin/Home/LastActions";

export const Home = () => {
  return (
    <div className={`container w-full md:w-4/5 py-12 space-y-10`}>
      <Products />
      <Users />
      <LastActions />
    </div>
  );
};
