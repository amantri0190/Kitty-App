import { createContext, useContext, useState } from "react";

const DrawerContext = createContext<any>(null);

export function DrawerProvider({ children }: any) {
  const [open, setOpen] = useState(false);
  const resetDrawer = () => setOpen(false);
  return (
    <DrawerContext.Provider
      value={{
        open,
        openDrawer: () => setOpen(true),
        closeDrawer: () => setOpen(false),
        resetDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);
