"use client";
import React, { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const SubCategoryDrawer = ({
  isOpen,
  onClose,
  children,
  style,
  duration = 500,
  classname,
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      setTimeout(() => setOpen(false), duration);
    }
  }, [isOpen, duration]);

  return (
    <div
      className={cn(
        `fixed mt-24 inset-0 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } visible ${open ? "block" : "hidden"}`,
        classname,
      )}
      style={{ ...style, transitionDuration: `${duration}ms` }}
    >
      <div
        className={`fixed inset-0 ${
          isOpen ? "bg-black bg-opacity-50" : ""
        } transition-opacity`}
        style={{ transitionDuration: `700ms` }}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white max-w-64 w-full h-full px-4 pt-4 ${
          isOpen ? "animate-expandWidth" : "animate-collapseWidth"
        }`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {children}
      </div>
    </div>
  );
};
