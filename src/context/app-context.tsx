import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AppContextType = {
  layoutRef?: RefObject<HTMLDivElement>;
  setLayoutRef: Dispatch<SetStateAction<RefObject<HTMLDivElement> | undefined>>;
};

const AppContext = createContext<AppContextType>({
  layoutRef: undefined,
  setLayoutRef: () => {},
});

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [layoutRef, setLayoutRef] = useState<RefObject<HTMLDivElement>>();

  return (
    <AppContext.Provider value={{ layoutRef, setLayoutRef }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx)
    throw new Error("useAppContext must be used inside an AppContextProvider!");

  return ctx;
};
