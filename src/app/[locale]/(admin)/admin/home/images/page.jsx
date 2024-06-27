"use client";
import { OkIcon } from "@/components/admin/icons/OkIcon";
import { AddButton } from "@/components/admin/Buttons/AddButton";
import { SearchIcon } from "@/components/admin/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { TrashIconWhite } from "@/components/admin/icons/TrashIconWhite";
import { EditButtonOutline } from "@/components/admin/Buttons/EditButtonOutline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import productsStore from "@/shared/services/store/Products.store";
import { GetAllImages } from "@/shared/services/images/images";
import { useEffect, useState } from "react";

export default function ImagesPage() {
  const { productItem, fetchAllProducts } =
    productsStore.useGetAllProductsStore();
  const [data, setData] = useState({ name: "", images: [] });
  useEffect(() => {
    const fetchData = async () => {
      await fetchAllProducts();
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log("itens: ", productItem);
    const productsName = productItem?.results?.map((item) => item.name);
    console.log("produst: ", productsName);
  }, [productItem]);
}
