import { AddIcon } from "@/components/admin/icons/AddIcon";

export const LastActions = () => {
  const lastAction = [
    {
      title: "Стеновые панели",
      category: "категории",
      time: "12:25",
      date: "25.05.2024",
    },
    {
      title: "Стеновые панели",
      category: "категории",
      time: "06:17",
      date: "24.05.2024",
    },
    {
      title: "Стеновые панели",
      category: "категории",
      time: "09:49",
      date: "23.05.2024",
    },
    {
      title: "Стеновые панели",
      category: "категории",
      time: "22:21",
      date: "22.05.2024",
    },
    {
      title: "Стеновые панели",
      category: "категории",
      time: "23:06",
      date: "21.05.2024",
    },
    {
      title: "Стеновые панели",
      category: "категории",
      time: "10:35",
      date: "20.05.2024",
    },
  ];
  return (
    <div>
      <h1 className={"text-center text-body1"}>Последние действия</h1>
      <ul className={`mt-10`}>
        {lastAction.map((el, index) => (
          <li
            key={index}
            className={`border-b border-b-custom-grey bg-admin-grey flex justify-between px-3 py-1`}
          >
            <div className={`flex items-center gap-3`}>
              <AddIcon />
              <h2 className={`text-blue-text text-body3`}>{el.title}</h2>
              <h3 className={`text-c1`}>{el.category}</h3>
            </div>
            <div className={"flex gap-3 items-center text-custom-grey"}>
              <p className={`text-body3`}>{el.time}</p>
              <p className={`text-body3`}>{el.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
