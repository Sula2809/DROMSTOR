'use client'
import {Button} from "@/components/ui/button";
import {Counter} from "@/components/shared/Counter/Counter";
import {Empty} from "@/components/shared/Drawers/Empty/Empty";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useLocale} from "next-intl";
export const DrawerContent = ({isCart=false}) => {
    const isEmpty = false
    const locale = useLocale()
    const router = useRouter()
    const favorites = [
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 21
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 122
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 200
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 20
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 5
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 5
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 10
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 12000,
            count: 1
        },
        {
            img: '/cart/cart1.png',
            title: 'Название продукта: ',
            price: 11000,
            count: 22
        }
    ]
    return (
        <div className={`w-full h-full space-y-5`}>
            <h2 className={`text-h4 font-normal text-button`}>{isCart ? 'Корзина' : 'Избранные'}</h2>
            {isEmpty ? <Empty isCart={false}/>
                :
                <div className={`h-full`}>
                    <div className={`h-[720px] overflow-y-scroll pr-10`}>
                        <div className={`space-y-5`}>
                            {favorites.map((item, index) => (
                                <div key={index} className={`flex justify-between`}>
                                    <div className={`w-[30%]`}>
                                        <Image src={item.img} alt={`image${index}`} width={188} height={188}/>
                                    </div>
                                    <div className={`flex flex-col w-1/2`}>
                                        <h2 className={`text-body2 font-normal text-button pb-2`}>
                                            {item.title + index}
                                        </h2>
                                        <p className={`text-body3 font-normal text-button py-1`}>
                                            {item.price + ' com'}
                                        </p>
                                        <Counter defaultCount={item.count} classname={`mt-auto`}/>
                                    </div>
                                    <Button
                                        className={`underline p-0 h-5 text-button hover:text-border_brown duration-300`}
                                        variant={'ghost'}>Удалить</Button>
                                </div>
                            ))
                            }
                        </div>

                    </div>
                    <div className={`my-4 text-end border-t border-border_brown pt-5`}>
                        <Button variant={'ghost'} className={`underline text-button`}>Удалить все</Button>
                        <Button variant={'ghost'} onClick={()=>{isCart ? router.replace(`${locale}/cart`) : router.replace(`${locale}/favorites`)}} className={`underline text-button`}>
                            {isCart ? 'Посмотреть корзину' : 'Посмотреть избранные'}
                        </Button>
                        {isCart ? <Button className={`bg-button hover:bg-border_brown active:bg-border_brown text-white`}>Оформить
                            заказ</Button> : null}
                    </div>
                </div>
            }

        </div>
    )
}