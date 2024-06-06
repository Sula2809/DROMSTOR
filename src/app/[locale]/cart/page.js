'use client'
import React from "react";
import {Empty} from "@/components/shared/Drawers/Empty/Empty";
import {BreadCrumb} from "@/components/shared/BreadCrumb/BreadCrumb";

export default function Cart() {

    const cartData = true

    if (cartData) {
        return (
            <Empty isCart={false}/>
        )
    }

    const cartBreadCrumbs = [
        {name: "Главная", link: "/"},
        {name: "Корзина", link: "/cart"}
    ]

    return (
        <>
            <main className={`container px-20 py-5`}>
                <BreadCrumb items={cartBreadCrumbs}/>
            </main>
        </>
    )
}
