"use client";
import { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export const Counter = ({ defaultCount = 0, classname }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  useEffect(() => {
    setCount(defaultCount);
  }, [defaultCount]);
  return (
    <div
      className={cn(
        `flex mt-auto max-w-[112px] w-full justify-start items-center`,
        classname,
      )}
    >
      <button
        onClick={decrement}
        className={`text-body1 border border-button rounded-full size-6 flex justify-center items-end`}
      >
        -
      </button>
      <input
        type="text"
        className={`text-button text-body4 md:text-body3 font-normal bg-inherit max-w-[50px] text-center`}
        value={count}
        onChange={(e) => {
          setCount(Number(e.target.value));
        }}
      />
      <button
        onClick={increment}
        className={`text-body1 border border-button rounded-full size-6 flex justify-center items-end`}
      >
        +
      </button>
    </div>
  );
};
