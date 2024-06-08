"use client";
import React, { createContext, useContext, useState } from "react";

const SheetContext = createContext();

export const useSheetContext = () => {
  return useContext(SheetContext);
};

export const SheetProvider = ({ children }) => {
  const [openSheets, setOpenSheets] = useState([]);

  const openSheet = (id) => {
    setOpenSheets((prev) => [...prev, id]);
  };

  const closeSheet = (id) => {
    setOpenSheets((prev) => prev.filter((sheetId) => sheetId !== id));
  };

  const closeAllSheets = () => {
    setOpenSheets([]);
  };

  return (
    <SheetContext.Provider
      value={{ openSheets, openSheet, closeSheet, closeAllSheets }}
    >
      {children}
    </SheetContext.Provider>
  );
};
