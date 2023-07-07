import { useEffect, useState } from "react";
import { Invoices } from "@/types";

const useInvoiceApi = () => {
  const [data, setData] = useState<Invoices>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch("/data.json");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, isError };
};

export default useInvoiceApi;
