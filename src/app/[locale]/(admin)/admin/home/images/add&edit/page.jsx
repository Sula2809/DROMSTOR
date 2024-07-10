"use client";
import {useEffect, useState} from "react";
import {CreateImages, GetImagesByID} from "@/shared/services/images/images";
import {useAuth} from "@/shared/Providers/AuthProvider";
import {ScrollArea} from "@/components/ui/scroll-area";
import {GetAllProducts} from "@/shared/services/product/product";
import {Skeleton} from "@/components/ui/skeleton";
import {Button} from "@/components/ui/button";
import {Requester} from "@/components/Requester";

export default function AddEditCategory() {
    const [isLoading, setIsLoading] = useState(false);
    const [action, setAction] = useState(null);
    const [productID, setProductID] = useState(null);
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [imagesList, setImagesList] = useState([]);
    const [files, setFiles] = useState([]);
    const [selectedProductID, setSelectedProductID] = useState(null);

    const {token, setToken} = useAuth();

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(prevFiles => [
            ...prevFiles,
            ...selectedFiles.map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }))
        ]);
    };

    const handleRemoveFile = (indexToRemove) => {
        setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
    };

    const fetchImagesList = async (id) => {
        const res = await GetImagesByID(id);
        if (res) setImagesList(res.data);
    };

    const fetchProducts = async () => {
        const products = await GetAllProducts();
        if (products) setProducts(products.results);
    };

    const handleAddImages = async () => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('product', selectedProductID);
        files.forEach((fileObj, index) => {
            formData.append(`image_${index}`, fileObj.file);
        });

        try {
            console.log("Отправка запроса на сервер с данными:", formData);
            const res = await Requester(CreateImages, token, setToken, formData);
            setIsLoading(false);
            if (res) {
                console.log("Ответ от сервера:", res);
                // Добавьте любые действия после успешного ответа
            } else {
                console.log("Запрос завершился, но ответ пустой или некорректный.");
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Ошибка при отправке запроса:", error);
            // Обработайте ошибку, например, покажите сообщение об ошибке пользователю
        }
    };


    useEffect(() => {
        const storedAction = localStorage.getItem("buttonAction");
        setAction(storedAction);
        if (storedAction === 'edit') {
            const storedProductID = localStorage.getItem("productID");
            const storedProductName = localStorage.getItem("name");
            if (storedProductID) {
                setProductID(storedProductID);
                setSelectedProductID(storedProductID);
            }
            if (storedProductName) setProductName(storedProductName);
            fetchImagesList(storedProductID);
        }
        fetchProducts();
    }, []);

    const handleProductClick = (id, name) => {
        setSelectedProductID(id);
        setProductName(name);
    };

    useEffect(() => {
        if (productID && products.length > 0) {
            setSelectedProductID(productID);
        }
    }, [products]);

    return (
        <div className={`space-y-5`}>
            <div>
                <h1>{`${action === 'edit' ? 'Изменение' : 'Добавление изображения'} продукта ${productName ? productName : ''}`}</h1>
            </div>
            <div>
                <ScrollArea className={`w-4/5 h-[200px] border rounded p-2`}>
                    {products?.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => handleProductClick(item.id, item.title)}
                            className={`h-10 p-2 duration-200 cursor-pointer ${item.id === selectedProductID ? 'bg-red-600' : index % 2 === 0 ? 'bg-gray-600' : 'bg-inherit'}`}
                            onMouseEnter={(e) => e.currentTarget.classList.add('bg-red-400')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('bg-red-400')}
                        >
                            {item.title}
                        </div>
                    ))}
                </ScrollArea>
            </div>
            <div>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                />
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {files.map((fileObj, index) => (
                        <div key={index} style={{margin: '10px', textAlign: 'center'}}>
                            <img
                                src={fileObj.preview}
                                alt={`preview ${index}`}
                                style={{width: '200px', height: '200px', objectFit: 'cover'}}
                            />
                            <button
                                onClick={() => handleRemoveFile(index)}
                                className={`mt-2 p-1 bg-red-700 hover:bg-red-900 rounded border-none cursor-pointer`}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`bg-admin-grey-hover flex justify-between items-center py-1 px-4`}>
                <div className={`flex justify-between items-center gap-5`}>
                    {isLoading ? (
                        <Skeleton className="h-10 w-[105px]"/>
                    ) : (
                        <Button
                            className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                            onClick={handleAddImages}
                        >
                            Сохранить
                        </Button>
                    )}
                    {action === "add" ? (
                        isLoading ? (
                            <Skeleton className={"h-10 w-28"}/>
                        ) : (
                            <Button
                                className={`bg-admin-blue md:hover:bg-admin-blue-hover`}
                            >
                                Сохранить и добавить еще
                            </Button>
                        )
                    ) : null}
                </div>
                {action === "edit" ? (
                    <Button
                        className={`bg-admin-red hover:bg-admin-red-hover duration-500 `}
                    >
                        Удалить
                    </Button>
                ) : null}
            </div>
        </div>
    );
}
