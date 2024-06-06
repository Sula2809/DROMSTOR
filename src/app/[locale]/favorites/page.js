'use client'
import React from "react";
import {Empty} from "@/components/shared/Drawers/Empty/Empty";
import {BreadCrumb} from "@/components/shared/BreadCrumb/BreadCrumb";
import {FavoritesContent} from "@/components/shared/FavoritesContent/FavoritesContent";

export default function Favorite() {

    const favoritesData = false

    if (favoritesData) {
        return (
            <Empty isCart={false}/>
        )
    }

    const favoritesBreadCrumbs = [
        {name: "Главная", link: "/"},
        {name: "Избранные", link: "/favorites"}
    ]

    return (
        <>
            <main className={`container px-20 py-5`}>
                <BreadCrumb items={favoritesBreadCrumbs}/>
                <FavoritesContent/>
            </main>
        </>
    )
}
