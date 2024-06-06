import {Button} from "@/components/ui/button";

export const Empty = ({isCart = false}) => {
    return (
        <div className="container text-center py-72">
            <p className={"text-body1 font-normal text-button mb-10 "}>
                {
                    isCart ? 'Ваша корзина пока пуста' : 'Добавьте товары в избранное и они появятся тут'
                }
            </p>
            <Button className={`text-body3 text-white font-bold py-3 px-12 bg-border_brown duration-500 hover:bg-button active:bg-button`}>Перейти в каталог</Button>
        </div>
    )
}