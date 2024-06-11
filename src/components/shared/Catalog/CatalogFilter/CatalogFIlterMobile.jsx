"use client";
import React, { useState } from "react";
import { ArrowLeft, ChevronRight, XIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "@/components/shared/Icons/FilterIcon";

export const CatalogFilterMobile = () => {
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);
  const [subSubDrawerOpen, setSubSubDrawerOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const openMainDrawer = () => setMainDrawerOpen(true);
  const closeMainDrawer = () => setMainDrawerOpen(false);

  const openSubDrawer = () => setSubDrawerOpen(true);
  const closeSubDrawer = () => setSubDrawerOpen(false);

  const openSubSubDrawer = () => setSubSubDrawerOpen(true);
  const closeSubSubDrawer = () => setSubSubDrawerOpen(false);

  const openPriceDrawer = () => setPriceOpen(true);
  const closePriceDrawer = () => setPriceOpen(false);

  const openColorDrawer = () => setColorOpen(true);
  const closeColorDrawer = () => setColorOpen(false);

  return (
    <>
      <button
        onClick={openMainDrawer}
        className="p-2 bg-inherit text-button font-normal text-body3 flex items-center justify-center"
      >
        <FilterIcon width={24} height={24} />
        Фильтр
      </button>

      <div
        className={`fixed text-button z-50 top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ${mainDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className={`flex items-center justify-start`}>
          <button onClick={closeMainDrawer} className="p-2">
            <XIcon className={`size-6 text-button`} />
          </button>
          <h2 className="text-body3 font-bold text-button p-4">Категории</h2>
        </div>
        <div className={`bg-button w-full h-[1px]`}></div>
        <ul className="p-4 space-y-3">
          <li
            onClick={openSubDrawer}
            className="cursor-pointer flex justify-between items-center"
          >
            Категория 1
            <ChevronRight className={`size-4`} />
          </li>
          <li
            onClick={openPriceDrawer}
            className="cursor-pointer flex justify-between items-center"
          >
            цена
            <ChevronRight className={`size-4`} />
          </li>
          <li
            onClick={openColorDrawer}
            className="cursor-pointer flex justify-between items-centerr"
          >
            цвет
            <ChevronRight className={`size-4`} />
          </li>
        </ul>

        <div
          className={`fixed top-0 right-0 flex flex-col pb-5 w-full h-full bg-white transform transition-transform duration-300 ${colorOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className={`flex items-center justify-start`}>
            <button onClick={closeColorDrawer} className="p-2">
              <ArrowLeft className={`size-6`} />
            </button>
            <h2 className="text-body3 font-bold text-button p-4">Цвет</h2>
          </div>
          <div className={`bg-button w-full h-[1px]`}></div>
          <ul className="p-4 space-y-3">
            <li onClick={openSubSubDrawer} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Желтый
                </label>
              </div>
            </li>
            <li onClick={openSubSubDrawer} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Синий
                </label>
              </div>
            </li>
            <li onClick={openSubSubDrawer} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Красный
                </label>
              </div>
            </li>
          </ul>
          <div className={`w-full mt-auto`}>
            <div className={`bg-button w-full my-5 h-[1px]`}></div>
            <div className="flex items-center justify-center space-x-5 w-full">
              <Button className={`rounded-full`}>Сбросить</Button>
              <Button className={`rounded-full`}>Применить</Button>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 flex flex-col pb-5 w-full h-full bg-white transform transition-transform duration-300 ${priceOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className={`flex items-center justify-start`}>
            <button onClick={closePriceDrawer} className="p-2">
              <ArrowLeft className={`size-6`} />
            </button>
            <h2 className="text-body3 font-bold text-button p-4">Цена</h2>
          </div>
          <div className={`bg-button w-full h-[1px] mb-4`}></div>
          <form className={`flex items-center justify-between px-3`}>
            <input
              type="text"
              className={`border border-button rounded-full max-w-[150px] max-h-[40px] size-full p-2`}
              placeholder={"От 0 сом"}
            />
            <input
              type="text"
              className={`border border-button rounded-full max-w-[150px] max-h-[40px] size-full p-2`}
              placeholder={"До 12000 сом"}
            />
          </form>
          <div className={`w-full mt-auto`}>
            <div className={`bg-button w-full my-5 h-[1px]`}></div>
            <div className="flex items-center justify-center space-x-5 w-full">
              <Button className={`rounded-full`}>Сбросить</Button>
              <Button className={`rounded-full`}>Применить</Button>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ${subDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button onClick={closeSubDrawer} className="p-2">
            Назад
          </button>
          <h2 className="text-xl font-bold p-4">Подкатегории</h2>
          <ul className="p-4">
            <li onClick={openSubSubDrawer} className="cursor-pointer">
              Подкатегория 1
            </li>
            <li onClick={openSubSubDrawer} className="cursor-pointer">
              Подкатегория 2
            </li>
            <li onClick={openSubSubDrawer} className="cursor-pointer">
              Подкатегория 3
            </li>
          </ul>

          <div
            className={`fixed top-0 right-0 w-full h-full bg-white transform transition-transform duration-300 ${subSubDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <button onClick={closeSubSubDrawer} className="p-2">
              Назад
            </button>
            <h2 className="text-body3 font-bold text-button p-4">
              Подподкатегории
            </h2>
            <ul className="p-4">
              <li>Подподкатегория 1</li>
              <li>Подподкатегория 2</li>
              <li>Подподкатегория 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
