import { createContext, useState, } from "react";
import { Children } from "./interfaceContext";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IProvider {
  form: boolean;
  handleClickForm: () => void;
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
  currentPage: number; 
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

export const Context = createContext<IProvider>({} as IProvider);

const ProviderPage = ({ children }: Children) => {
  const [form, setForm] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 12;
  const navigate = useNavigate()

  const handleClickForm = () => {
    setForm(!form);
  };

  return (
    <Context.Provider
      value={{
        form,
        handleClickForm,
        setForm,
        navigate,
        currentPage, 
        setCurrentPage,
        limit
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProviderPage;