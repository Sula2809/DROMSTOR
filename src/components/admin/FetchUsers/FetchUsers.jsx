'use client'
import {SearchIcon} from "@/components/admin/icons/SearchIcon";
import {Button} from "@/components/ui/button";
import {TrashIconWhite} from "@/components/admin/icons/TrashIconWhite";

function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
}

const users = [
    {id: generateRandomId(), name: "Admin"},
    {id: generateRandomId(), name: "Adida"},
    {id: generateRandomId(), name: "Tynch"},
    {id: generateRandomId(), name: "Masha"},
    {id: generateRandomId(), name: "Erjigit"},
    {id: generateRandomId(), name: "Kiyal"},
    {id: generateRandomId(), name: "Dastan"},
    {id: generateRandomId(), name: "AAK AAK"},
];

export const FetchUsers = ({type}) => {
    // const {token, setToken} = useAuth()
    // const UsersList = async () => {
    //     const response = await Requester(GetUsersList, token, setToken);
    //     if (response) {
    //         console.log("response", response);
    //     }
    // }
    // useEffect(() => {
    //     UsersList();
    // }, []);
    return (
        <div>
            <div className="flex justify-between items-center my-5">
                <h2 className={`text-body1`}>
                    {type === "users"
                        ? "Пользователи"
                        : type === "orders"
                            ? "Заказы пользователей"
                            : type === "favorites"
                                ? "Избранные пользователей"
                                : type === "basket"
                                    ? "Корзина пользователей"
                                    : "NULL"}
                </h2>
            </div>
            <div className="flex items-center justify-start gap-4 my-5">
                <p className={`text-body2`}>Поиск: </p>
                <div className="relative">
                    <input
                        type="text"
                        className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit"
                    />
                    <SearchIcon className="absolute top-0 right-2"/>
                </div>
                <p className={`text-body4`}>Выбрано 0 из {users.length}</p>
            </div>
            <table className="w-full text-left border-collapse">
                <thead className="bg-admin-grey">
                <tr>
                    <th className="p-2 text-center">
                        <input type="checkbox"/>
                    </th>
                    <th className="px-2">ID</th>
                    <th className="px-2">Имя</th>
                    <th className="px-2 flex justify-end">
                        <Button
                            className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2">
                            <TrashIconWhite/> Удалить
                        </Button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {users.map((item, index) => (
                    <tr
                        key={item.id}
                        className={`border-b ${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"} py-1`}
                    >
                        <td className="px-2 w-[3%] text-center">
                            <input type="checkbox"/>
                        </td>
                        <td className="px-2 w-[15%]">{item.id}</td>
                        <td className="px-2 w-[70%]  cursor-pointer hover:text-admin-grey-hover duration-700">
                            {item.name}
                        </td>
                        <td className="px-2 flex gap-2 w-[12%]">
                            <Button
                                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2">
                                <TrashIconWhite/> Удалить
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={`my-5`}>Пользователей: {users.length}</div>
        </div>
    );
};
