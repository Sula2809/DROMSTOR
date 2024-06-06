import Image from "next/image";
import {FavoriteIcon} from "@/components/shared/Icons/FavoriteIcon";
import {BugIcon} from "@/components/shared/Icons/BugIcon";

export const FavoritesContent = () => {
    const favorites = [
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 2000
        },
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 1200
        },
        {
            img:'/cart/cart1.png',
            isInCart:true,
            title: 'Product #',
            price: 3333
        },
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 2660
        },
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 2560
        },
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 2320
        },
        {
            img:'/cart/cart1.png',
            isInCart:true,
            title: 'Product #',
            price: 2310
        },
        {
            img:'/cart/cart1.png',
            isInCart:true,
            title: 'Product #',
            price: 20
        },
        {
            img:'/cart/cart1.png',
            isInCart:true,
            title: 'Product #',
            price: 22000
        },
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 1200
        },
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 4500
        },
        {
            img:'/cart/cart1.png',
            isInCart:false,
            title: 'Product #',
            price: 3000
        },
    ]
    return (
        <div className={`py-10`}>
            <h1 className={`text-h4 font-bold text-button mb-8`}>Избранные</h1>
            <div className="flex flex-wrap justify-start gap-8 items-center">
                {
                    favorites.map((item, index) => (
                        <div key={index} className={`shadow space-y-3 pb-3 cursor-pointer`}>
                            <div className={`relative size-full max-w-[318px]`} style={{ width: '318px', height: '388px' }}>
                                <Image src={item.img} alt="logo" className={`size-full object-cover`} width={316} height={388}/>
                                <span className={`absolute top-2 right-2 max-w-[60px] max-h-[34px] bg-background rounded-2xl flex justify-center size-full cursor-pointer`}><FavoriteIcon isStroke={true} stroke={'red'} fill={'red'} isFill={true}/></span>
                                <span className={`absolute top-12 right-2 max-w-[60px] max-h-[34px] bg-background rounded-2xl flex justify-center size-full cursor-pointer`}>{item.isInCart ? <BugIcon isFill={true} fill={'#5D5146'}/> : <BugIcon />}</span>
                            </div>
                            <h1 className={`px-3 text-body2 font-normal text-button`}>{`${item.title}${index}`}</h1>
                            <p className={`px-3 text-body3 font-normal text-button`}>{item.price + ' com'}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}