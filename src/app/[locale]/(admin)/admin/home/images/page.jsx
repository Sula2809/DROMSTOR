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

const productImages = [
  {
    id: 21,
    productID: 1,
    images: [
      "/productImages/image1.png",
      "/productImages/image2.png",
      "/productImages/image3.png",
      "/productImages/image4.jpg",
      "/productImages/image5.png",
    ],
  },
  {
    id: 22,
    productID: 2,
    images: [
      "/productImages/image5.png",
      "/productImages/image3.png",
      "/productImages/image2.png",
      "/productImages/image4.jpg",
      "/productImages/image1.png",
    ],
  },
  {
    id: 23,
    productID: 3,
    images: [
      "/productImages/image5.png",
      "/productImages/image1.png",
      "/productImages/image2.png",
      "/productImages/image4.jpg",
      "/productImages/image3.png",
    ],
  },
];

const products = [
  {
    id: 1,
    name: "Стул",
  },
  {
    id: 2,
    name: "Доска",
  },
  {
    id: 3,
    name: "Плитка",
  },
];

export default function ImagesPage() {
  return (
    <div>
      <div className={`flex gap-5 bg-admin-green py-2 px-3`}>
        <OkIcon />
        <p>Изоброжение Красный был(-а) успешно добавлен</p>
      </div>
      <div className="flex justify-between items-center my-5">
        <h2 className={`text-body1`}>Выберите изоброжение для изменения</h2>
        <AddButton link={"images"}>Добавить изоброжение</AddButton>
      </div>
      <div className="flex items-center justify-start gap-4 my-5">
        <p className={`text-body2`}>Поиск: </p>
        <div className="relative">
          <input
            type="text"
            className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit"
          />
          <SearchIcon className="absolute top-0 right-2" />
        </div>
      </div>

      <Accordion type="multiple" className="w-full">
        {products.map((item) => (
          <AccordionItem value={`item-${item.id}`} key={item.id}>
            <AccordionTrigger>
              <div className={`flex justify-between items-center flex-1`}>
                <div>{item.name}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`flex justify-between`}>
              <div className="flex flex-wrap gap-2">
                {productImages
                  .filter((img) => img.productID === item.id)
                  .flatMap((img) => img.images)
                  .map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={`Изображение ${imgIndex + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  ))}
              </div>
              <div className={`flex items-center gap-4`}>
                {" "}
                <EditButtonOutline
                  link={"images"}
                  productID={item.id}
                  productName={item.name}
                >
                  Изменить
                </EditButtonOutline>
                <Button className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2">
                  <TrashIconWhite /> Удалить
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className={`my-5`}>Категорий: {products.length}</div>
    </div>
  );
}
