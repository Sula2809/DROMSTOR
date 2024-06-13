import { Button } from "@/components/ui/button";

export default function AddSubCategory() {
  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>Добавить подкатегорию</h2>
      <div className={`flex gap-20 items-center`}>
        <p className={`text-body2 font-bold`}>Имя:</p>{" "}
        <input
          className={`bg-inherit rounded-sm border border-white`}
          type="text"
        />
      </div>
      <div className={`bg-admin-grey-hover flex gap-5 py-1 px-4`}>
        <Button className={`bg-admin-blue md:hover:bg-admin-blue-hover`}>
          Сохранить
        </Button>
        <Button className={`bg-admin-blue md:hover:bg-admin-blue-hover`}>
          Сохранить и добавить еще
        </Button>
      </div>
    </div>
  );
}
