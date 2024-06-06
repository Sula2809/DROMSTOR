'use client'
import {useEffect, useState} from "react";
import {MinusIcon, PlusIcon} from "@heroicons/react/24/outline";

export const Counter = ({defaultCount}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count>0) {
            setCount(count - 1)
        }
        else{
            setCount(0)
        }
    }
    useEffect(() => {
        setCount(defaultCount)
    }, [defaultCount]);
    return (
        <div className={`flex mt-auto max-w-[112px] w-full justify-between items-center`}>
            <button
                onClick={decrement}
                className={`border rounded-full p-0 w-5 h-5 flex items-center justify-center border-button`}>
                <MinusIcon className={`text-button`}/>
            </button>
            <input type="text" className={`text-button text-body3 font-normal bg-inherit max-w-[50px] text-center`} value={count} onChange={(e)=>{setCount(Number(e.target.value))}}/>
            <button
                onClick={increment}
                className={`border rounded-full p-0 w-5 h-5 flex items-center justify-center border-button`}>
                <PlusIcon className={`text-button`}/>
            </button>
        </div>
    )
}