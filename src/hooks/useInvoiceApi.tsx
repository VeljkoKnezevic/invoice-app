import { useEffect, useState } from "react";
import { Invoices } from "@/types";

const useInvoiceApi = () => {
  const [data, setData] = useState<Invoices>(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch("/data.json");
        const json = await response.json();
        localStorage.setItem("data", JSON.stringify(json));
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return { data, setData, isLoading, isError };
};

export default useInvoiceApi;
