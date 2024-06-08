import React from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const SubCategoryDrawer = ({
  isOpen,
  onClose,
  children,
  style,
  duration = 500,
  classname,
}) => {
  return (
    <div
      className={cn(
        `fixed inset-0 z-50 transition-transform duration-700 transform ease-in-out ${isOpen ? "translate-x-0 duration-500" : "-translate-x-full duration-500"}`,
        classname,
      )}
      style={{ ...style, transitionDuration: `${duration}ms` }}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity  duration-500"
        style={{ transitionDuration: 700 }}
        onClick={onClose}
      ></div>
      <div
        className="relative bg-white w-96 h-full shadow-xl px-4 pt-14 transition-transform"
        style={{ transitionDuration: `${duration}ms` }}
      >
        {children}
        {style?.left === undefined && (
          <button onClick={onClose} className="absolute top-4 left-4">
            <XIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default SubCategoryDrawer;
