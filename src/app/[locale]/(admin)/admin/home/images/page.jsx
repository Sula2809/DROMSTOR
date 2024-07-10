"use client";
import {useEffect, useState} from "react";
import {GetAllProducts} from "@/shared/services/product/product";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {AddButton} from "@/components/admin/Buttons/AddButton";
import {EditButtonOutline} from "@/components/admin/Buttons/EditButtonOutline";
import {TrashIconWhite} from "@/components/admin/icons/TrashIconWhite";

export default function ImagesPage() {
    const [productsData, setProductsData] = useState([]);

    const fetchProducts = async () => {
        const products = await GetAllProducts();
        if (products) {
            setProductsData(products?.results)
            console.log(products?.results)
        }
    }
    useEffect(() => {
        fetchProducts()

        localStorage.removeItem("buttonAction");
        localStorage.removeItem("productID");
        localStorage.removeItem("name");
    }, []);
    return (
        <Accordion type="single" collapsible className="w-full">
            <div className="flex justify-between items-center my-5">
                <h2 className="text-body2 md:text-body1">Выберите изображение для изменения</h2>
                <AddButton link={"images"}>Добавить изображение</AddButton>
            </div>
            {productsData?.map((item) => (
                <AccordionItem value={`item-${item.id}`} key={item.id}>
                    <AccordionTrigger>{item?.title}</AccordionTrigger>
                    <AccordionContent className={` flex justify-between items-center gap-5`}>
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            {item?.images?.map((el) => (
                                <div className={`size-32`} key={el.id}>
                                    <img src={el?.image} alt={el?.id} className="size-full object-cover object-center"/>
                                </div>
                            ))}
                        </div>
                        <div className={`flex flex-col md:flex-row justify-between gap-5 items-center`}>
                            <EditButtonOutline name={item.title} productID={item.id}
                                               link={'images'}>Изменить</EditButtonOutline>
                            <Button
                                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"

                            >
                                <TrashIconWhite/> Удалить
                            </Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
