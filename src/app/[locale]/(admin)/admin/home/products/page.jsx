"use client";
import {SearchIcon} from "@/components/admin/icons/SearchIcon";
import {Button} from "@/components/ui/button";
import {TrashIconWhite} from "@/components/admin/icons/TrashIconWhite";
import {AddButton} from "@/components/admin/Buttons/AddButton";
import {EditButtonOutline} from "@/components/admin/Buttons/EditButtonOutline";
import productsStore from "@/shared/services/store/Products.store";
import {useEffect, useState} from "react";
import {useAuth} from "@/shared/Providers/AuthProvider";
import {DeleteProduct} from "@/shared/services/product/product";
import {Requester} from "@/components/Requester";

export default function ProductPage() {
    const {productsData, isLoadingProducts, fetchAllProducts} =
        productsStore.useGetAllProductsStore();
    const {token, setToken} = useAuth(); // Предполагается, что у вас есть useAuth для доступа к токену

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const deleteProduct = async (id) => {
        try {
            console.log(token)
            await Requester(DeleteProduct, token, setToken, id);
            fetchAllProducts();
        } catch (error) {
            console.error("Error deleting product", error);
        }
    };

    const handleDeleteSelectedProducts = async () => {
        try {
            await Promise.all(
                selectedProducts.map((id) => Requester(DeleteProduct, token, setToken, id)))
            setSelectedProducts([]);
            fetchAllProducts();
        } catch (error) {
            console.error("Error deleting selected products", error);
        }
    };

    const toggleSelectProduct = (id) => {
        setSelectedProducts((prev) =>
            prev.includes(id)
                ? prev.filter((productId) => productId !== id)
                : [...prev, id]
        );
    };

    const selectAllProducts = () => {
        if (selectedProducts.length === productsData?.results?.length) {
            setSelectedProducts([]);
        } else {
            setSelectedProducts(productsData?.results?.map((product) => product.id));
        }
    };

    const filteredProducts = productsData?.results?.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        fetchAllProducts();
        localStorage.removeItem("productID");
        localStorage.removeItem("buttonAction");
    }, []);

    useEffect(() => {
        console.log(productsData);
    }, [productsData])
    ;

    return (
        <div>
            <div className="flex justify-between items-center my-5">
                <h2 className={`text-body1`}>Выберите продукт для изменения</h2>
                <AddButton link={"products"}>Добавить продукт</AddButton>
            </div>
            <div className="flex items-center justify-start gap-4 my-5">
                <p className={`text-body2`}>Поиск: </p>
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit"
                    />
                    <SearchIcon className="absolute top-0 right-2"/>
                </div>
                <p className={`text-body4`}>
                    Выбрано {selectedProducts.length} из {productsData?.results?.length}
                </p>
            </div>
            <table className="w-full text-left border-collapse">
                <thead className="bg-admin-grey">
                <tr>
                    <th className="p-2 text-center">
                        <input
                            type="checkbox"
                            checked={selectedProducts.length === productsData?.results?.length}
                            onChange={selectAllProducts}
                        />
                    </th>
                    <th className="px-2">ID</th>
                    <th className="px-2">Название</th>
                    <th className="px-2">Категория</th>
                    <th className="px-2 flex justify-end">
                        <Button
                            className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                            onClick={handleDeleteSelectedProducts}
                        >
                            <TrashIconWhite/> Удалить
                        </Button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts?.map((item, index) => (
                    <tr
                        key={item.id}
                        className={`border-b ${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"} py-1`}
                    >
                        <td className="px-2 w-[3%] text-center">
                            <input
                                type="checkbox"
                                checked={selectedProducts.includes(item.id)}
                                onChange={() => toggleSelectProduct(item.id)}
                            />
                        </td>
                        <td className="px-2 w-[3%]">{item.id}</td>
                        <td className="px-2 w-[60%]">
                            {item.title}
                        </td>
                        <td className="px-2 w-[20%]">{item.category.name}</td>
                        <td className="px-2 flex gap-2 w-[10%]">
                            <EditButtonOutline
                                link={"products"}
                                productID={item.id}
                                name={item.name}
                                name_en={item.name_en}
                                descripiton={item.description}
                                description_en={item.description_en}
                                color={item.colors}
                                images={item.images}
                                materials={item.fabrics}
                                categoryID={item.category.id}
                                subcategoryID={item?.subcategories?.[0]?.id}
                                subsubcategoryID={item?.subsubcategories?.[0]?.id}
                            >
                                Изменить
                            </EditButtonOutline>
                            <Button
                                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                                onClick={() => deleteProduct(item.id)}
                            >
                                <TrashIconWhite/> Удалить
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={`my-5`}>Продуктов: {filteredProducts?.length}</div>
        </div>
    );
}
