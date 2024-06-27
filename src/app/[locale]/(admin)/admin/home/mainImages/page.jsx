"use client";
import { AddButton } from "@/components/admin/Buttons/AddButton";
import { useEffect, useState } from "react";
import {
  GetMainImages,
  RemoveMainImages,
} from "@/shared/services/HomepageSwiperImages/mainImages";
import { Button } from "@/components/ui/button";
import { TrashIconWhite } from "@/components/admin/icons/TrashIconWhite";
import { useAuth } from "@/shared/Providers/AuthProvider";

export default function MainImagesPage() {
  const [imagesData, setImagesData] = useState([]);
  const { token } = useAuth();

  const getImages = async () => {
    const res = await GetMainImages();
    if (res) {
      console.log(res);
      setImagesData(res.data);
    } else {
      console.log("nono");
    }
  };

  const removeImage = async (id) => {
    const remove = await RemoveMainImages(token, id);
    if (remove) {
      console.log(remove);
      getImages();
    }
  };

  useEffect(() => {
    try {
      getImages().then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h2 className={`text-body1`}>Фотографии продукции в интерьере</h2>
        <AddButton link={"mainImages"}>Добавить фотографию</AddButton>
      </div>
      <div className="flex items-end justify-between gap-4 flex-wrap">
        {imagesData.map((item, index) => (
          <div key={index} className={`space-y-2`}>
            <div className={`w-[350px] h-[250px]`}>
              <img
                src={item.image}
                alt={item.id}
                className="object-cover object-center size-full"
              />
            </div>
            <div>
              <Button
                className={`bg-inherit border border-white py-1 px-3 rounded-xl`}
                onClick={() => removeImage(item.id)}
              >
                <TrashIconWhite /> Удалить
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
